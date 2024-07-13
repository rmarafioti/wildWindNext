import React from "react";
import Head from "next/head";
import Form from "@/components/Form";

import styles from "../styles/contact.module.css";

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
        <link rel="canonical" href="/requestappt" />
      </Head>
      <h1 className={styles.requestHeader}>Request An Appointment</h1>
      <Form />
    </article>
  );
}
