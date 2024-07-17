import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/media.module.css";

/**
 * @component Media features published media for other companies the business has collaborated with or was featured in
 */
export default function Media() {
  return (
    <article className={styles.media}>
      <Head>
        <title>Media Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the media page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/media" />
      </Head>
      <h1 className={styles.mediaHeader}>Media</h1>
      <h2 className={styles.mediaHeaderTag}>
        Harley-Davidson <b className={styles.targetText}>X</b> Wild Wind Tattoo
      </h2>
      <div className={styles.mediaContainer}>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gWt24-_mfKw?si=tpjIjcs4mNcHqOw4"
          title="YouTube video player"
          frameBorder="0"
          /*allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className={styles.mediaHeaderTag} id={styles.mediaHeaderTagBottom}>
        Breakfast for Dinner <b className={styles.targetText}>X</b> Wild Wind
        Tattoo <b className={styles.targetText}>X</b> At-Bay
      </h2>
      <div
        className={`${styles.mediaContainer} ${styles.mediaContainerBottom}`}
      >
        <img
          className={styles.atBayPhoto}
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1719755434/wildWindSite/atBayCampaign_osd2gw.jpg"
          alt="photo of At-Bay campaign"
        ></img>
        <iframe
          className={styles.video}
          id={styles.videoBottom}
          width="560"
          height="315"
          src="https://res.cloudinary.com/dzpne110u/video/upload/v1719756420/wildWindSite/BFD_AT_BAY_MATCHING_TATTOOS_CARDS_15s_16x9_1080P_H264_ym3g3y.mp4"
          title="YouTube video player"
          frameBorder="0"
          /*allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.mediaLinksContainer}>
        <Link className={styles.mediaLinks} href="/aboutus">
          <h3 className={styles.linkHeader}>About Us</h3>
        </Link>
      </div>
    </article>
  );
}
