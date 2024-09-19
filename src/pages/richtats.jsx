import React from "react";
import Link from "next/link";
import Image from "next/image";
import usePhotoGallery from "../components/photoGallery";
import RichCard from "../components/RichCard";
import { FaInstagram } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import { richPhotos } from "../data/tattooPhotos";

import styles from "../styles/richtats.module.css";

/**
 *
 * @component richtats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function RichTats() {
  //usePhotoGallery hook imported from photoGallery.js
  const { setCurrentIndex, handleNext, handlePrev, imageUrl } =
    usePhotoGallery(richPhotos);

  const seoData = getSeoData("Rich Marafioti", {
    path: "/richtats",
    description:
      "Explore Rich Marafioti's tattoo portfolio at Wild Wind Tattoo Chicago. With 15+ years of experience and a fine arts background, Rich offers diverse styles and expert tattooing in Wicker Park.",
    schema: {
      "@type": "Person",
      name: "Rich Marafioti",
      jobTitle: "Tattoo Artist",
      description:
        "Rich began tattooing in 2005, opening Wild Wind with ten years of experience in the industry.",
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
      url: `${siteConfig.siteUrl}/richtats`,
    },
  });

  return (
    <>
      <article className={styles.tattoos}>
        <SEO {...seoData} />
        <div className={styles.header}>
          <Image
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436228/wildWindSite/rich_marafioti_qlv3vx.png"
            alt="Rich Marafioti page header"
            priority
            width={991}
            height={129}
            quality={75}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            className={styles.artistHeader}
          />
        </div>
        <h1 className={styles.artistAboutHeader}>
          {" "}
          Rich Marafioti began tattooing in 2005, opening Wild Wind with ten
          years of experience in the industry.
        </h1>
        <p className={styles.artistAbout}>
          He is well versed in a variety of tattoo styles. He earned his degree
          from the Rhode Island School of Design&apos;s illustration department.
          His fine arts background is evident in his tattoos, personal work, and
          the gallery-style design of the shop.
          <a
            className={styles.artistIgIcon}
            href="https://www.instagram.com/wild_coma/"
            aria-label="icon which links to Rich Marafioti's Instagram page"
          >
            <FaInstagram />
          </a>
        </p>
      </article>
      <section className={styles.tattooSection}>
        <div>
          <Image
            className={styles.tattoo}
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
        <div className={styles.tattooGallery}>
          {richPhotos.map((tattoo, index) => (
            <RichCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={richPhotos}
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
