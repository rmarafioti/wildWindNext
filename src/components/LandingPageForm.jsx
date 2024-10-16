import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MaskedInput from "react-text-mask";
import { useRouter } from "next/router";

import styles from "../styles/form.module.css";

/**
 *
 * @component LandingPageForm is the paired down contact form which is passed into index.js aka the landing page
 */
export default function LandingPageForm() {
  const inputValidationError = {
    user_name: true,
    user_email: false,
    user_phone: false,
  };

  const inputForm = {
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  };

  const LandingPageForm = useRef();
  const router = useRouter();
  const [messageStatus, setMessageStatus] = useState(null);
  const [validationError, setValidationError] = useState(inputValidationError);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(inputForm);
  //validate each field in order
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
      default:
        break;
    }
    // Set error to true if invalid
    setValidationError((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
    }));

    return isValid;
  };
  //validation check of the next field after the field the user is currently on
  const handleInputFocus = (currentField) => {
    const fields = Object.keys(inputForm);
    const currentIndex = fields.indexOf(currentField);
    if (currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      validateField(nextField, formValues[nextField]);
    }
  };
  // allow the user to change the vaklue of a form field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // Validate field after change
    validateField(name, value);
  };
  //valid email check looks for an '@' and a '.'
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  //valid phone check looks for 10 integers
  const isValidPhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, "");
    return phoneDigits.length === 10;
  };
  //check the form is valid if every validation error has been passed
  const isFormValid = () => {
    return (
      Object.values(validationError).every((error) => !error) && !fileSizeError
    );
  };
  //if form is not valid when the users sends return the validation error that has not been passed
  //else send form to emailjs and router the user to the request sent page
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Form validation failed:", validationError, fileSizeError);
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_5she545",
        "template_6h7t0uc",
        LandingPageForm.current,
        "N8iJs0OwqbPvxYuRo"
      )
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success");
          setIsLoading(false);
          setValidationError(inputValidationError);
          LandingPageForm.current.reset(); // Ensure form is reset
          setFormValues(inputForm);

          router.push("/requestsent");
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          setMessageStatus("error");
          setIsLoading(false);
        }
      );
  };

  return (
    <form
      className={styles.contactForm}
      ref={LandingPageForm}
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
        onChange={(e) =>
          handleInputChange({
            target: { name: "user_phone", value: e.target.value },
          })
        }
        onFocus={() => handleInputFocus("user_phone")}
        required
      />
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
      {messageStatus === "error" && (
        <p className={styles.errorMessage}>
          **Message failed to send. Please try again**
        </p>
      )}
    </form>
  );
}
