import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import ScrollField from "@/components/ScrollField";
import Compressor from "compressorjs";

import styles from "@/styles/releaseforms.module.css";

/**
 * @component ReleaseForms serves as the main entry point for clients to access and electronically sign the release form specific to their chosen artist before getting tattooed.
 */
export default function Releaseforms() {
  const form = useRef(null);
  const router = useRouter();

  // Validation & form state
  const inputValidationError = {
    artist_name: true,
    user_name: false,
    user_risks: false,
    user_consent: false,
    my_file: false,
  };

  const inputForm = {
    artist_name: "",
    user_name: "",
    user_risks: "",
    user_consent: "",
    current_date: "",
    my_file: null,
    user_email: "",
  };

  const [currentDate, setCurrentDate] = useState("");
  const [validationError, setValidationError] = useState(inputValidationError);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [formValues, setFormValues] = useState(inputForm);
  const [compressedImage, setCompressedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  // Set current date when component mounts
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
    setFormValues((prevValues) => ({ ...prevValues, current_date: today }));
  }, []);

  const artists = [
    "Rich Marafioti",
    "Mercy Wright",
    "Trevor Aarsvold",
    "Allie Sider",
  ];
  const riskIndicators = [
    "Recipient of an organ transplant",
    "Hemophilia",
    "Taking blood thinning medication",
    "Epilepsy",
    "History of skin disease, skin sensitivities",
    "Diabetes",
    "Allergies to soap or adhesives",
    "Allergies to pigments, dyes or latex",
    "Pregnant or nursing",
    "None",
  ];
  const consent = ["Yes", "No"];
  // check to see if a file has been attached, if not indicate with an error statement
  const handleImageChange = (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    // Compress the image to below 500kb
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 1000,
      maxHeight: 1000,
      success(compressedResult) {
        // 500KB limit
        if (compressedResult.size > 500 * 1024) {
          setFileSizeError(true);
          setFormValues((prevValues) => ({ ...prevValues, my_file: null }));
        } else {
          setFileSizeError(false);
          setCompressedImage(compressedResult); // Store the compressed image
          setFormValues((prevValues) => ({
            ...prevValues,
            my_file: compressedResult,
          }));
          // Validate after setting
          validateField("my_file", compressedResult);

          // Use DataTransfer to override the form input with the compressed image
          const fileInput = form.current.querySelector('input[name="my_file"]');
          if (fileInput) {
            const dataTransfer = new DataTransfer();
            const file = new File([compressedResult], "compressed-image.jpg", {
              type: compressedResult.type,
            });
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files; // Assign compressed file to the input
          }
        }
      },
      error(err) {
        console.error("Image compression error:", err.message);
      },
    });
  };

  //if risk indicator is checked push the value to the updated risks array and change risk indicators
  const handleRiskChange = (e) => {
    const { value, checked } = e.target;
    let updatedRisks = [...formValues.user_risks];

    if (checked) {
      updatedRisks.push(value);
    } else {
      updatedRisks = updatedRisks.filter((risk) => risk !== value);
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      user_risks: updatedRisks,
    }));

    // Validate risks field
    validateField("user_risks", updatedRisks);

    // Trigger validation for user_consent field after risk is updated
    validateField("user_consent", formValues.user_consent);
  };

  /**
   *
   * @handleInputChange functionality for file size validation and allowing the user to change values of unput fields
   */
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;

    if (name === "my_file" && files) {
      const selectedFile = files[0];
      // Call the image compression function
      handleImageChange(selectedFile);
      return;
    }

    //allow user to change form values
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
    //then validate field
    validateField(name, newValue);

    // If user_consent is filled, trigger validation for my_file
    if (name === "user_consent") {
      validateField("my_file", formValues.my_file); // Check if my_file is valid after pronouns
    }
  };

  // Validate form fields
  const validateField = (field, value) => {
    let isValid = true;
    switch (field) {
      case "artist_name":
        isValid = value.trim() !== "";
        break;
      case "user_name":
        isValid = value.trim() !== "";
        break;
      case "user_risks":
        isValid = Array.isArray(value) && value.length > 0;
        break;
      case "user_consent":
        isValid = value.trim() !== "";
        break;
      case "my_file":
        isValid = value && value.size <= 500000; // 500KB limit
        setFileSizeError(!isValid);
        break;
      default:
        break;
    }
    //set validation error message if the form field is not filled out and the users in on to another form field
    setValidationError((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
    }));

    return isValid;
  };

  // Validate all fields individually during form submission
  const validateAllFields = () => {
    let allValid = true;

    Object.keys(inputForm).forEach((field) => {
      const isFieldValid = validateField(field, formValues[field]);
      if (!isFieldValid) {
        allValid = false;
      }
    });

    return allValid;
  };

  // Handle input focus to validate the next field in the form
  const handleInputFocus = (currentField) => {
    const fields = Object.keys(inputForm);
    const currentIndex = fields.indexOf(currentField);

    // Validate the current field itself
    validateField(currentField, formValues[currentField]);

    // Validate the next field, if any
    if (currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      validateField(nextField, formValues[nextField]);
    }
  };

  // Submit the form with the compressed image and trigger EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    const isFormValid = validateAllFields();

    if (isFormValid) {
      if (compressedImage) {
        const formData = new FormData(form.current);
        // Attach compressed image
        formData.set("my_file", compressedImage, "compressed-image.jpg");

        /*const fileInput = form.current.querySelector('input[name="my_file"]');
        if (fileInput) {
          console.log("File input before sending:", fileInput.files[0]); // Log the file being sent
        }*/
      }
      // Proceed with sending the email
      sendEmail();
    } else {
      console.log("Form validation failed.");
    }
  };

  // Submit form via EmailJS
  const sendEmail = () => {
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_5she545",
        "template_6a8lzj9",
        form.current,
        "N8iJs0OwqbPvxYuRo"
      )
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success");
          setIsLoading(false);
          form.current.reset();
          setFormValues(inputForm);
          router.push("/formsent");
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          if (error.text.includes("Attachments size limit")) {
            setFileSizeError(true);
          } else {
            setMessageStatus("error");
          }
        }
      );
  };

  return (
    <article className={styles.releaseforms}>
      <Head>
        <title>Release Form Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the Release Forms tattoo of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/releaseforms" />
      </Head>
      <ScrollField />
      <div className={styles.header}>
        <h1 className={styles.releaseformsHeader}>
          Waiver, Release & Consent To Tattoo
        </h1>
      </div>
      <h2 className={styles.releaseformsTagline}>
        Please fill out this form before getting tattooed
      </h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={styles.releaseforms}
        id={styles.formContainer}
      >
        <p className={styles.releaseContent}>
          I wish to have my skin tattooed. In consideration for such services
          from:
        </p>
        <div className={styles.tattooSizeContainer}>
          <label className={styles.label}>
            Artist Name:{" "}
            {validationError.artist_name && (
              <span className={styles.error}>*Select your tattoo artist.</span>
            )}
          </label>
          <select
            className={styles.form}
            type="text"
            name="artist_name"
            value={formValues.artist_name}
            aria-label="users_selected_artist_name"
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("artist_name")}
            required
          >
            <option value="">Select an artist</option>
            {artists.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>{" "}
        <p className={styles.releaseContent} id={styles.releaseContentBreak}>
          and Marf Inc. doing business as Wild Wind Tattoo at 1452 N. Western
          Ave. Chicago IL 60622 (together with it&apos;s artists, apprentices
          and agents, the “Tattoo Studio”), I agree to and affirm that:
        </p>
        <p className={styles.releaseContent}>
          I,
          <label className={styles.label}>
            {validationError.user_name && (
              <span className={styles.error}>
                *Please enter your first and last name*
              </span>
            )}
          </label>
          <input
            className={styles.form}
            id={styles.clientName}
            type="text"
            name="user_name"
            aria-label="user_name"
            placeholder="Enter your first and last name"
            value={formValues.user_name}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("user_name")}
            required
          />
          have been informed of the risks inherent to tattooing. I fully
          understand that these risks, known and unknown, can lead to injury,
          including infection, scarring and difficulties in detecting melanoma.
          I have read the following list of some risk indicators and checked
          those that apply to me:
        </p>
        <label className={styles.label}>
          {validationError.user_risks && (
            <span className={styles.error}>*Select any applicable risks*</span>
          )}
        </label>
        <div className={styles.checkboxGroup}>
          {riskIndicators.map((risk, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="user_risks"
                value={risk}
                checked={formValues.user_risks.includes(risk)}
                onChange={handleRiskChange}
                aria-label={`risk_${risk}`}
              />
              {risk}
            </label>
          ))}
        </div>
        <p className={styles.releaseContent}>
          Tattooing involves breaking the skin, one of your body&apos;s main
          protective barriers. This means you may be more susceptible to skin
          and blood infections. Specific risks include:
        </p>
        <p className={styles.releaseContent}>
          Bloodborne diseases. If the equipment used to do your tattoo is
          contaminated with the blood of an infected person, you can contract a
          number of serious bloodborne diseases including Hepatitis C & B,
          tetanus & HIV. Skin infections.
        </p>
        <p className={styles.releaseContent}>
          The use of unsterile equipment or re-used ink can result in skin
          infections, ranging from minor to potentially serious antibiotic
          resistant infections. Symptoms may include redness, swelling or
          pus-like drainage.{" "}
        </p>
        <p className={styles.releaseContent}>
          Granulomas. Bumps may form around the site of the tattoo as a reaction
          to the ink. Scars and keloids. The ink may cause scars & keloids.
          Raised ridged areas caused by overgrowth of scar tissue.
        </p>
        <p className={styles.releaseContent}>
          Allergic reactions. The ink may cause an itchy rash at the tattoo
          site. Swelling & burning. Tattooed areas may swell or burn during
          Magnetic Resonance Imaging (MRI) exams.{" "}
        </p>
        <p className={styles.releaseContent} id={styles.releaseContentBreak}>
          Having been informed of the potential risks associated with getting a
          tattoo, I still wish to proceed with the tattooing and I freely accept
          and expressly assume the risks that may arise from tattooing.
        </p>
        <p className={styles.releaseContent} id={styles.releaseContentBreak}>
          The Artist and the Tattoo Studio are not responsible for the meaning
          or spelling of the symbol or text that I have provided them or chosen
          from. Variations in color and design may exist between the tattoo art
          I have selected and the actual tattoo when it is applied to my body.
          Over time the color and clarity of my tattoo will fade due to
          unprotected exposure to the sun and the naturally occurring dispersion
          of pigment under the skin. The tattoo will permanently change my
          appearance and can only be removed by laser or surgical means, which
          can be disfiguring and/or costly and which are unlikely to restore my
          skin to its pre-tattoo condition even after it&apos;s removed.{" "}
        </p>
        <p className={styles.releaseContent} id={styles.releaseContentBreak}>
          Both the ARTIST and the TATTOO STUDIO have given me the full
          opportunity to read and understand this document and to ask questions
          about the tattoo procedure and the staff has answered satisfactorily.
          I have received instructions on the care of my tattoo while it&apos;s
          healing. I understand them and will follow them. If I fail to follow
          them, then I am responsible for consequent defects in the art and
          infections in my skin. I am not drunk or drugged, I do not have a
          mental impairment that may affect my judgment in getting a tattoo, and
          I voluntarily engage these tattoo services without duress. I am of
          legal age (and have provided valid proof of age) and am competent to
          sign this Agreement I hereby WAIVE AND RELEASE the Artist and the
          Tattoo Studio from all liability whatsoever, for any and all claims or
          causes of action that I, my estate, heirs, executors or assigns may
          have for personal injury or otherwise, including any direct and/or
          consequential damages, which result or arise from the tattooing,
          whether caused by the negligence or fault of either the Artist or the
          Tattoo Studio, or otherwise. If any provision, section, subsection,
          clause or phrase of this release is found to be unenforceable or
          invalid, that reportion shall be severed from this contract so that
          the remaining contract is valid and enforceable.
        </p>
        <p className={styles.releaseContent} id={styles.consentParagraph}>
          I consent to letting my artist take a photo of my tattoo for use on
          social media or for Wild Wind Tattoo&apos;s marketing purposes:
        </p>
        <div
          className={styles.tattooSizeContainer}
          id={styles.releaseContentBreak}
        >
          <label className={styles.label} id="nextField">
            {validationError.user_consent && (
              <span className={styles.error}>*Select an answer</span>
            )}
          </label>
          <select
            className={styles.form}
            name="user_consent"
            value={formValues.user_consent}
            aria-label="users_selected_consent_answer"
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("user_consent")}
            required
          >
            <option value="">Consent answer</option>
            {consent.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <p className={styles.releaseContent}>
          I,{" "}
          <span>
            {formValues.user_name ? formValues.user_name : "________"}
          </span>{" "}
          {/* Display the user's name */}
          HAVE READ THIS LEGAL CONTRACT, I UNDERSTAND IT. I AGREE TO BE BOUND BY
          IT.
        </p>
        <div className={styles.todaysDateContainer}>
          <label className={styles.todaysDate} id={styles.date}>
            Today&apos;s Date:
          </label>
          <input
            type="date"
            name="current_date"
            value={currentDate}
            className={styles.todaysDate}
            readOnly={true}
          />
        </div>
        <div id={styles.attachFile}>
          <label className={styles.label} id={styles.attachMessage}>
            Attach a photo of your ID, DL or Passport:
            {validationError.my_file && (
              <span className={styles.error}>
                *Attach a photo of your identification
              </span>
            )}
          </label>
        </div>
        <div className={styles.chooseFile}>
          <input
            className={styles.form}
            id={styles.file}
            type="file"
            name="my_file"
            accept="image/*"
            onChange={(e) => handleImageChange(e.target.files[0])}
            aria-label="users_attached_id_photo"
            required
          />
        </div>
        <label className={styles.releaseContent} id={styles.emailParagraph}>
          If you would like to receive a copy of your release form please enter
          your email address:
        </label>
        <input
          className={styles.form}
          type="email"
          name="user_email"
          aria-label="user_email"
          value={formValues.user_email}
          placeholder="Enter your email address"
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("user_email")}
        />
        <input
          className={styles.formSubmit}
          type="submit"
          aria-label="form_submit_button"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading || fileSizeError}
        />
        {validationError.artist_name && (
          <span className={styles.errorBottom}>
            *Please enter your artists name*
          </span>
        )}
        {validationError.user_name && (
          <span className={styles.errorBottom}>*Please enter your name*</span>
        )}
        {validationError.user_risks && (
          <span className={styles.errorBottom}>
            *Please select any risks you may have*
          </span>
        )}
        {validationError.user_consent && (
          <span className={styles.errorBottom}>
            *Please tell us if you consent to letting your artist take a photo
            of your tattoo*
          </span>
        )}
        {validationError.user_pronouns && (
          <span className={styles.errorBottom}>
            *Please tell us your preferred pronouns*
          </span>
        )}
        {validationError.my_file && (
          <span className={styles.errorBottom} id={styles.attachError}>
            *Attach a photo of your identification
          </span>
        )}
        {messageStatus === "error" && (
          <span className={styles.error}>
            **Message failed to send. Please try again**
          </span>
        )}
      </form>
    </article>
  );
}
