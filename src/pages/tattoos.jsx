import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderArt from "@/components/HeaderArt";
import ScrollTop from "@/components/ScrollTop";
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
        <h1 className={styles.tattooHeader}>OUR ARTISTS</h1>
        <HeaderArt />
        <ScrollTop />
      </div>
      <div className={styles.artistLinksContainer}>
        {artists.map((artist) => (
          <Link
            key={artist.slug}
            href={`/${artist.slug}`}
            className={styles.artistLink}
          >
            <img
              className={styles.tatPhoto}
              src={artist.image}
              alt={`photo example of ${artist.name}'s tattoo work`}
            />
            <h2 className={styles.linkHeader}>{artist.name}</h2>
          </Link>
        ))}
      </div>
    </article>
  );
}

export async function getServerSideProps() {
  // Fetch artists data from your API or database
  const artists = [
    {
      name: "Rich Marafioti",
      image:
        "https://res.cloudinary.com/dzpne110u/image/upload/v1717295407/wildWindSite/gibsonGirl_ma7ldx.jpg",
      slug: "richtats",
    },
    {
      name: "Mercy Wright",
      image:
        "https://res.cloudinary.com/dzpne110u/image/upload/v1720058329/wildWindSite/mercedesTats/mercedesTwo_clbmtt.jpg",
      slug: "mercytats",
    },
    {
      name: "Trevor Aarsvold",
      image:
        "https://res.cloudinary.com/dzpne110u/image/upload/v1724293055/wildWindSite/trevorTattoos/DSC_5860_dkqsbm.jpg",
      slug: "trevortats",
    },
    {
      name: "Allie Sider",
      image:
        "https://res.cloudinary.com/dzpne110u/image/upload/v1725317810/wildWindSite/allieTattoos/0-13_1_1_e3s1kl.png",
      slug: "allietats",
    },
  ];

  return {
    props: {
      initialArtists: artists,
    },
  };
}
