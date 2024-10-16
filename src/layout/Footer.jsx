import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.css";

/**
 * @component Footer features static business info and links to outside sites
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
        <section className={styles.contactInfoContainer}>
          <div className={styles.contactInfo}>
            <p>ADDRESS:</p>
            <p className={styles.contactInfoValue}>
              <a
                id={styles.address}
                href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu"
              >
                1452 N. Western Ave. Chicago, IL 60622
              </a>
            </p>
          </div>
          <section className={styles.hoursContainer}>
            <p className={styles.contactInfo} id={styles.hour}>
              HOURS:{" "}
            </p>
            <div className={styles.hours}>
              <p className={styles.times} id={styles.timesTop}>
                <b className={styles.bold}>Open 7 days a week</b>
              </p>
              <p className={styles.times}>
                <b className={styles.bold}>
                  *hours vary daily please call ahead*
                </b>{" "}
              </p>
            </div>
          </section>
          <div className={styles.contactInfo}>
            PHONE:
            <p className={styles.contactInfoValue} id={styles.phone}>
              <a href="tel:+17732272027"> 773.227.2027</a>
            </p>
          </div>
          <div className={styles.contactInfo}>
            EMAIL:
            <p className={styles.contactInfoValue} id={styles.email}>
              <a href="mailto:wildwindtattoo@gmail.com">
                wildwindtattoo@gmail.com
              </a>
            </p>
          </div>
        </section>
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
