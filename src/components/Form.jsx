import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MaskedInput from "react-text-mask";
import { useRouter } from "next/router";
import TattooSizeField from "./TattooSizeField";
import DateTimeField from "./DateTimeField";

import styles from "../styles/form.module.css";

/**
 * @component Form features a functional form for a user to request an appointment. TattooSizeField and DateTimeField are separate components with independent functionality imported and in Form.jsx
 */
export default function Form() {
  const inputValidationError = {
    user_name: true,
    user_email: false,
    user_phone: false,
    user_size: false,
    user_location: false,
    user_times: false,
    my_file: false,
  };

  const inputForm = {
    user_name: "",
    user_email: "",
    user_phone: "",
    user_size: "",
    user_location: "",
    user_times: "",
    my_file: null,
    message: "",
  };

  const form = useRef();
  const router = useRouter();
  const [messageStatus, setMessageStatus] = useState(null);
  const [validationError, setValidationError] = useState(inputValidationError);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(inputForm);

  /**
   *
   * @function handleInputChange handles user changing field input values
   */
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;

    // functionality to change the value on the field input
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
    // field validated if value or file in the case of choose file field
    validateField(name, newValue);
    // Reset file size error on input change && loading field input change
    setFileSizeError(false);
    setIsLoading(false);
  };

  /**
   * @function validateField checks each input field individually if is valid before sending form
   * @param {*} field
   * @param {*} value
   * @returns an error if field is not valid else return valid
   */
  const validateField = (field, value) => {
    let isValid = true;
    switch (field) {
      case "user_name":
        isValid = value.trim() !== "";
        break;
      case "user_email":
        isValid = isValidEmail(value);
        break;
      case "user_phone":
        isValid = isValidPhone(value);
        break;
      case "user_size":
        isValid = value.trim() !== "";
        break;
      case "user_location":
        isValid = value.trim() !== "";
        break;
      case "user_times":
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

  /**
   * @function handleInputFocus logic to check next field input in order from field the user is currently on.
   * @param {*} currentField
   */
  const handleInputFocus = (currentField) => {
    const fields = Object.keys(inputForm);
    const currentIndex = fields.indexOf(currentField);
    if (currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      validateField(nextField, formValues[nextField]);
    }
  };

  // Check email for '@' and '.'
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Don't allow user to input letter and check that the phone number is 10 digits long
  const isValidPhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, "");
    return phoneDigits.length === 10;
  };

  // Form is valid if all required fields have correct value
  const isFormValid = () => {
    return (
      Object.values(validationError).every((error) => !error) && !fileSizeError
    );
  };

  /**
   *
   * @function sendEmail send email with form information if all is valid && clear form && navigate user to RequestSent.jsx. Message failed kept in boilerplate for function in case an error slips by input error checks
   */
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("service_5she545", "template_rblhmku", form.current, {
        publicKey: "N8iJs0OwqbPvxYuRo",
      })
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success");
          setIsLoading(false);
          setValidationError(inputValidationError);
          form.current.reset();
          setFormValues(inputForm);

          router.push("/requestsent");
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
    <form
      className={styles.contactForm}
      ref={form}
      onSubmit={sendEmail}
      encType="multipart/form-data"
      method="post"
    >
      <label className={styles.label}>
        Name:{" "}
        {validationError.user_name && (
          <p className={styles.error}>*Please enter your name*</p>
        )}
      </label>
      <input
        className={styles.form}
        type="text"
        name="user_name"
        aria-label="user_name"
        value={formValues.user_name}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus("user_name")}
        required
      />
      <label className={styles.label}>
        Email:{" "}
        {validationError.user_email && (
          <p className={styles.error}>*Please enter a valid email address*</p>
        )}
      </label>
      <input
        className={styles.form}
        type="email"
        name="user_email"
        aria-label="user_email"
        value={formValues.user_email}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus("user_email")}
        required
      />
      <label className={styles.label}>
        Phone:{" "}
        {validationError.user_phone && (
          <p className={styles.error}>*Please enter a valid phone number*</p>
        )}
      </label>
      <MaskedInput
        className={styles.form}
        type="text"
        name="user_phone"
        aria-label="user_phone_number"
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        value={formValues.user_phone}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus("user_phone")}
        required
      />
      {/* TattooSizeField.jsx component */}
      <TattooSizeField
        name="user_size"
        value={formValues.user_size}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus("user_size")}
        validationError={validationError.user_size}
      />
      <label className={styles.label}>
        Desired tattoo location:{" "}
        {validationError.user_location && (
          <p className={styles.error}>
            *Please enter the desired location of your tattoo*
          </p>
        )}
      </label>
      <div className={styles.formSectionContainer}>
        <input
          className={styles.form}
          type="text"
          name="user_location"
          aria-label="users_tattoo_location"
          value={formValues.user_location}
          placeholder="Ex. Right arm bicep"
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("user_location")}
          required
        />
      </div>
      <div className={styles.formSectionContainer}>
        {/* DateTimeFeild.jsx component */}
        <DateTimeField
          name="user_times"
          value={formValues.user_times}
          onChange={handleInputChange}
          validationError={validationError.user_times}
        />
      </div>
      <div className={styles.formSectionContainer} id={styles.attachFile}>
        <label className={styles.label}>Attach tattoo reference:</label>
        <input
          className={styles.form}
          id={styles.file}
          type="file"
          name="my_file"
          aria-label="users_attached_tattoo_reference"
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("my_file")}
        />
        {fileSizeError && (
          <p className={styles.error}>
            *Attachment file error. The maximum allowed attachments size is
            500Kb*
          </p>
        )}
      </div>
      <label className={styles.label}>Additional information:</label>
      <textarea
        className={styles.messageForm}
        name="message"
        aria-label="users_additional_information"
        value={formValues.message}
        onChange={handleInputChange}
        placeholder=""
      />
      <input
        className={styles.formSubmit}
        type="submit"
        aria-label="form_submit_button"
        value={isLoading ? "Sending..." : "Send"}
        disabled={isLoading || !isFormValid()}
      />
      {validationError.user_name && (
        <p className={styles.errorBottom}>*Please enter your name*</p>
      )}
      {validationError.user_email && (
        <p className={styles.errorBottom}>
          *Please enter a valid email address*
        </p>
      )}
      {validationError.user_phone && (
        <p className={styles.errorBottom}>
          *Please enter a valid phone number*
        </p>
      )}
      {validationError.user_size && (
        <p className={styles.errorBottom}>*Please select a tattoo size*</p>
      )}
      {validationError.user_location && (
        <p className={styles.errorBottom}>
          *Please enter the desired location of your tattoo*
        </p>
      )}
      {validationError.user_times && (
        <p className={styles.errorBottom}>*Please provide your availability*</p>
      )}
      {fileSizeError && (
        <p className={styles.errorBottom}>
          *Attachment file error. The maximum allowed attachments size is 500Kb*
        </p>
      )}
      {messageStatus === "error" && (
        <p className={styles.errorMessage}>
          **Message failed to send. Please try again**
        </p>
      )}
    </form>
  );
}
