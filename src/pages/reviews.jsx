import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { reviews } from "../data/reviews";
import styles from "../styles/reviews.module.css";

/**
 * @component Reviews features reviews by clients about the business by way of review.js
 */
export default function Reviews() {
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
      <Head>
        <title>Reviews Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the reviews page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/reviews" />
      </Head>
      <h1 className={styles.reviewHeader}>Reviews</h1>
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
        <Link className={styles.reviewLinks} href="/aboutus">
          <h3 className={styles.linkHeader}>About Us</h3>
        </Link>
      </div>
    </article>
  );
}
