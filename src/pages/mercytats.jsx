import React from "react";
import Link from "next/link";
import Image from "next/image";
import usePhotoGallery from "../components/photoGallery";
import MercyCard from "@/components/MercyCard";
import { FaInstagram } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

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

  const seoData = getSeoData("Mercy Wright", {
    path: "/mercytats",
    description:
      "Meet Mercy Wright, talented tattoo artist at Wild Wind Tattoo Chicago. View her diverse portfolio, learn about her passion for clean, meticulous tattoos, and book your session today.",
    schema: {
      "@type": "Person",
      name: "Mercy Wright",
      jobTitle: "Tattoo Artist",
      description:
        "Talented tattoo artist specializing in clean, meticulous designs",
      worksFor: {
        "@type": "TattooParlor",
        name: siteConfig.siteName,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
      },
      url: `${siteConfig.siteUrl}/mercytats`,
    },
  });

  return (
    <>
      <article className={styles.tattoos}>
        <SEO {...seoData} />
        <div className={styles.header}>
          <Image
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436207/wildWindSite/mercy_wright_xhicpe.png"
            alt="Mercy Wright page header"
            priority
            width={1000}
            height={155}
            quality={75}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            className={styles.artistHeader}
          />
        </div>
        <h1 className={styles.artistAboutHeader}>
          {" "}
          Driven by a passion for art, Mercy Wright&apos;s interest in tattooing
          began at a young age.
        </h1>
        <p className={styles.artistAbout}>
          She takes immense pride in every piece she creates, consistently
          striving to deliver her best effort in all her work. With a broad
          range of tattoo styles, Mercy is always eager to take on new
          challenges. She has honed her craft to ensure her tattoos are
          consistently clean and meticulous, dedicating the time necessary to
          achieve this standard.
          <a
            className={styles.artistIgIcon}
            href="https://www.instagram.com/tattoomercy/"
            aria-label="icon which links to Mercy Wright's Instagram page"
          >
            <FaInstagram />
          </a>
        </p>
      </article>
      <section className={styles.tattooSection}>
        <div>
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
          <div className={styles.tattooSlide}>
            <FaCircleArrowLeft className={styles.arrow} onClick={handlePrev} />
            <FaCircleArrowRight className={styles.arrow} onClick={handleNext} />
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
      <article className={styles.tattoos}>
        <div className={styles.tattooLinksContainer}>
          <Link className={styles.tattooLinks} href="/tattoos">
            <p className={styles.linkHeader}>Back to Our Artists</p>
          </Link>
        </div>
      </article>
    </>
  );
}
