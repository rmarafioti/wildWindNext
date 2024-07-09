import React from "react";
import Head from "next/head";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../components/popUp";

import { aftercare } from "../data/aftercare";

import styles from "../styles/aftercare.module.css";

/**
 * @component Care features a functional pop up for tattoo care instructions
 */
export default function Care() {
  const { popUp, popUpContent, openAftercarePopUp, closePopUp } = usePopUp();

  /**
   * @function AftercareCard holds care instructions listed in aftercareInstructions.js && pop up functionality handled by way of popUp.js
   */
  function AftercareCard({
    id,
    title,
    headerOne,
    instructionsOne,
    headerTwo,
    instructionsTwo,
    instructionsTag,
  }) {
    return (
      <div className={styles.careContainer}>
        <h2 className={styles.instructions}>{title}</h2>
        <div
          className={styles.iconButton}
          onClick={() =>
            openAftercarePopUp(
              id,
              headerOne,
              instructionsOne,
              headerTwo,
              instructionsTwo,
              instructionsTag
            )
          }
        >
          <FaPlus />
        </div>
      </div>
    );
  }

  return (
    <main className={styles.afterCare}>
      <Head>
        <title>Aftercare Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the aftercare page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/aftercare" />
      </Head>
      <h1 className={styles.afterHeader}>Aftercare</h1>
      <h3 className={styles.afterTagline}>
        everything you need to know about taking care of your tattoo.
      </h3>
      <ul className={styles.aftercaresContainer}>
        {aftercare.map((aftercareInstructions) => (
          <AftercareCard
            key={aftercareInstructions.id}
            id={aftercareInstructions.id}
            title={aftercareInstructions.title}
            headerOne={aftercareInstructions.headerOne}
            instructionsOne={aftercareInstructions.instructionsOne}
            headerTwo={aftercareInstructions.headerTwo}
            instructionsTwo={aftercareInstructions.instructionsTwo}
            instructionsTag={aftercareInstructions.instructionsTag}
          />
        ))}
      </ul>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </main>
  );
}
