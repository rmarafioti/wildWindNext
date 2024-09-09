import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderArtTwo from "@/components/HeaderArtTwo";
import SEO from "@/components/SEO";
import styles from "../styles/media.module.css";
import { getSeoData, siteConfig } from "@/config/siteConfig";

export default function Media() {
  const seoData = getSeoData("Media", {
    path: "/media",
    description:
      "Explore Wild Wind Tattoo's media collaborations, including partnerships with Harley-Davidson and At-Bay. See our featured work and creative projects in Chicago's tattoo scene.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Media - Wild Wind Tattoo",
      description:
        "Explore Wild Wind Tattoo's media collaborations, including partnerships with Harley-Davidson and At-Bay.",
      url: `${siteConfig.siteUrl}/media`,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
      },
      about: {
        "@type": "LocalBusiness",
        name: "Wild Wind Tattoo",
        description:
          "Professional tattoo parlor in Chicago offering various styles and experienced artists",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        telephone: siteConfig.phone,
        url: siteConfig.siteUrl,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "CreativeWork",
              name: "Harley-Davidson X Wild Wind Tattoo Collaboration",
              description:
                "Video showcasing the collaboration between Harley-Davidson and Wild Wind Tattoo",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "CreativeWork",
              name: "Breakfast for Dinner X Wild Wind Tattoo X At-Bay Campaign",
              description:
                "Photo and video featuring the collaboration between Breakfast for Dinner, Wild Wind Tattoo, and At-Bay",
            },
          },
        ],
      },
    },
  });

  return (
    <article className={styles.media}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.mediaHeader} id="media">
          MEDIA
        </h1>
      </div>
      <h2 className={styles.mediaHeaderTag}>
        Harley-Davidson <b className={styles.targetText}>X</b> Wild Wind Tattoo
      </h2>
      <div className={styles.mediaContainer}>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gWt24-_mfKw?si=tpjIjcs4mNcHqOw4"
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className={styles.mediaHeaderTag} id={styles.mediaHeaderTagBottom}>
        Breakfast for Dinner <b className={styles.targetText}>X</b> Wild Wind
        Tattoo <b className={styles.targetText}>X</b> At-Bay
      </h2>
      <div
        className={`${styles.mediaContainer} ${styles.mediaContainerBottom}`}
      >
        <Image
          className={styles.atBayPhoto}
          src="https://res.cloudinary.com/dzpne110u/image/upload/wildWindSite/atBayCampaign_osd2gw.jpg"
          alt="photo of At-Bay campaign"
          priority
          quality={75}
          width={1300}
          height={867}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 560px"
        />
        <iframe
          className={styles.video}
          id={styles.videoBottom}
          width="560"
          height="315"
          src="https://res.cloudinary.com/dzpne110u/video/upload/v1719756420/wildWindSite/BFD_AT_BAY_MATCHING_TATTOOS_CARDS_15s_16x9_1080P_H264_ym3g3y.mp4"
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </article>
  );
}
