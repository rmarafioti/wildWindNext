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
        Please select your artist to complete their waiver, release, and consent
        to tattoo
      </h2>

      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=2db995c9-063e-47bf-8437-6b7fcfcfa9a3&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Rich Marafioti
      </a>
      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=f753cd03-1919-430d-b5f8-b10e4c6538ae&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Mercy Wright
      </a>
      <a
        className={styles.artistLink}
        href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=27a9da47-ac8a-41af-803d-fbb1b64bed5a&env=na4&acct=b4ee9f55-3f08-40c4-88c9-4b9a5aa9e820&v=2"
      >
        Trevor Aarsvold
      </a>
    </article>
  );
}
