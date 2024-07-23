import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import usePhotoGallery from "../components/photoGallery";
import TattooCard from "../components/TattooCard";
import HeaderArtTwo from "@/components/HeaderArtTwo";
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
      <div className={styles.header}>
        <h1 className={styles.artistHeader}>RICH MARAFIOTI</h1>
        <HeaderArtTwo />
      </div>
      <p className={styles.artistAbout}>
        Rich began tattooing in 2005, opening Wild Wind with ten years of
        experience in the industry. He is well versed in a variety of tattoo
        styles. He earned his degree from the Rhode Island School of
        Design&apos;s illustration department. His fine arts background is
        evident in his tattoos, personal work, and the gallery-style design of
        the shop.{" "}
        <a
          className={styles.artistIgIcon}
          href="https://www.instagram.com/wild_coma/"
          aria-label="icon which links to Rich Marafioti's Instagram page"
        >
          <FaInstagram />
        </a>
      </p>
      <section className={styles.tattooSection}>
        <div className={styles.tattooSlide}>
          <div className={styles.arrowSection}>
            <PiArrowSquareLeft className={styles.arrow} onClick={handlePrev} />
          </div>
          <Image
            className={styles.tattoo}
            src={imageUrl}
            alt="tattoo portfolio images"
            priority
            quality={75}
            width={1350}
            height={1800}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
          <div className={styles.arrowSection}>
            <PiArrowSquareRight className={styles.arrow} onClick={handleNext} />
          </div>
        </div>
        <div className={styles.tattooGallery}>
          {richPhotos.map((tattoo, index) => (
            <TattooCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={richPhotos}
            />
          ))}
        </div>
      </section>
      <div className={styles.tattooLinksContainer}>
        <Link className={styles.tattooLinks} href="/tattoos">
          <p className={styles.linkHeader}>Tattoos</p>
        </Link>
      </div>
    </article>
  );
}
