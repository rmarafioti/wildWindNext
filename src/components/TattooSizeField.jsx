import React from "react";

import styles from "../styles/tattoosizefield.module.css";

/**
 * @component TattooSizeField features functionality for a user to select the desired size of their tattoo via the suggestedSizes array. TattooSizeField component is imported and set in Form.jsx
 */
export default function TattooSizeField({
  name,
  value,
  onChange,
  onFocus,
  validationError,
}) {
  const suggestedSizes = [
    "TINY: I want my tattoo as small as it can be",
    "SMALL: Approx palm size",
    "MEDIUM: Approx hand size",
    "LARGE: Fill the whole area my tattoo is on",
    "GOING BIG!: I want large scale work",
  ];

  return (
    <div className={styles.tattooSizeContainer}>
      <label className={styles.label}>
        Tattoo size:{" "}
        {validationError && (
          <p className={styles.error}>*Please select a tattoo size.</p>
        )}
      </label>
      <select
        className={styles.form}
        name={name}
        value={value}
        aria-label="users_selected_tattoo_size"
        onChange={onChange}
        onFocus={onFocus}
        required
      >
        <option value="">Select a size</option>
        {suggestedSizes.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
