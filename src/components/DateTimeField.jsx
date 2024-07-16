import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

import styles from "../styles/datetimefield.module.css";

/**
 * @component DateTimeField features functionality for a user to select available days and times and add them or delete them. DateTimeField component is imported and set in Form.jsx
 */
export default function DateTimeField({
  name,
  value,
  onChange,
  validationError,
}) {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTimes, setSelectedTimes] = useState([]);

  const days = [
    "Weekdays",
    "Weekends",
    "Mondays",
    "Tuesdays",
    "Wednesdays",
    "Thursdays",
    "Fridays",
    "Saturdays",
    "Sundays",
  ];

  const times = [
    "12 pm",
    "12:30 pm",
    "1 pm",
    "1:30 pm",
    "2 pm",
    "2:30 pm",
    "3 pm",
    "3:30 pm",
    "4 pm",
    "4:30 pm",
    "5 pm",
    "5:30 pm",
    "6 pm",
    "6:30 pm",
    "7 pm",
  ];

  /**
   * @function handleAddTime if a selected day && selected are chosen add them to an array of strings called selected times
   */
  const handleAddTime = () => {
    if (selectedDay && selectedTime) {
      const newTime = `${selectedDay} at ${selectedTime}`;
      setSelectedTimes((prevTimes) => [...prevTimes, newTime]);
      onChange({
        target: {
          name: name,
          value: [...selectedTimes, newTime].join(", "),
        },
      });
      setSelectedDay("");
      setSelectedTime("");
    }
  };

  /**
   * @function handleRemoveTime functionality to remove a selected time from the selected times array
   * @param index of the selected time in the array
   */
  const handleRemoveTime = (index) => {
    const newSelectedTimes = selectedTimes.filter((_, i) => i !== index);
    setSelectedTimes(newSelectedTimes);
    onChange({
      target: {
        name: name,
        value: newSelectedTimes.join(", "),
      },
    });
  };

  return (
    <div>
      <label className={styles.label}>
        Preffered availablity:{" "}
        {validationError && (
          <p className={styles.error}>*Please provide your availability*</p>
        )}
      </label>
      <div className={styles.selectTimeContainer}>
        <select
          className={styles.timeForm}
          value={selectedDay}
          aria-label="users_selected_day"
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="">Select a day</option>
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          className={styles.timeForm}
          value={selectedTime}
          aria-label="users_selected_time"
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time</option>
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <p className={styles.addTime}>
          {selectedTimes.length > 0 ? "Add More" : "Add Time"}
        </p>
        <div className={styles.addMoreButton} onClick={handleAddTime}>
          <LuPlus className={styles.addSymbol} />
        </div>
      </div>

      <div className={styles.selectedTimesContainer}>
        {selectedTimes.map((time, index) => (
          <div key={index} className={styles.timeEntry}>
            {time}{" "}
            <div
              className={styles.removeButton}
              onClick={() => handleRemoveTime(index)}
            >
              <IoClose />
            </div>
          </div>
        ))}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
