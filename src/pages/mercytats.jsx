import React from "react";
import Head from "next/head";
import usePhotoGallery from "../components/photoGallery";
import TattooCard from "../components/TattooCard";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";

import { mercyPhotos } from "../data/tattooPhotos";

import styles from "../styles/mercytats.module.css";

/**
 *
 * @component MercedesTats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function MercedesTats() {
  //usePhotoGallery hook imported from photoGallery.js
  const { setCurrentIndex, handleNext, handlePrev, imageUrl } =
    usePhotoGallery(mercyPhotos);

  return (
    <article className={styles.tattoos}>
      <Head>
        <title>Mercedes Wright Tattoo Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the Mercedes Wright tattoo page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/mercedestats" />
      </Head>
      <div className={styles.artistContainer}>
        <h1 className={styles.artistHeader}>
          Mercedes Wright
          <a
            className={styles.artistIgIcon}
            href="https://www.instagram.com/tattoomercy/"
            aria-label="icon which links to Mercedes Wright's Instagram page"
          >
            <FaInstagram />
          </a>
        </h1>
      </div>
      <p className={styles.artistAbout}>
        Driven by a passion for art, Mercedes' interest in tattooing began at a
        young age. She takes immense pride in every piece she creates,
        consistently striving to deliver her best effort in all her work. With a
        broad range of tattoo styles, Mercedes is always eager to take on new
        challenges. She has honed her craft to ensure her tattoos are
        consistently clean and meticulous, dedicating the time necessary to
        achieve this standard.
      </p>
      <section className={styles.tattooSection}>
        <div className={styles.tattooSlide}>
          <div className={styles.arrowSection}>
            <PiArrowSquareLeft className={styles.arrow} onClick={handlePrev} />
          </div>
          <img
            className={styles.mercedesTattoo}
            src={imageUrl}
            alt="tattoo portfolio images"
          />
          <div className={styles.arrowSection}>
            <PiArrowSquareRight className={styles.arrow} onClick={handleNext} />
          </div>
        </div>
        <ul className={styles.mercedesGallery}>
          {mercyPhotos.map((tattoo, index) => (
            <TattooCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={mercyPhotos}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}
