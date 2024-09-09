import React, { useState, useEffect } from "react";
import AboutSlide from "@/components/AboutSlide";
import HeaderArt from "@/components/HeaderArt";
import { BsDot } from "react-icons/bs";
import Reviews from "@/components/Reviews";
import Media from "@/components/Media";
import Link from "next/link";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import { shopPhotos } from "../data/shopPhotos";

import styles from "../styles/aboutus.module.css";

/**
 *
 * @component Shop features static information about the business as well as a slideshow of shop photos by way of shopPhotos.js
 */
export default function Shop({ initialPhoto }) {
  const [currentPhoto, setCurrentPhoto] = useState(initialPhoto);

  const seoData = getSeoData("About Us", {
    title: "About Wild Wind Tattoo | Award-Winning Artists & Studio",
    path: "/aboutus",
    description:
      "Learn about Wild Wind Tattoo, Chicago's premier tattoo studio since 2015. Explore our mission, community involvement, and commitment to providing a safe, inclusive space for all clients.",
    schema: {
      "@type": "TattooParlor",
      name: siteConfig.siteName,
      description:
        "Premier tattoo studio in Chicago since 2015, offering various tattoo styles in a welcoming environment",
      foundingDate: "2015",
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
      sameAs: [
        "https://www.instagram.com/wildwindtattoo/?hl=en",
        "https://www.facebook.com/wildwindtattoo/",
      ],
      slogan: "Variety, Comfort, Professionalism",
      knowsAbout: [
        "Tattoo artistry",
        "Community involvement",
        "Inclusive spaces",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tattoo services",
          description:
            "Various tattoo styles, from small walk-ins to larger custom pieces",
        },
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "Chicago Therapy Collective",
          description: "Partnered with Hire Trans Now initiative",
        },
      ],
    },
  });

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (isMounted) {
        setTimeout(() => {
          if (isMounted) {
            currentIndex = (currentIndex + 1) % shopPhotos.length;
            setCurrentPhoto(shopPhotos[currentIndex]);
          }
        });
      }
    }, 2000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <article className={styles.shopAbout}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.mainShopHeader}>ABOUT US</h1>
        <HeaderArt />
      </div>
      <div className={styles.quickLinkSection}>
        <p className={styles.quickLink}>Our Mission</p>
        <p className={styles.quickLink}>Media</p>
        <p className={styles.quickLink}>Shop Reviews</p>
      </div>
      <AboutSlide imageUrl={currentPhoto.image} />
      <h2 className={`${styles.shopHeader} ${styles.ourMission}`}>
        OUR MISSION
      </h2>
      <p className={styles.firstParagraph}>
        Rich Marafioti founded Wild Wind Tattoo, which has provided expert
        tattooing in Chicago since 2015. Located in vibrant Wicker Park, Wild
        Wind Tattoo offers a bright, welcoming, and relaxing space for clients
        to get tattooed. Beautiful tattoos are just part of what we do. We pride
        ourselves on creating a forward-thinking, art-centered environment where
        you will enjoy a positive experience, staying with you as long as your
        tattoo.
      </p>
      <div className={styles.unorderedList}>
        <p className={styles.missionItem}>Variety</p>
        <BsDot className={styles.dot} />
        <p className={styles.missionItem}>Comfort</p>
        <BsDot className={styles.dot} />
        <p className={styles.missionItem}>Professionalism</p>
      </div>
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
      <div className={styles.communitySection}>
        <BsDot className={styles.dot} />
        <p className={styles.missionItem}>Community</p>
        <BsDot className={styles.dot} />
      </div>
      <p className={styles.shopParagraphs}>
        Wild Wind Tattoo is proud to serve and work with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. We are currently partnered with Chicago Therapy Collective&apos;s
        Hire Trans Now initiative.
      </p>
      <Media />
      <Reviews />
    </article>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialPhoto: shopPhotos[0], // Ensure this is the first photo in the array
    },
  };
}
