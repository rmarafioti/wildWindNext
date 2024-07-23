import React from "react";
import Head from "next/head";
import Form from "@/components/Form";
import HeaderArtTwo from "@/components/HeaderArtTwo";
import styles from "@/styles/requestappt.module.css";

/**
 * @component RequestAppt features a functional form by way of Form.jsx for a client to request an appointmmet via email
 */
export default function RequestAppt() {
  return (
    <article className={styles.requestContact}>
      <Head>
        <title>Request Appointment Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the request appointment page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/requestappt" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.requestHeader}>REQUEST AN APPOINTMENT</h1>
        <HeaderArtTwo />
      </div>
      <Form />
    </article>
  );
}
