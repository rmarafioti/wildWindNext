import Head from "next/head";
import Link from "next/link";
import HeaderArt from "@/components/HeaderArt";

import styles from "../styles/tattoos.module.css";

/**
 *
 * @component Tattoos features links to tattoo artist pages
 */
export default function Tattoos() {
  return (
    <article className={styles.tattoos}>
      <Head>
        <title>Tattoos Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the tattoos page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/tattoos" />
      </Head>
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
        <Link href="/richtats" className={styles.artistLink}>
          <h3 className={styles.linkHeader}>Rich Marafioti</h3>
        </Link>
        <Link href="/mercytats" className={styles.artistLink}>
          <h3 className={styles.linkHeader}>Mercedes Wright</h3>
        </Link>
      </div>
    </article>
  );
}
