import React from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";
import ScrollTop from "@/components/ScrollTop";
import styles from "../styles/contact.module.css";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

/**
 * @component Contact features general static business info and links to outside sites
 */
export default function Contact() {
  const seoData = getSeoData("Contact Us", {
    path: "/contact",
    description:
      "Wild Wind is a local Chicago tattoo shop that welcomes walk-ins. No hot air - just tattoos. Call today (773) 227-2027.",
    schema: {
      "@type": "TattooParlor",
      name: siteConfig.siteName,
      description: "Local Chicago tattoo shop welcoming walk-ins",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  });

  return (
    <div className={styles.contact}>
      <SEO {...seoData} />
      <ScrollTop />
      <div className={styles.header}>
        <h1 className={styles.contactHeader}>Get tattooed today!</h1>
      </div>
      <section className={styles.contactTagHeader}>
        <h2 className={styles.headerTagline}>
          Reach out to request an appointment or inquire about day of
          availability
        </h2>
        <p className={styles.headerTaglineTwo}>
          For general questions please review our{" "}
          <Link className={styles.reviewLink} href="/faqs">
            FAQs
          </Link>{" "}
        </p>
      </section>
      <Form />
      <div className={styles.shopLogoContainer}>
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1725992110/wildWindSite/IMG_7287_zchqxy.jpg"
          alt="Tattoo shop logo"
          priority
          width={1134}
          height={1100}
          quality={75}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={styles.shopLogo}
        />
      </div>
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
            <a href="tel:+17732272027"> 773.227.2027</a>
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

export async function getServerSideProps() {
  // If you need to fetch any dynamic data for the contact page, do it here
  // For now, we'll just return an empty object
  return {
    props: {},
  };
}
