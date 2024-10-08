import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
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
    user_pronouns: false,
    my_file: false,
  };

  const inputForm = {
    artist_name: "",
    user_name: "",
    user_risks: "",
    user_consent: "",
    user_pronouns: "",
    current_date: "",
    my_file: null,
  };

  const [currentDate, setCurrentDate] = useState("");
  const [validationError, setValidationError] = useState(inputValidationError);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [formValues, setFormValues] = useState(inputForm);
  const [selectedRisk, setSelectedRisk] = useState("");
  const [selectedRisks, setSelectedRisks] = useState([]);
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
    "History of allergies to pigments, dyes or Latex",
    "Pregnant or nursing",
    "None",
  ];
  const consent = ["Yes", "No"];
  const pronouns = ["She / Her", "They / Them", "He / Him"];

  const handleAddRisk = () => {
    if (selectedRisk) {
      const newRisk = `${selectedRisk}`;
      const updatedRisks = [...selectedRisks, newRisk]; // Create updated risks array
      setSelectedRisks(updatedRisks);

      // Update form values
      setFormValues((prevValues) => ({
        ...prevValues,
        user_risks: updatedRisks.join(", "), // Use updatedRisks directly
      }));

      // Trigger validation with the updated risks array
      validateField("user_risks", updatedRisks);

      // Reset selected risk
      setSelectedRisk("");
    }
  };

  /**
   * @function handleRemoveRisk removes a selected risk from the selectedRisks array
   * @param index of the risk to remove
   */
  const handleRemoveRisk = (index) => {
    const newSelectedRisks = selectedRisks.filter((_, i) => i !== index);
    setSelectedRisks(newSelectedRisks);

    // Update form values with the modified risk array
    setFormValues((prevValues) => ({
      ...prevValues,
      user_risks: newSelectedRisks.join(", "),
    }));

    // Revalidate risks after removal
    validateField("user_risks", newSelectedRisks);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;

    // Log the field name and its new value
    console.log(`Field changed: ${name}, Value:`, newValue);

    // Check if the field is for file attachment
    if (name === "my_file" && files) {
      const selectedFile = files[0];

      // Log file details
      console.log("File selected:", selectedFile);
      console.log(`File size: ${selectedFile.size} bytes`);

      const maxFileSize = 500 * 1024; // 500KB

      // Check if the file exceeds the size limit
      if (selectedFile.size > maxFileSize) {
        setFileSizeError(true);
        console.log("File size exceeds the limit of 500KB");
        setFormValues((prevValues) => ({ ...prevValues, [name]: null }));
        return;
      } else {
        setFileSizeError(false);
        console.log("File size is within the allowed limit.");

        // Proceed to compress the image
        handleImageCompression(selectedFile); // Compress image here

        // Check if compression was successful (set in compressedImage)
        console.log("Attempting to compress the file...");
      }
    }

    // Set form values for the changed input field
    setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));

    // Log the updated form values
    console.log("Updated Form Values:", { ...formValues, [name]: newValue });

    // Validate the field after setting its value
    validateField(name, newValue);
  };

  // Compress image if it's too large
  /*const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 150; // Reduce size further
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert canvas image to Blob with lower quality (0.5 instead of 0.7)
        canvas.toBlob(
          (blob) => {
            if (blob.size > 50 * 1024) {
              setFileSizeError(true); // File size still too large
            } else {
              setFileSizeError(false);
              setCompressedImage(blob); // Save compressed image for submission
            }
          },
          "image/jpeg",
          0.05 // Lower the quality further
        );
      };
    };
  };*/

  const handleImageChange = (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    console.log("Original image size: ", file.size); // Log original image size

    const reader = new FileReader();

    if (file instanceof Blob) {
      reader.readAsDataURL(file);
    } else {
      console.error("The file is not of type Blob");
      return;
    }

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");

        const MAX_WIDTH = 100;
        const MAX_HEIGHT = 100;

        let width = img.width;
        let height = img.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height *= MAX_WIDTH / width));
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width *= MAX_HEIGHT / height));
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            console.log("Compressed image size: ", blob.size); // Log compressed image size

            if (blob.size > 500 * 1024) {
              setFileSizeError(true);
              setFormValues((prevValues) => ({ ...prevValues, my_file: null }));
            } else {
              setFileSizeError(false);
              setCompressedImage(blob);
              setFormValues((prevValues) => ({ ...prevValues, my_file: blob }));
            }
          },
          "image/jpeg",
          0.01 // Set compression quality
        );
      };
    };

    reader.onerror = () => {
      console.error("Error reading the file");
    };
  };

  // Validate form fields
  const validateField = (field, value) => {
    let isValid = true;

    switch (field) {
      case "artist_name":
        isValid = value.trim() !== ""; // Artist name must not be empty
        break;
      case "user_name":
        isValid = value.trim() !== ""; // User name must not be empty
        break;
      case "user_risks":
        // Now validating the length of the risks array directly (passed as the `value`)
        isValid = value.length > 0; // Ensure at least one risk is selected
        break;
      case "user_consent":
        isValid = value.trim() !== ""; // User consent must not be empty
        break;
      case "user_pronouns":
        isValid = value.trim() !== ""; // User pronouns must not be empty
        break;
      case "my_file":
        isValid = value && value.size <= 500000; // File size must be <= 500KB
        setFileSizeError(!isValid);
        break;
      default:
        break;
    }

    // Update validation error state
    setValidationError((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid, // Set the error state to true if validation fails
    }));

    return isValid;
  };

  const handleInputFocus = (currentField) => {
    const fields = Object.keys(inputForm);
    const currentIndex = fields.indexOf(currentField);
    if (currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      validateField(nextField, formValues[nextField]);
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      Object.values(validationError).every((error) => !error) && !fileSizeError
    );
  };

  // Submit the form with the compressed image and trigger EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      if (compressedImage) {
        const formData = new FormData(form.current);
        formData.set("my_file", compressedImage, "compressed-image.jpg");

        // Log to ensure the correct file is attached
        console.log(
          "Compressed image attached for submission:",
          compressedImage
        );

        // Proceed with sending the email
        sendEmail(e);
      } else {
        console.log("No valid image selected for submission.");
      }
    } else {
      console.log("Form validation failed.");
    }
  };

  // Submit form via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Form validation failed:", validationError, fileSizeError);
      return;
    }

    setIsLoading(true);

    const formData = new FormData(form.current); // Create FormData object from form
    if (compressedImage) {
      formData.set("my_file", compressedImage, "compressed-image.jpg");
    }

    // Log the total size of the form data
    let totalSize = 0;
    for (let [key, value] of formData.entries()) {
      if (value instanceof Blob) {
        totalSize += value.size;
      } else {
        totalSize += new Blob([value]).size;
      }
    }

    console.log(`Total form data size: ${totalSize} bytes`);

    emailjs
      .sendForm(
        "service_5she545",
        "template_6a8lzj9",
        form.current, // The form reference
        "N8iJs0OwqbPvxYuRo"
      )
      .then(() => {
        console.log("MESSAGE SENT!");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("MESSAGE FAILED", error);
        setIsLoading(false);
      });
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
      <div className={styles.header}>
        <h1 className={styles.releaseformsHeader}>
          Waiver, Release & Consent To Tattoo
        </h1>
      </div>
      <h2 className={styles.releaseformsTagline}>
        Please fill out this form before getting tattooed
      </h2>
      <form ref={form} onSubmit={handleSubmit} className={styles.releaseforms}>
        <p className={styles.releaseContent}>
          I wish to have my skin tattooed. In consideration for such services
          from:
        </p>
        <div className={styles.tattooSizeContainer}>
          <label className={styles.label}>
            Artist Name:{" "}
            {validationError.artist_name && (
              <p className={styles.error}>*Select your tattoo artist.</p>
            )}
          </label>
          <select
            className={styles.form}
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
          Ave. Chicago IL 60622 (together with it’s artists, apprentices and
          agents, the “Tattoo Studio”), I agree to and affirm that:
        </p>
        <p className={styles.releaseContent}>
          I,
          <label className={styles.label}>
            {validationError.user_name && (
              <p className={styles.error}>*Please enter your name*</p>
            )}
          </label>
          <input
            className={styles.form}
            id={styles.clientName}
            type="text"
            name="user_name"
            aria-label="user_name"
            placeholder="Enter your name"
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
            <p className={styles.error}>
              *Select any AND ADD risks that apply or select 'None'*
            </p>
          )}
        </label>
        <div className={styles.selectedRiskContainer}>
          <select
            className={styles.form}
            id={styles.riskForm}
            type="text"
            name="user_risks"
            value={selectedRisk}
            aria-label="users_selected_risk"
            onChange={(e) => setSelectedRisk(e.target.value)}
            onFocus={() => handleInputFocus("user_risks")}
          >
            <option value="">Select a Risk</option>
            {riskIndicators.map((risk, index) => (
              <option key={index} value={risk}>
                {risk}
              </option>
            ))}
          </select>
          <p className={styles.addRisk}>
            {selectedRisks.length > 0 ? "Add More" : "Add Risk"}
          </p>
          <div className={styles.addMoreButton} onClick={handleAddRisk}>
            <LuPlus className={styles.addSymbol} />
          </div>
        </div>
        <div
          className={styles.selectedRisksContainer}
          id={styles.releaseContentBreak}
        >
          {selectedRisks.map((risk, index) => (
            <div key={index} className={styles.riskEntry}>
              {risk}{" "}
              <div
                className={styles.removeButton}
                onClick={() => handleRemoveRisk(index)}
              >
                <IoClose />
              </div>
            </div>
          ))}
        </div>
        <p className={styles.releaseContent}>
          Tattooing involves breaking the skin, one of your body’s main
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
          skin to its pre-tattoo condition even after it’s removed.{" "}
        </p>
        <p className={styles.releaseContent} id={styles.releaseContentBreak}>
          Both the ARTIST and the TATTOO STUDIO have given me the full
          opportunity to read and understand this document and to ask questions
          about the tattoo procedure and the staff has answered satisfactorily.
          I have received instructions on the care of my tattoo while it’s
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
        <p className={styles.releaseContent}>
          I consent to letting my artist take a photo of my tattoo for use on
          social media or for Wild Wind Tattoo’s marketing purposes:
        </p>
        <div
          className={styles.tattooSizeContainer}
          id={styles.releaseContentBreak}
        >
          <label className={styles.label}>
            {validationError.user_consent && (
              <p className={styles.error}>*Select an answer</p>
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
        <div
          className={styles.tattooSizeContainer}
          id={styles.releaseContentBreak}
        >
          <label className={styles.label}>
            Pronouns:
            {validationError.user_pronouns && (
              <p className={styles.error}>*Select your pronouns</p>
            )}
          </label>
          <select
            className={styles.form}
            name="user_pronouns"
            value={formValues.user_pronouns}
            aria-label="users_selected_pronouns_answer"
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("user_pronouns")}
            required
          >
            <option value="">Pronouns answer</option>
            {pronouns.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <p className={styles.releaseContent}>
          I,{" "}
          <input
            type="name"
            name="user_name"
            value={formValues.user_name}
            className={styles.userName}
          />
          HAVE READ THIS LEGAL CONTRACT, I UNDERSTAND IT. I AGREE TO BE BOUND BY
          IT.
        </p>
        <div className={styles.todaysDateContainer}>
          <label className={styles.todaysDate} id={styles.date}>
            Today's Date:
          </label>
          <input
            type="date"
            name="current_date"
            value={currentDate}
            className={styles.todaysDate}
            readOnly
          />
        </div>
        <div className={styles.todaysDateContainer} id={styles.attachFile}>
          <label className={styles.label} id={styles.attachMessage}>
            Attach a photo of your ID, DL or Passport:{" "}
          </label>
          <input
            className={styles.form}
            id={styles.file}
            type="file"
            name="my_file"
            accept="image/*"
            onChange={(e) => handleImageChange(e.target.files[0])} // Wrap in arrow function
            aria-label="users_attached_id_photo"
          />
          {fileSizeError && (
            <p className={styles.error}>
              *Attachment file error. The maximum allowed attachments size is
              500Kb*
            </p>
          )}
        </div>
        <input
          className={styles.formSubmit}
          type="submit"
          aria-label="form_submit_button"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading || !isFormValid()}
        />
        {validationError.artist_name && (
          <p className={styles.errorBottom}>*Please enter your artists name*</p>
        )}
        {validationError.user_name && (
          <p className={styles.errorBottom}>*Please enter your name*</p>
        )}
        {validationError.user_risks && (
          <p className={styles.errorBottom}>*Please any risks you may have*</p>
        )}
        {validationError.user_consent && (
          <p className={styles.errorBottom}>
            *Please tell us if you consent to letting your artist take a photo
            of your tattoo*
          </p>
        )}
        {validationError.user_pronouns && (
          <p className={styles.errorBottom}>
            *Please tell us your preferred pronouns*
          </p>
        )}
        {fileSizeError && (
          <p className={styles.errorBottom}>
            *Attachment file error. The maximum allowed attachments size is
            500Kb*
          </p>
        )}
        {messageStatus === "error" && (
          <p className={styles.errorMessage}>
            **Message failed to send. Please try again**
          </p>
        )}
      </form>
    </article>
  );
}
