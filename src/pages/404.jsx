import React from "react";
import Link from "next/link";
import HeaderArt from "@/components/HeaderArt";
import styles from "../styles/404.module.css";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

export default function Custom404() {
  const seoData = getSeoData("Page Not Found", {
    path: "/404",
    description: "The page you're looking for doesn't exist. Return to Wild Wind Tattoo's homepage.",
    schema: {
      "@type": "WebPage",
      name: "404 - Page Not Found | " + siteConfig.siteName,
      description: "The page you're looking for doesn't exist. Return to Wild Wind Tattoo's homepage.",
    }
  });

  return (
    <div className={styles.notFound}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.notFoundHeader}>404 - PAGE NOT FOUND</h1>
        <HeaderArt />
      </div>
      <section className={styles.notFoundContent}>
        <h2 className={styles.headerTagline}>
          Oops! The page you are looking for does not exist.
        </h2>
        <p className={styles.headerTaglineTwo}>
          It might have been moved or deleted.
        </p>
      </section>
      <section className={styles.buttonSection}>
        <Link className={styles.homeLink} href="/">
          <h3 className={styles.homeButton}>Return to Homepage</h3>
        </Link>
      </section>
      <section className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <p>Need help? Contact us:</p>
          <p className={styles.contactInfoValue}>
            <a href="tel:+17732272027">773.227.2027</a>
          </p>
          <p className={styles.contactInfoValue}>
            <a href="mailto:wildwindtattoo@gmail.com">wildwindtattoo@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // For a 404 page, we use getStaticProps instead of getServerSideProps
  // as it's a static page that doesn't need server-side rendering
  return {
    props: {},
  };
}