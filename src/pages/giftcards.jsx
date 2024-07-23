import React from "react";
import Head from "next/head";
import CheckoutForm from "@/components/CheckoutForm";
import HeaderArt from "@/components/HeaderArt";
import styles from "@/styles/giftcards.module.css";

/**
 *
 * @component GiftCards features embedded Stripe form from CheckoutForm.jsx for user to purchase a gift certificate at any value
 */
export default function GiftCards() {
  return (
    <article className={styles.giftCards}>
      <Head>
        <title>Gift Cards Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the gift cards page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/giftcards" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.giftCardHeader}>GIFT CARDS</h1>
        <HeaderArt />
      </div>
      <CheckoutForm />
    </article>
  );
}
