import Link from "next/link";
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
          <img
            id={styles.footerLogo}
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1717547711/wildWindSite/wwt_line_ozy2ca.png"
            alt="shop logo"
          />
        </Link>
        <p id={styles.logoTag}>1452 n. western ave chicago il 60622</p>
      </div>
      <div id={styles.footerIcons}>
        <a
          className={styles.footerIcon}
          href="https://www.instagram.com/wildwindtattoo/?hl=en"
        >
          <FaInstagram />
        </a>
        <a
          className={styles.footerIcon}
          href="https://www.facebook.com/wildwindtattoo/"
        >
          <FaFacebookSquare />
        </a>
      </div>
      <h4 id={styles.footerTag}>copyright 2024 Marf inc.</h4>
    </footer>
  );
}
