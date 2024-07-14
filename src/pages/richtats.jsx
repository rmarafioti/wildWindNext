import React from "react";
import Head from "next/head";
import usePhotoGallery from "../components/photoGallery";
import TattooCard from "../components/TattooCard";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";

import { richPhotos } from "../data/tattooPhotos";

import styles from "../styles/richtats.module.css";

/**
 *
 * @component RichTats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function RichTats() {
  //usePhotoGallery hook imported from photoGallery.js
  const { setCurrentIndex, handleNext, handlePrev, imageUrl } =
    usePhotoGallery(richPhotos);

  return (
    <article className={styles.tattoos}>
      <Head>
        <title>Rich Marafioti Tattoo Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the Rich Marafioti tattoo page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/richtats" />
      </Head>
      <div className={styles.artistContainer}>
        <h1 className={styles.artistHeader}>
          Rich Marafioti
          <a
            className={styles.artistIgIcon}
            href="https://www.instagram.com/wild_coma/"
            aria-label="icon which links to Rich Marafioti's Instagram page"
          >
            <FaInstagram />
          </a>
        </h1>
      </div>
      <p className={styles.artistAbout}>
        Rich began tattooing in 2005, opening Wild Wind with ten years of
        experience in the industry. He is well versed in a variety of tattoo
        styles. He earned his degree from the Rhode Island School of Design's
        illustration department. His fine arts background is evident in his
        tattoos, personal work, and the gallery-style design of the shop.
      </p>
      <section className={styles.tattooSection}>
        <div className={styles.tattooSlide}>
          <div className={styles.arrowSection}>
            <PiArrowSquareLeft className={styles.arrow} onClick={handlePrev} />
          </div>
          <img
            className={styles.tattoo}
            src={imageUrl}
            alt="tattoo portfolio images"
          />
          <div className={styles.arrowSection}>
            <PiArrowSquareRight className={styles.arrow} onClick={handleNext} />
          </div>
        </div>
        <ul className={styles.tattooGallery}>
          {richPhotos.map((tattoo, index) => (
            <TattooCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={richPhotos}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}
