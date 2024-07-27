import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import usePhotoGallery from "../components/photoGallery";
import MercyCard from "@/components/MercyCard";
import HeaderArtTwo from "@/components/HeaderArtTwo";
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
        <link rel="canonical" href="https://wildwindtattoo.com/mercedestats" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.artistHeader}>MERCY WRIGHT</h1>
        <HeaderArtTwo />
      </div>
      <p className={styles.artistAbout}>
        Driven by a passion for art, Mercedes&apos; interest in tattooing began
        at a young age. She takes immense pride in every piece she creates,
        consistently striving to deliver her best effort in all her work. With a
        broad range of tattoo styles, Mercedes is always eager to take on new
        challenges. She has honed her craft to ensure her tattoos are
        consistently clean and meticulous, dedicating the time necessary to
        achieve this standard.
        <a
          className={styles.artistIgIconMercy}
          href="https://www.instagram.com/tattoomercy/"
          aria-label="icon which links to Mercedes Wright's Instagram page"
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
            className={styles.mercedesTattoo}
            src={imageUrl}
            alt="tattoo portfolio images"
            priority
            quality={75}
            width={1650}
            height={1627}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
          <div className={styles.arrowSection}>
            <PiArrowSquareRight className={styles.arrow} onClick={handleNext} />
          </div>
        </div>
        <div className={styles.mercedesGallery}>
          {mercyPhotos.map((tattoo, index) => (
            <MercyCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={mercyPhotos}
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
