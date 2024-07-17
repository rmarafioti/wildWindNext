import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../components/popUp";
import { faqs } from "../data/faqs";
import styles from "../styles/faqs.module.css";

/**
 * @component Faq features a functional pop up for frequently asked tattoo questions
 */
export default function Faq() {
  const { popUp, popUpContent, openFaqPopUp, closePopUp } = usePopUp();

  /**
   * @function FaqCard holds frequently asked tattoo questions and answers listed in faqs.js && pop up functionality handled by way of popUp.js
   */
  function FaqCard({ id, question, answer }) {
    return (
      <div className={styles.faqContainer}>
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
      <Head>
        <title>FAQs Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the FAQs page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/faqs" />
      </Head>
      <h1 id={styles.headerFaqs}>FAQs</h1>
      <p id={styles.faqTagline}>
        General questions before you fill out our contact form
      </p>
      <section id={styles.questions}>
        {faqs.map((faq) => (
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
        <Link className={styles.faqLinks} href="/aboutus">
          <h3 className={styles.linkHeader}>About Us</h3>
        </Link>
      </div>
    </article>
  );
}
