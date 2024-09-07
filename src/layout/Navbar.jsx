import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  IoIosArrowDown,
  IoCloseOutline,
  IoIosArrowForward,
} from "react-icons/io";
import useDropdown from "../components/dropDown";

import styles from "./Navbar.module.css";

/**
 * @component navigation bar featuring a functional hamburger menu and drop down menu to route to each component in the application
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useRouter();

  // Reset menu and dropdowns on location (route) change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /**
   * @toggleMenu open and close hamburger menu && close dropdown menus
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id={styles.nav}>
        <Link
          id={styles.contactContainer}
          href="/contact"
          aria-label="icon which links to the website's contact page"
        >
          <div id={styles.navLeft}>
            <button id={styles.contactButton}>Contact Us</button>
          </div>
        </Link>
        <Link href="/">
          <Image
            id={styles.navLogo}
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1721478504/wildWindSite/WWT_WHT_hpvy19.png"
            alt="shop logo in nav bar"
            priority
            quality={75}
            width={7601}
            height={2165}
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </Link>
        <div id={styles.hamMenuContainer} onClick={toggleMenu}>
          <div
            className={`${styles.menuButtonBurger} ${
              menuOpen ? styles.open : ""
            }`}
          ></div>
        </div>
        <Link
          id={styles.contactContainer}
          href="/contact"
          aria-label="icon which links to the website's contact page"
        >
          <div id={styles.navRight}>
            <button id={styles.contactButton}>Contact Us</button>
          </div>
        </Link>
      </nav>

      {/*desktop menu*/}
      <menu className={styles.menuDesktop}>
        <li id={styles.aboutItem}>
          <Link className={styles.navContainer} href="/aboutus">
            <h4
              className={styles.link}
              id={styles.aboutUs}
              role="navbar element About Us"
            >
              ABOUT US
            </h4>
          </Link>
          <ul className={styles.subCategory}>
            <Link className={styles.subLink} href="/reviews">
              <li className={styles.subItemAbout}>Reviews</li>
            </Link>
            <Link className={styles.subLink} href="/media">
              <li className={styles.subItemAbout}>Media</li>
            </Link>
          </ul>
        </li>
        <li id={styles.tattooItem}>
          <Link className={styles.navContainer} href="/tattoos">
            <h4
              className={styles.link}
              id={styles.tats}
              role="navbar element Tattoos"
            >
              TATTOOS
            </h4>
          </Link>
          <ul className={styles.subCategory}>
            <Link className={styles.subLink} href="/richtats">
              <li className={styles.subItem}>Rich Marafioti</li>
            </Link>
            <Link className={styles.subLink} href="/mercytats">
              <li className={styles.subItem}>Mercy Wright</li>
            </Link>
            <Link className={styles.subLink} href="/trevortats">
              <li className={styles.subItem}>Trevor Aarsvold</li>
            </Link>
            <Link className={styles.subLink} href="/allietats">
              <li className={styles.subItem}>Allie Sider</li>
            </Link>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/aftercare">
            <h4 className={styles.link} role="navbar element Aftercare">
              AFTERCARE
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/faqs">
            <h4 className={styles.link} role="navbar element Contact">
              FAQs
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/giftcards">
            <h4
              className={styles.link}
              id={styles.giftCards}
              role="navbar element Giftcards"
            >
              GIFTCARDS
            </h4>
          </Link>
        </li>
      </menu>

      {/* mobile menu */}
      <menu className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/contact">
            <h4 className={styles.link} role="navbar element Contact">
              CONTACT US
            </h4>
          </Link>
        </li>
        <li id={styles.tattooItem}>
          <section>
            <Link className={styles.navContainer} href="/tattoos">
              <h4
                className={styles.link}
                id={styles.tats}
                role="navbar element Tattoos"
              >
                TATTOOS
              </h4>
            </Link>
            <div className={styles.subSection}>
              <ul className={styles.subCategory}>
                <Link className={styles.subLink} href="/richtats">
                  <li className={styles.subItem}>Rich Marafioti</li>
                </Link>
                <Link className={styles.subLink} href="/mercytats">
                  <li className={styles.subItem}>Mercy Wright</li>
                </Link>
                <Link className={styles.subLink} href="/trevortats">
                  <li className={styles.subItem}>Trevor Aarsvold</li>
                </Link>
                <Link className={styles.subLink} href="/allietats">
                  <li className={styles.subItem}>Allie Sider</li>
                </Link>
              </ul>
            </div>
          </section>
        </li>
        <li id={styles.aboutItem}>
          <section>
            <Link className={styles.navContainer} href="/aboutus">
              <h4
                className={styles.link}
                id={styles.aboutUs}
                role="navbar element About Us"
              >
                ABOUT US
              </h4>
            </Link>
            <div className={styles.subSection}>
              <ul className={styles.subCategory}>
                <Link className={styles.subLink} href="/reviews">
                  <li className={styles.subItem}>Reviews</li>
                </Link>
                <Link className={styles.subLink} href="/media">
                  <li className={styles.subItem}>Media</li>
                </Link>
              </ul>
            </div>
          </section>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/aftercare">
            <h4 className={styles.link} role="navbar element Aftercare">
              AFTERCARE
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/faqs">
            <h4 className={styles.link} role="navbar element Contact">
              FAQs
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/giftcards">
            <h4
              className={styles.link}
              id={styles.giftCards}
              role="navbar element Giftcards"
            >
              GIFTCARDS
            </h4>
          </Link>
        </li>
      </menu>
    </>
  );
}
