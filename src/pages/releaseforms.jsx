import HeaderArtTwo from "@/components/HeaderArtTwo";
import Head from "next/head";

import styles from "@/styles/releaseforms.module.css";

/**
 * @component ReleaseForms serves as the main entry point for clients to access and electronically sign the release form specific to their chosen artist before getting tattooed.
 */
export default function Releaseforms() {
  return (
    <article className={styles.releaseforms}>
      <Head>
        <title>Rich Marafioti Tattoo Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the Release Forms tattoo of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/releaseforms" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.releaseformsHeader}>RELEASE FORMS</h1>
        <HeaderArtTwo />
      </div>
      <h2 className={styles.releaseformsTagline}>
        Please choose your artist to fill out their waiver, release & consent to
        tattoo:
      </h2>
      <ul className={styles.artistList}>
        <li className={styles.artistLink}>Rich Marafioti</li>
        <li className={styles.artistLink}>Mercy Wright</li>
      </ul>
      {/*<iframe
        src="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=2db995c9-063e-47bf-8437-6b7fcfcfa9a3&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
        width="100%"
        height="1000px"
        frameborder="0"
      >
        Your browser does not support iframes.
      </iframe>*/}
    </article>
  );
}
