import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/requestsent.module.css";

/**
 * @component RequestSent features a message to the user when the form on RequestAppt.jsx is successfully sent
 */
export default function RequestSent() {
  return (
    <main className={styles.requestSent}>
      <Head>
        <title>Request Sent Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the request sent page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/requestsent" />
      </Head>
      <div className={styles.requestSentContainer}>
        <h1 className={styles.requestSentMessage}>
          Thank you for your message!
        </h1>
        <h3 className={`${styles.requestMessage} ${styles.requestMessageTop}`}>
          Your request has been sent
        </h3>
        <h3 className={styles.requestMessage}>
          You can expect a response within 1-3 days. We are excited to work with
          you soon!
        </h3>
        <h3 className={styles.messageTag}>Best,</h3>
        <h3 className={`${styles.messageTag} ${styles.messageTagBottom}`}>
          Wild Wind Tattoo
        </h3>
      </div>
      <Link className={styles.returnHome} href="/">
        <h4>Return Home</h4>
      </Link>
    </main>
  );
}
