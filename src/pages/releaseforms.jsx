import React, { useRef, useState } from "react";
import Head from "next/head";

import styles from "@/styles/releaseforms.module.css";

/**
 * @component ReleaseForms serves as the main entry point for clients to access and electronically sign the release form specific to their chosen artist before getting tattooed.
 */
export default function Releaseforms({ name, value, onChange, onFocus }) {
  const inputValidationError = {
    artist_name: true,
    user_email: false,
    user_id: false,
  };

  const inputForm = {
    artist_name: "",
    user_name: "",
    user_id: null,
  };

  const artists = [
    "Rich Marafioti",
    "Mercy Wright",
    "Trevor Aarsvold",
    "Allie Sider",
  ];

  const [validationError, setValidationError] = useState(inputValidationError);
  const [formValues, setFormValues] = useState(inputForm);
  const [fileSizeError, setFileSizeError] = useState(false);
  inputValidationError;

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

  const validateField = (field, value) => {
    let isValid = true;
    switch (field) {
      case "artist_name":
        isValid = value.trim() !== "";
        break;
      case "user_name":
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
          name={name}
          value={value}
          aria-label="users_selected_artist_name"
          onChange={onChange}
          onFocus={onFocus}
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
      <p className={styles.releaseContent}>
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
      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=2db995c9-063e-47bf-8437-6b7fcfcfa9a3&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Rich Marafioti
      </a>
      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=f753cd03-1919-430d-b5f8-b10e4c6538ae&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Mercy Wright
      </a>
      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=27a9da47-ac8a-41af-803d-fbb1b64bed5a&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Trevor Aarsvold
      </a>
      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=8d01d743-1be5-4069-9f2e-d620beea3b91&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Allie Sider
      </a>
    </article>
  );
}
