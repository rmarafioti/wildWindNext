import React from "react";
import Link from "next/link";
import LandingPageArt from "@/components/LandingPageArt";
import { IoCheckmark } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import ScrollTop from "@/components/ScrollTop";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import styles from "../styles/home.module.css";

/**
 *
 * @component Home features the main landing page of the web app with video and copy for SEO
 */
export default function Home() {
  const seoData = getSeoData("Home", {
    title: "Best Tattoo Shop Chicago | Wild Wind Tattoo | Professional Artists",
    path: "/",
    description:
      "Wild Wind is a local Chicago tattoo shop that welcomes walk-ins. No hot air - just tattoos. Call today (773) 227-2027",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.siteName,
      description:
        "Expert tattooing in Chicago's Vibrant Wicker Park. Founded by Rich Marafioti in 2015, Wild Wind Tattoo offers a bright, welcoming, and relaxing space for clients to get tattooed.",
      url: siteConfig.siteUrl,
      telephone: "+17732272027",
      email: "wildwindtattoo@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1452 N. Western Ave.",
        addressLocality: "Chicago",
        addressRegion: "IL",
        postalCode: "60622",
        addressCountry: "US",
      },
      serviceType: "Tattoo Services",
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: "Chicago",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tattoo Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Tattoo Design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Walk-in Tattoos",
            },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/wildwindtattoo/",
        "https://www.facebook.com/wildwindtattoo/",
      ],
    },
  });

  return (
    <article className={styles.home} id="top">
      <SEO {...seoData} />
      <p className={styles.welcome}>Walk-ins Welcome!</p>
      <LandingPageArt />
      <ScrollTop />
      <h1 className={styles.mainHeader}>
        Expert Tattooing in Chicago&apos;s Vibrant Wicker Park
      </h1>
      <p className={styles.homeParagraph}>
        Founded by Rich Marafioti in 2015, Wild Wind Tattoo has been a beacon of
        expert tattooing in Chicago. Located in the heart of Wicker Park, our
        studio offers a bright, welcoming, and relaxing space for clients to get
        tattooed. At Wild Wind Tattoo, beautiful tattoos are just part of what
        we do. We pride ourselves on creating a forward-thinking, art-centered
        environment where you will enjoy a positive experience that stays with
        you as long as your tattoo.
      </p>

      <h2 className={styles.headerTwo} id={styles.headerTwo}>
        Community Engagement
      </h2>

      <p className={styles.homeParagraph}>
        Wild Wind Tattoo proudly serves and works with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. Currently, we are partnered with the Chicago Therapy
        Collective&apos;s Hire Trans Now initiative. Our commitment to community
        and inclusivity is at the core of our mission.
      </p>

      <Link href="/aboutus" className={styles.homeLink}>
        <h3 className={styles.linkHeader}>About us</h3>
      </Link>
      <h2 className={styles.headerTwo}>Expert Tattoo Services</h2>
      <ul className={styles.tattooServices}>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>Variety and Customization:</h3>
          <p className={styles.homeParagraph}>
            We offer various tattoo styles, from small walk-ins to larger custom
            pieces. Whether you have a design in mind or need inspiration, our
            talented artists are here to bring your vision to life. Just ask!
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>Comfort and Professionalism:</h3>
          <p className={styles.homeParagraph}>
            At Wild Wind Tattoo, you can expect to be treated with respect and
            care. We communicate all aspects of your tattoo experience, from
            consultation to aftercare. Enjoy a clean, creative, and artistic
            environment while you get tattooed in our inclusive, safe space.
          </p>
        </li>
      </ul>

      <Link href="/tattoos" className={styles.homeLink}>
        <h3 className={styles.linkHeader}>View our artists</h3>
      </Link>

      <h2 className={styles.headerTwo}>Why Choose Wild Wind Tattoo?</h2>

      <section className={styles.whyChoose}>
        <div className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Experienced Artists:
          </h3>
          <p className={styles.homeParagraph}>
            Our team brings years of expertise and passion to every tattoo.
          </p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Community Focus:
          </h3>
          <p className={styles.homeParagraph}>
            We actively engage with and support our local community through
            various initiatives and partnerships.
          </p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Inclusive Space:
          </h3>
          <p className={styles.homeParagraph}>
            We are committed to providing a welcoming environment for all
            clients, ensuring everyone feels comfortable and respected.
          </p>
        </div>
      </section>

      <h2 className={styles.headerTwo}>Client Testimonials</h2>
      <section className={styles.homeReview}>
        <h2 className={styles.reviewerName}> Margaux S.</h2>
        <div className={styles.ratingSection}>
          <h3 className={styles.rating}>Rating: </h3>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
        <p className={`${styles.homeParagraph} ${styles.homeParagraphReview}`}>
          {" "}
          &quot;This place is fantastic! I loved my experience working with
          Rich. He had such passion and he&apos;s very helpful guiding the
          experience. I relied on his expertise when I was getting two tattoos
          covered up with a bigger tattoo. He was great to talk with, I loved
          the relaxing jazz music in the shop and the vibrant art was so
          cheerful, so inviting. Rich and I kept in touch and he checked my
          tattoo out a month later to see how it healed. I&apos;ve told my
          friends to go see Rich and I can&apos;t recommend enough! Thank
          you!&quot;
        </p>
      </section>

      <Link href="/aboutus#reviews" className={styles.homeLink}>
        <h3 className={styles.linkHeader}>Read more reviews</h3>
      </Link>
    </article>
  );
}
