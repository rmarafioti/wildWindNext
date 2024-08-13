import React from "react";
import Form from "@/components/Form";
import HeaderArtTwo from "@/components/HeaderArtTwo";
import styles from "@/styles/requestappt.module.css";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

/**
 * @component RequestAppt features a functional form by way of Form.jsx for a client to request an appointment via email
 */
export default function RequestAppt() {
  const seoData = getSeoData("Request Appointment", {
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
  });

  return (
    <article className={styles.requestContact}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.requestHeader}>REQUEST AN APPOINTMENT</h1>
        <HeaderArtTwo />
      </div>
      <Form />
    </article>
  );
}

export async function getServerSideProps() {
  // If you need to fetch any data for the appointment request page, do it here
  // For now, we'll just return an empty object
  return {
    props: {},
  };
}