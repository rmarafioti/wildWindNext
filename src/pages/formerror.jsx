import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/formsent.module.css";

/**
 * @component FormError features a message to the user when an artist release form is filled out but an error is thrown by DocuSign
 */
export default function RequestSent() {
  return (
    <article className={styles.formSent}>
      <Head>
        <title>Form Error Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the form error page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/formerror" />
      </Head>
      <div className={styles.formSentContainer}>
        <h1 className={styles.formSentMessage}>
          We&apos;re sorry, but there seems to have been an issue submitting
          your release form.
        </h1>
        <h2 className={styles.formMessage}>
          Please notify your artist, and they&apos;ll be happy to assist you.
        </h2>
        <h3 className={styles.formMessageTag}>Best,</h3>
        <h3
          className={`${styles.formMessageTag} ${styles.formMessageTagBottom}`}
        >
          Wild Wind Tattoo
        </h3>
      </div>
      <Link className={styles.returnHome} href="/">
        <h3 className={styles.returnHomeHeader}>Return Home</h3>
      </Link>
    </article>
  );
}
