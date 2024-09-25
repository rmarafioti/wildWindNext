import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/formsent.module.css";

/**
 * @component FormSent features a message to the user when an artist release form is filled out and is successfully sent
 */
export default function FormSent() {
  return (
    <article className={styles.formSent}>
      <Head>
        <title>Form Sent Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the form sent page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/formsent" />
      </Head>
      <div className={styles.formSentContainer}>
        <h1 className={styles.formSentMessage}>
          Thank you for filling out your release form electronically!
        </h1>
        <h2 className={styles.formMessage}>
          We&apos;re excited to be part of your tattoo journey and hope you have
          an amazing experience with us.
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
