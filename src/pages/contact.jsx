import React from "react";
import Link from "next/link";
import HeaderArt from "@/components/HeaderArt";
import Form from "@/components/Form";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
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
    /*const seoData = getSeoData("Request Appointment", {
    path: "/requestappt",
    description: "Book your tattoo session at Wild Wind Tattoo in Chicago's Wicker Park. Easy online appointment requests for custom designs or consultations with our expert artists.",
    schema: {
      "@type": "Service",
      name: "Tattoo Appointment Booking",
      provider: {
        "@type": "TattooParlor",
        name: siteConfig.siteName,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry
        }
      },
      serviceType: "Tattoo Appointment",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock"
      }
    }
  });*/
  });

  return (
    <div className={styles.contact}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.contactHeader}>CONTACT US</h1>
        <HeaderArt />
      </div>
      <div className={styles.shopIconContainer}>
        <h1>
          <a
            href="https://www.instagram.com/wildwindtattoo/?hl=en"
            className={styles.shopIcon}
            aria-label="icon which links to Wild Wind Tattoo's Instagram page"
          >
            <FaInstagram />
          </a>
        </h1>
        <h1>
          <a
            href="https://www.facebook.com/wildwindtattoo/"
            className={styles.shopIcon}
            aria-label="icon which links to Wild Wind Tattoo's Facebook page"
          >
            <FaFacebookSquare />
          </a>
        </h1>
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
          first
        </p>
      </section>
      <Form />
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
