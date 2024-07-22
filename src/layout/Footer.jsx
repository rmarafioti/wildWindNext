import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.css";

/**
 * @component footer features static business info and links to outside sites
 */
export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div id={styles.footerHeaderContainer}>
        <Link id={styles.footerItem} href="/">
          <Image
            id={styles.footerLogo}
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1721478556/wildWindSite/WWT_BLK_elfa3z.png"
            alt="shop logo footer"
            quality={75}
            width={3319}
            height={521}
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </Link>
        <p id={styles.logoTag}>1452 n. western ave chicago il 60622</p>
      </div>
      <div id={styles.footerIcons}>
        <a
          className={styles.footerIcon}
          href="https://www.instagram.com/wildwindtattoo/?hl=en"
          aria-label="icon which links to the Wild Wind Tattoo's Instagram page."
        >
          <FaInstagram />
        </a>
        <a
          className={styles.footerIcon}
          href="https://www.facebook.com/wildwindtattoo/"
          aria-label="icon which links to the Wild Wind Tattoo's Facebook page."
        >
          <FaFacebookSquare />
        </a>
      </div>
      <p id={styles.footerTag}>copyright 2024 Marf inc.</p>
    </footer>
  );
}
