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
        <h1 className={styles.contactHeader}>
          Request an appointment with us!
        </h1>
      </div>
      <section className={styles.contactTagHeader}>
        <h2 className={styles.headerTagline}>
          Reach out to request an appointment with one of our talented artists
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
