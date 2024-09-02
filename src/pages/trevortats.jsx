import React from "react";
import Link from "next/link";
import Image from "next/image";
import usePhotoGallery from "../components/photoGallery";
import TrevorCard from "@/components/TrevorCard";
import HeaderArtTwo from "@/components/HeaderArtTwo";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import { trevorPhotos } from "@/data/tattooPhotos";

import styles from "@/styles/trevortats.module.css";

/**
 *
 * @component trevortats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function TrevorTats() {
  //usePhotoGallery hook imported from photoGallery.js
  const { setCurrentIndex, handleNext, handlePrev, imageUrl } =
    usePhotoGallery(trevorPhotos);

  const seoData = getSeoData("Trevor Aarsvold", {
    path: "/trevortats",
    description: "",
    schema: {
      "@type": "Person",
      name: "Trevor Aarsvold",
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
      url: `${siteConfig.siteUrl}/trevortats`,
    },
  });

  return (
    <article className={styles.tattoos}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.artistHeader}>TREVOR AARSVOLD</h1>
        <HeaderArtTwo />
      </div>
      <p className={styles.artistAbout}>
        Trevor has been immersed in art from a young age; his passion for
        tattoos ignited in his mid-teens, leading him to a two-year
        apprenticeship at Brass Knuckle Tattoo Studio in Minneapolis under the
        guidance of Derek “Frog” Ellis. During his time there, Trevor refined
        his technical skills and developed a deep appreciation for the craft.
        His journey has taken him around the world, where he’s continuously
        honed his ability to create unique, custom designs. Now tattooing at
        Wild Wind Tattoo in Chicago, Trevor is ready to bring your ideas to
        life.
        <a
          className={styles.artistIgIcon}
          href="https://www.instagram.com/trevordillonart/"
          aria-label="icon which links to Trevor Aarsvold's Instagram page"
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
            width={1650}
            height={1627}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
          <div className={styles.arrowSection}>
            <PiArrowSquareRight className={styles.arrow} onClick={handleNext} />
          </div>
        </div>
        <div className={styles.tattooGallery}>
          {trevorPhotos.map((tattoo, index) => (
            <TrevorCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={trevorPhotos}
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
