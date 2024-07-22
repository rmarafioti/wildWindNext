import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/contact.module.css";

/**
 * @component Contact features general static business info and links to outside sites
 */
export default function Contact() {
  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the contact page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/contact" />
      </Head>
      <h1 className={styles.header}>CONTACT US</h1>
      <section>
        <div className={styles.artOneElementOne}>
          <div className={styles.dotRow}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.dotRow}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.dotRow}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.dotRow}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.dotRow}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
        <div className={styles.line}></div>
      </section>
      <section className={styles.contactHeader}>
        <h2 className={styles.headerTagline}>
          Reach out to request an appointment or inquire about day of
          availability
        </h2>
        <p className={styles.headerTaglineTwo}>
          For general questions please review our{" "}
          <Link className={styles.reviewLink} href="/faqs">
            FAQs
          </Link>{" "}
          first
        </p>
      </section>
      <section className={styles.contactButtonSection}>
        <Link className={styles.contactLink} href="/requestappt">
          <h3 className={styles.contactButtons}>Request an appointment</h3>
        </Link>
      </section>
      <section className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <p>ADDRESS:</p>
          <p className={styles.contactInfoValue}>
            <a
              id={styles.address}
              href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu"
            >
              1452 N. Western Ave. Chicago, IL 60622
            </a>
          </p>
        </div>
        <section className={styles.hoursContainer}>
          <p className={styles.contactInfo} id={styles.hour}>
            HOURS:{" "}
          </p>
          <div className={styles.hours}>
            <p className={styles.times} id={styles.timesTop}>
              <b className={styles.bold}>Friday - Monday:</b> 12 pm - 8 pm
            </p>
            <p className={styles.times}>
              <b className={styles.bold}>Tuesday:</b> 12 pm - 4 pm
            </p>
          </div>
        </section>
        <div className={styles.contactInfo}>
          PHONE:
          <p className={styles.contactInfoValue} id={styles.phone}>
            <a href="tel:+7732272027"> 773.227.2027</a>
          </p>
        </div>
        <div className={styles.contactInfo}>
          EMAIL:
          <p className={styles.contactInfoValue} id={styles.email}>
            <a href="mailto:wildwindtattoo@gmail.com">
              wildwindtattoo@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
