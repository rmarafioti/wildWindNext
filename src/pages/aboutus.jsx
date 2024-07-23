import React, { useState, useEffect } from "react";
import Head from "next/head";
import AboutSlide from "@/components/AboutSlide";
import HeaderArt from "@/components/HeaderArt";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";

import { shopPhotos } from "../data/shopPhotos";

import styles from "../styles/aboutus.module.css";

/**
 *
 * @component Shop features static information about the business as well as a slideshow of shop photos by way of shopPhotos.js
 */
export default function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  /**
   *@function interval creates a slideshow of shop photos looping through by the photos index at a set timeout of 3 seconds
   */

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const interval = setInterval(() => {
      if (isMounted) {
        setIsFading(true);
        setTimeout(() => {
          if (isMounted) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % shopPhotos.length);
            setIsFading(false);
          }
        }, 1000);
      }
    }, 3000);

    return () => {
      isMounted = false; // Cleanup function to set the mounted flag to false
      clearInterval(interval);
    };
  }, []);

  return (
    <article className={styles.shopAbout}>
      <Head>
        <title>About Us Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the about page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/aboutus" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.mainShopHeader}>ABOUT US</h1>
        <HeaderArt />
        {/*{shopPhotos.length > 0 && (
        <AboutSlide
          imageUrl={shopPhotos[currentIndex].image}
          isFading={isFading}
        />
      )}*/}
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
      <p className={styles.firstParagraph}>
        Rich Marafioti founded Wild Wind Tattoo, which has provided expert
        tattooing in Chicago since 2015. Located in vibrant Wicker Park, Wild
        Wind Tattoo offers a bright, welcoming, and relaxing space for clients
        to get tattooed. Beautiful tattoos are just part of what we do. We pride
        ourselves on creating a forward-thinking, art-centered environment where
        you will enjoy a positive experience, staying with you as long as your
        tattoo.
      </p>
      <h2 className={`${styles.shopHeader} ${styles.ourMission}`}>
        Our Mission
      </h2>
      <ul className={styles.unorderedList}>
        <li className={styles.missionItem}>Variety</li>
        <li className={styles.missionItem}>Comfort</li>
        <li className={styles.missionItem}>Professionalism</li>
      </ul>
      <section className={styles.shopMiddleParagraphs}>
        <p className={styles.middleParagraph}>
          You can expect to be treated with respect and care at WWT. We will
          communicate all aspects of your tattoo experience, from consultation
          to caring for your new tattoo.
        </p>
        <p className={`${styles.middleParagraph} ${styles.midParagraph}`}>
          We offer various tattoo styles, from small walk-ins to larger custom
          pieces. Have something in mind? Just ask!
        </p>
        <p className={`${styles.middleParagraph} ${styles.bottomParagraph}`}>
          Our community is important to us. We are here to give you the tattoo
          you want in an inclusive, safe space. While you get tattooed, enjoy a
          clean, creative, and artistic environment.
        </p>
      </section>
      <h2 className={styles.shopHeader}>Community</h2>
      <p className={styles.shopParagraphs}>
        Wild Wind Tattoo is proud to serve and work with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. We are currently partnered with Chicago Therapy Collective&apos;s
        Hire Trans Now initiative.
      </p>
      <div className={styles.shopLinksContainer}>
        <Link href="/reviews" className={styles.shopLinks}>
          <h3 className={styles.linkHeader}>Reviews</h3>
        </Link>
        <Link href="/media" className={styles.shopLinks}>
          <h3 className={styles.linkHeader}>Media</h3>
        </Link>
        <Link href="/faqs" className={styles.shopLinks}>
          <h3 className={styles.linkHeader}>Faqs</h3>
        </Link>
      </div>
    </article>
  );
}
