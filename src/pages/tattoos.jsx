import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollTop from "@/components/ScrollTop";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import styles from "../styles/tattoos.module.css";

/**
 *
 * @component Tattoos the 'Our Artists' page of the site where a user can choose an artist and then view their individual portfolio page
 */
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
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436198/wildWindSite/our_artists_yibhfb.png"
          alt="Our Artists page header"
          priority
          width={770}
          height={130}
          quality={75}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={styles.ourArtists}
        />
        <ScrollTop />
      </div>
      <h1 className={styles.headerTag}>
        Choose one of our talented artists to best fit your tattoo needs
      </h1>
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
