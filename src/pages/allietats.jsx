import React from "react";
import Link from "next/link";
import Image from "next/image";
import usePhotoGallery from "../components/photoGallery";
import AllieCard from "@/components/AllieCard";
import { FaInstagram } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import { alliePhotos } from "../data/tattooPhotos";

import styles from "../styles/allietats.module.css";

/**
 *
 * @component AllieTats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function AllieTats() {
  //usePhotoGallery hook imported from photoGallery.js
  const { setCurrentIndex, handleNext, handlePrev, imageUrl } =
    usePhotoGallery(alliePhotos);

  const seoData = getSeoData("Allie Sider", {
    path: "/allietats",
    description: "",
    schema: {
      "@type": "Person",
      name: "Allie Sider",
      jobTitle: "Tattoo Artist",
      description: "",
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
      url: `${siteConfig.siteUrl}/allietats`,
    },
  });

  return (
    <>
      <article className={styles.tattoos}>
        <SEO {...seoData} />
        <div className={styles.header}>
          <Image
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436144/wildWindSite/allie_sider_ontmyq.png"
            alt="Allie Sider page header"
            priority
            width={727}
            height={126}
            quality={75}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            className={styles.artistHeader}
          />
        </div>
        <h1 className={styles.artistAboutHeader}>No bio at this time</h1>
        <p className={styles.artistAbout}>
          <a
            className={styles.artistIgIcon}
            href="https://www.instagram.com/sider.tattoo/"
            aria-label="icon which links to Allie Sider's Instagram page"
          >
            <FaInstagram />
          </a>
        </p>
      </article>
      <section className={styles.tattooSection}>
        <div>
          <Image
            className={styles.allieTattoo}
            src={imageUrl}
            alt="tattoo portfolio images"
            quality={75}
            width={1056}
            height={1078}
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
          <div className={styles.tattooSlide}>
            <FaCircleArrowLeft className={styles.arrow} onClick={handlePrev} />
            <FaCircleArrowRight className={styles.arrow} onClick={handleNext} />
          </div>
        </div>
        <div className={styles.allieGallery}>
          {alliePhotos.map((tattoo, index) => (
            <AllieCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={alliePhotos}
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
