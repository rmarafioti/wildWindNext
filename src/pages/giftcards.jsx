import React from "react";
import Image from "next/image";
import CheckoutForm from "@/components/CheckoutForm";
import SEO from "@/components/SEO";
import { getSeoData, siteConfig } from "@/config/siteConfig";

import styles from "@/styles/giftcards.module.css";

/**
 * @component GiftCards features embedded Stripe form from CheckoutForm.jsx for user to purchase a gift certificate at any value
 */
export default function GiftCards() {
  const seoData = getSeoData("Wild Wind Tattoo Gift Card", {
    path: "/giftcards",
    description:
      "Give the gift of art with Wild Wind Tattoo gift cards. Perfect for tattoo enthusiasts in Chicago. Purchase online or in-store at our Wicker Park studio for a unique and memorable present.",
    schema: {
      "@type": "Product",
      name: "Wild Wind Tattoo Gift Card",
      description:
        "Gift card for tattoo services at Wild Wind Tattoo studio in Chicago",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
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
      },
    },
  });

  return (
    <article className={styles.giftCards}>
      <SEO {...seoData} />
      <div className={styles.header}>
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1726436163/wildWindSite/gift_cards_vymlej.png"
          alt="Giftcards page header"
          priority
          width={724}
          height={160}
          quality={75}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={styles.giftCardHeader}
        />
      </div>
      <h1 className={styles.faqTagline}>
        Treat a friend or family member to a Wild Wind Tattoo gift card
      </h1>
      <CheckoutForm />
    </article>
  );
}

export async function getServerSideProps() {
  // If you need to fetch any data for the gift cards page, do it here
  // For now, we'll just return an empty object
  return {
    props: {},
  };
}
