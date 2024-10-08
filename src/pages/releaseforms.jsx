import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import Head from "next/head";

import styles from "@/styles/releaseforms.module.css";

/**
 * @component ReleaseForms serves as the main entry point for clients to access and electronically sign the release form specific to their chosen artist before getting tattooed.
 */
export default function Releaseforms() {
  const [currentDate, setCurrentDate] = useState("");
  // Set current date when component mounts
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
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
    "Pregnant of nursing",
    "None",
  ];

  const consent = ["Yes", "No"];

  const pronouns = ["She / Her", "They / Them", "He / Him "];

  const inputValidationError = {
    artist_name: true,
    user_name: false,
    user_risks: false,
    user_consent: false,
    user_pronouns: false,
    user_id: false,
  };

  const inputForm = {
    artist_name: "",
    user_name: "",
    user_risks: "",
    user_consent: "",
    user_pronouns: "",
    current_date: currentDate,
    user_id: null,
  };

  const [validationError, setValidationError] = useState(inputValidationError);
  const [formValues, setFormValues] = useState(inputForm);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState("");
  const [selectedRisks, setSelectedRisks] = useState([]);
  const [compressedImage, setCompressedImage] = useState(null);

  /**
   * @function handleAddRisk if a selected risk is chosen it to an array of strings called selected risks
   */
  const handleAddRisk = () => {
    if (selectedRisk) {
      const newRisk = `${selectedRisk}`;
      setSelectedRisks((prevRisks) => [...prevRisks, newRisk]);
      setFormValues((prevValues) => ({
        ...prevValues,
        risk: [...selectedRisks, newRisk].join(", "),
      }));
      setSelectedRisk("");
    }
  };

  /**
   * @function handleRemoveRisk functionality to remove a selected risk from the selected risks array
   * @param index of the selected time in the array
   */
  const handleRemoveRisk = (index) => {
    const newSelectedRisks = selectedRisks.filter((_, i) => i !== index);
    setSelectedRisks(newSelectedRisks);
    setFormValues((prevValues) => ({
      ...prevValues,
      risk: newSelectedRisks.join(", "),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;

    if (name === "my_file" && files) {
      const selectedFile = files[0];
      const maxFileSize = 500 * 1024; // 500KB
      if (selectedFile.size > maxFileSize) {
        setFileSizeError(true);
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: null,
        }));
        return;
      } else {
        setFileSizeError(false);
      }
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));

    validateField(name, newValue);
  };

  // Handle the image compression process
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 800; // Adjust this to set the desired max width
          const scaleSize = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Convert the canvas image to a Blob for the form data
          canvas.toBlob(
            (blob) => {
              if (blob.size > 500 * 1024) {
                // Check if the compressed image is under 500KB
                setFileSizeError(true);
              } else {
                setFileSizeError(false);
                // Save the compressed image in state (or submit to your form)
                setCompressedImage(blob);
              }
            },
            "image/jpeg", // Output format
            0.7 // Compression quality (0.7 = 70%)
          );
        };
      };
    }
  };

  // Submit the form with the compressed image
  const handleSubmit = (e) => {
    e.preventDefault();
    if (compressedImage) {
      const formData = new FormData();
      formData.append("my_file", compressedImage, "compressed-image.jpg");

      // Submit the formData to your server or email API
      // Example: axios.post('/upload', formData);
    } else {
      console.log("No image selected or image too large.");
    }
  };

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
        isValid = value.trim() !== "";
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

    setValidationError((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
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

  const isFormValid = () => {
    return (
      Object.values(validationError).every((error) => !error) && !fileSizeError
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Form validation failed:", validationError, fileSizeError);
      return;
    }

    setIsLoading(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.releaseforms}>
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
      <p className={styles.releaseContent}>
        I wish to have my skin tattooed. In consideration for such services
        from:
      </p>
      <div className={styles.tattooSizeContainer}>
        <label className={styles.label}>
          Artist Name:{" "}
          {validationError && (
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
        and Marf Inc. doing business as Wild Wind Tattoo at 1452 N. Western Ave.
        Chicago IL 60622 (together with it’s artists, apprentices and agents,
        the “Tattoo Studio”), I agree to and affirm that:
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
        including infection, scarring and difficulties in detecting melanoma. I
        have read the following list of some risk indicators and checked those
        that apply to me:
      </p>
      <label className={styles.label}>
        {validationError && (
          <p className={styles.error}>
            *Select any risks that apply or select 'None'*
          </p>
        )}
      </label>
      <div className={styles.selectedRiskContainer}>
        <select
          className={styles.form}
          id={styles.riskForm}
          value={selectedRisk}
          aria-label="users_selected_risk"
          onChange={(e) => setSelectedRisk(e.target.value)}
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
        Tattooing involves breaking the skin, one of your body’s main protective
        barriers. This means you may be more susceptible to skin and blood
        infections. Specific risks include:
      </p>
      <p className={styles.releaseContent}>
        Bloodborne diseases. If the equipment used to do your tattoo is
        contaminated with the blood of an infected person, you can contract a
        number of serious bloodborne diseases including Hepatitis C & B, tetanus
        & HIV. Skin infections.
      </p>
      <p className={styles.releaseContent}>
        The use of unsterile equipment or re-used ink can result in skin
        infections, ranging from minor to potentially serious antibiotic
        resistant infections. Symptoms may include redness, swelling or pus-like
        drainage.{" "}
      </p>
      <p className={styles.releaseContent}>
        Granulomas. Bumps may form around the site of the tattoo as a reaction
        to the ink. Scars and keloids. The ink may cause scars & keloids. Raised
        ridged areas caused by overgrowth of scar tissue.
      </p>
      <p className={styles.releaseContent}>
        Allergic reactions. The ink may cause an itchy rash at the tattoo site.
        Swelling & burning. Tattooed areas may swell or burn during Magnetic
        Resonance Imaging (MRI) exams.{" "}
      </p>
      <p className={styles.releaseContent} id={styles.releaseContentBreak}>
        Having been informed of the potential risks associated with getting a
        tattoo, I still wish to proceed with the tattooing and I freely accept
        and expressly assume the risks that may arise from tattooing.
      </p>
      <p className={styles.releaseContent} id={styles.releaseContentBreak}>
        The Artist and the Tattoo Studio are not responsible for the meaning or
        spelling of the symbol or text that I have provided them or chosen from.
        Variations in color and design may exist between the tattoo art I have
        selected and the actual tattoo when it is applied to my body. Over time
        the color and clarity of my tattoo will fade due to unprotected exposure
        to the sun and the naturally occurring dispersion of pigment under the
        skin. The tattoo will permanently change my appearance and can only be
        removed by laser or surgical means, which can be disfiguring and/or
        costly and which are unlikely to restore my skin to its pre-tattoo
        condition even after it’s removed.{" "}
      </p>
      <p className={styles.releaseContent} id={styles.releaseContentBreak}>
        Both the ARTIST and the TATTOO STUDIO have given me the full opportunity
        to read and understand this document and to ask questions about the
        tattoo procedure and the staff has answered satisfactorily. I have
        received instructions on the care of my tattoo while it’s healing. I
        understand them and will follow them. If I fail to follow them, then I
        am responsible for consequent defects in the art and infections in my
        skin. I am not drunk or drugged, I do not have a mental impairment that
        may affect my judgment in getting a tattoo, and I voluntarily engage
        these tattoo services without duress. I am of legal age (and have
        provided valid proof of age) and am competent to sign this Agreement I
        hereby WAIVE AND RELEASE the Artist and the Tattoo Studio from all
        liability whatsoever, for any and all claims or causes of action that I,
        my estate, heirs, executors or assigns may have for personal injury or
        otherwise, including any direct and/or consequential damages, which
        result or arise from the tattooing, whether caused by the negligence or
        fault of either the Artist or the Tattoo Studio, or otherwise. If any
        provision, section, subsection, clause or phrase of this release is
        found to be unenforceable or invalid, that reportion shall be severed
        from this contract so that the remaining contract is valid and
        enforceable.
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
          {validationError && <p className={styles.error}>*Select an answer</p>}
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
          {validationError && (
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
          onChange={handleImageChange}
          aria-label="users_attached_id_photo"
        />
        {fileSizeError && (
          <p className={styles.error}>
            *Attachment file error. The maximum allowed attachments size is
            500Kb*
          </p>
        )}
      </div>
    </form>
  );
}
