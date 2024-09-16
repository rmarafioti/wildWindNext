import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../components/popUp";
import { faqs } from "../data/faqs";
import SEO from "@/components/SEO";
import { getSeoData } from "@/config/siteConfig";

import styles from "../styles/faqs.module.css";

/**
 * @component Faq features a functional pop up for frequently asked tattoo questions
 */
export default function Faq({ initialFaqs }) {
  const { popUp, popUpContent, openFaqPopUp, closePopUp } = usePopUp();

  const seoData = getSeoData("FAQs", {
    path: "/faqs",
    description: `Find answers to common questions about Wild Wind Tattoo in Chicago. Learn about walk-ins, pricing, appointment booking, deposits, and more before your visit to our Wicker Park studio.`,
    schema: {
      "@type": "FAQPage",
      mainEntity: initialFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  });

  /**
   * @function FaqCard holds frequently asked tattoo questions and answers listed in faqs.js && pop up functionality handled by way of popUp.js
   */
  function FaqCard({ id, question, answer }) {
    return (
      <div
        className={styles.faqContainer}
        onClick={() => openFaqPopUp(id, question, answer)}
      >
        <h2 className={styles.faq}>{question}</h2>
        <div
          id={styles.iconButton}
          onClick={() => openFaqPopUp(id, question, answer)}
        >
          <FaPlus />
        </div>
      </div>
    );
  }

  return (
    <article id={styles.faqs}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436173/wildWindSite/faqs_zjijwp.png"
          alt="FAQs page header"
          priority
          width={352}
          height={154}
          quality={75}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={styles.headerFaqs}
        />
      </div>
      <p className={styles.faqTagline}>
        General questions before you fill out our contact form
      </p>
      <section id={styles.questions}>
        {initialFaqs.map((faq) => (
          <FaqCard
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
      <div className={styles.faqLinksContainer}>
        <Link className={styles.faqLinks} href="/">
          <h3 className={styles.linkHeader}>Home</h3>
        </Link>
      </div>
    </article>
  );
}

export async function getServerSideProps() {
  // In a real-world scenario, you might fetch this data from an API
  const initialFaqs = faqs;

  return {
    props: {
      initialFaqs,
    },
  };
}
