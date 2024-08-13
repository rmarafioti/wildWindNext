import HeaderArtTwo from "@/components/HeaderArtTwo";

import styles from "@/styles/releaseforms.module.css";

export default function Releaseforms() {
  return (
    <article className={styles.releaseforms}>
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
