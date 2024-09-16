import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../components/popUp";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import styles from "../styles/aftercare.module.css";

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
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436132/wildWindSite/after_care_okukid.png"
          alt="Aftercare page header"
          priority
          width={770}
          height={130}
          quality={75}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={styles.afterHeader}
        />
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
