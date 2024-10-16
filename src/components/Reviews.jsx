import React from "react";
import { FaStar } from "react-icons/fa";
import { reviews } from "../data/reviews";
import styles from "../styles/reviews.module.css";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

/**
 * @component Reviews is a section of reviews by clients about the business by way of review.js which is passed into aboutus.jsx
 */
export default function Reviews() {
  const seoData = getSeoData("Reviews", {
    path: "/aboutus",
    description:
      "Read glowing testimonials from Wild Wind Tattoo's satisfied clients. Discover why our Chicago studio is highly rated for its welcoming atmosphere, skilled artists, and exceptional tattoo work.",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.siteName,
      description:
        "Professional tattoo parlor in Chicago offering various styles and experienced artists",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
      telephone: siteConfig.phone,
      url: siteConfig.siteUrl,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: reviews.length.toString(),
      },
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody: review.review,
      })),
    },
  });

  /**
   * @function ReviewCard holds the information for each individual review
   */
  function ReviewCard({ name, review }) {
    return (
      <li className={styles.review}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.ratingSection}>
          <h3 className={styles.rating}>Rating: </h3>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
        <p className={styles.clientReview}>&quot;{review}&quot;</p>
      </li>
    );
  }

  return (
    <article className={styles.reviewPage}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.reviewHeader} id="reviews">
          Shop Reviews
        </h1>
      </div>
      <p className={styles.reviewTag}>
        Take a look at what our clients have to say about us!
      </p>
      <ul className={styles.reviews}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            review={review.review}
          />
        ))}
      </ul>
      <div className={styles.reviewLinksContainer}>
        <a
          className={styles.reviewLinks}
          href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082771,-87.6899845,16z/data=!4m8!3m7!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!9m1!1b1!16s%2Fg%2F11bw5xqdp7?entry=ttu"
        >
          <h3 className={styles.linkHeader}>Read Google Reviews</h3>
        </a>
      </div>
    </article>
  );
}
