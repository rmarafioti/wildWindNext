import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AboutSlide from "@/components/AboutSlide";
import HeaderArt from "@/components/HeaderArt";
import OurMission from "@/components/OurMission";
import Reviews from "@/components/Reviews";
import Media from "@/components/Media";
import ScrollTop from "@/components/ScrollTop";
import { Link } from "react-scroll";
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

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.includes("#")) {
        const hash = url.split("#")[1];
        const element = document.getElementById(hash);
        if (element) {
          // Check if the screen width is mobile size (e.g., 768px or less)
          if (window.innerWidth <= 768) {
            // Apply a delay only for mobile screens
            setTimeout(() => {
              const yOffset = -100; // Adjust this based on your header height
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }, 300); // Add a 300ms delay
          } else {
            // For larger screens, no delay needed
            const yOffset = -100; // Adjust this based on your header height
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        <Link
          to="ourMission"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="headers"
        >
          <p className={styles.quickLink}>Our Mission</p>
        </Link>
        <Link
          to="media"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="headers"
        >
          <p className={styles.quickLink}>Media</p>
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="headers"
        >
          <p className={styles.quickLink}>Shop Reviews</p>
        </Link>
      </div>
      <AboutSlide imageUrl={currentPhoto.image} />
      <ScrollTop />
      <OurMission />
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
