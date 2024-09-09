import React from "react";
import HeaderArt from "@/components/HeaderArt";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../components/popUp";
import styles from "../styles/aftercare.module.css";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

/**
 * @component Care features a functional pop up for tattoo care instructions
 */
export default function Care({ initialAftercare }) {
  const { popUp, popUpContent, openAftercarePopUp, closePopUp } = usePopUp();

  const seoData = getSeoData("Tattoo Aftercare", {
    path: "/aftercare",
    description:
      "Essential tattoo aftercare guide from Wild Wind Tattoo. Learn how to properly care for your new tattoo, including instructions for Drylock and Tegaderm bandages.",
    schema: {
      "@type": "Article",
      headline: "Tattoo Aftercare Guide",
      description:
        "Essential tattoo aftercare instructions from Wild Wind Tattoo",
      author: {
        "@type": "Organization",
        name: siteConfig.siteName,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.siteName,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.siteUrl}/wildWindFavicon.png`,
        },
      },
    },
  });

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
      <div
        className={styles.careContainer}
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
        <h2 className={styles.instructions}>{title}</h2>
        <div className={styles.iconButton}>
          <FaPlus />
        </div>
      </div>
    );
  }

  return (
    <article className={styles.afterCare}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.afterHeader}>AFTERCARE</h1>
        <HeaderArt />
      </div>
      <p className={styles.afterTagline}>
        Everything you need to know about taking care of your tattoo
      </p>
      <section>
        {initialAftercare.map((aftercareInstructions) => (
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
      </section>
      <div className={styles.aftercareLinksContainer}>
        <Link className={styles.aftercareLinks} href="/">
          <h3 className={styles.linkHeader}>Home</h3>
        </Link>
      </div>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </article>
  );
}

export async function getServerSideProps() {
  // Import the aftercare data here to ensure it's only loaded server-side
  const { aftercare } = await import("../data/aftercare");

  return {
    props: {
      initialAftercare: aftercare,
    },
  };
}
