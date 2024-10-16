import React from "react";
import Link from "next/link";
import styles from "../styles/404.module.css";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

/**
 *
 * @component Custom404 error page if the user is trying to access a route that is not available
 */
export default function Custom404() {
  const seoData = getSeoData("Page Not Found", {
    path: "/404",
    description:
      "The page you're looking for doesn't exist. Return to Wild Wind Tattoo's homepage.",
    schema: {
      "@type": "WebPage",
      name: "404 - Page Not Found | " + siteConfig.siteName,
      description:
        "The page you're looking for doesn't exist. Return to Wild Wind Tattoo's homepage.",
    },
  });

  return (
    <div className={styles.notFound}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.notFoundHeader}>404 - PAGE NOT FOUND</h1>
        <h2 className={styles.headerTagline}>
          Oops! The page you are looking for does not exist.
        </h2>
        <h3 className={styles.headerTaglineTwo}>
          It might have been moved or deleted.
        </h3>
      </div>
      <Link className={styles.homeLink} href="/">
        <h3 className={styles.homeButton}>Return to Homepage</h3>
      </Link>
      <section className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <p>Need help? Contact us:</p>
          <p className={styles.contactInfoValue}>
            <a href="tel:+17732272027">773.227.2027</a>
          </p>
          <p className={styles.contactInfoValue}>
            <a href="mailto:wildwindtattoo@gmail.com">
              wildwindtattoo@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
