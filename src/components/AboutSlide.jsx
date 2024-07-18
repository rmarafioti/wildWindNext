import React from "react";
import Image from "next/image";
import styles from "@/styles/aboutus.module.css";

export default function AboutSlide({ imageUrl, isFading }) {
  return (
    <div
      className={`${styles.shopImagesContainer} ${
        isFading ? styles["fade-out"] : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt="Tattoo shop photos"
        priority
        layout="responsive"
        width={300}
        height={600}
        quality={75}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        className={styles.shopImage}
      />
    </div>
  );
}
