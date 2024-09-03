import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderArt from "@/components/HeaderArt";
import SEO from "@/components/SEO";
import styles from "../styles/tattoos.module.css";
import { getSeoData, siteConfig } from "@/config/siteConfig";

export default function Tattoos({ initialArtists }) {
  const [artists, setArtists] = useState(initialArtists);

  useEffect(() => {
    // If you need to fetch any client-side data, do it here
  }, []);

  const seoData = getSeoData("Tattoo Styles & Artists", {
    path: "/tattoos",
    description: `Discover the tattoo experience at Wild Wind Tattoo in Chicago. From walk-ins to custom pieces, our inclusive studio offers various styles in a clean, creative environment. Meet our talented artists.`,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.siteName,
      description:
        "Professional tattoo parlor offering various styles and experienced artists",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tattoo Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Tattoo Design",
              description: "Personalized tattoo design services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Walk-in Tattoos",
              description: "Quick tattoo services for walk-in customers",
            },
          },
        ],
      },
    },
  });

  return (
    <article className={styles.tattoos}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <h1 className={styles.tattooHeader}>TATTOOS</h1>
        <HeaderArt />
      </div>
      <ul className={styles.unorderedList}>
        <li className={styles.missionItem}>Variety</li>
        <li className={styles.missionItem}>Comfort</li>
        <li className={styles.missionItem}>Professionalism</li>
      </ul>
      <p className={styles.shopMiddleParagraphs}>
        You can expect to be treated with respect and care at WWT. We will
        communicate all aspects of your tattoo experience, from consultation to
        caring for your new tattoo.
      </p>
      <p className={styles.shopMiddleParagraphs}>
        We offer various tattoo styles, from small walk-ins to larger custom
        pieces. Have something in mind? Just ask!
      </p>
      <p className={`${styles.shopMiddleParagraphs} ${styles.bottomParagraph}`}>
        Our community is important to us. We are here to give you the tattoo you
        want in an inclusive, safe space. While you get tattooed, enjoy a clean,
        creative, and artistic environment.
      </p>
      <h2 className={styles.artistHeader}>Our Artists</h2>
      <div className={styles.artistLinksContainer}>
        {artists.map((artist) => (
          <Link
            key={artist.slug}
            href={`/${artist.slug}`}
            className={styles.artistLink}
          >
            <h3 className={styles.linkHeader}>{artist.name}</h3>
          </Link>
        ))}
      </div>
    </article>
  );
}

export async function getServerSideProps() {
  // Fetch artists data from your API or database
  const artists = [
    { name: "Rich Marafioti", slug: "richtats" },
    { name: "Mercy Wright", slug: "mercytats" },
    { name: "Trevor Aarsvold", slug: "trevortats" },
    { name: "Allie Sider", slug: "allietats" },
  ];

  return {
    props: {
      initialArtists: artists,
    },
  };
}
