import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

/**
 * @component Navbar featuring a functional hamburger menu and drop down menu to route to each component in the application
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useRouter();

  // Reset menu and dropdowns on location (route) change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /**
   * @toggleMenu open and close hamburger menu
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <article>
      <nav className={styles.nav} id="top" aria-label="Main Navigation">
        <section className={styles.navelements}>
          <Link
            id={styles.contactContainer}
            href="/contact"
            aria-label="icon which links to the website's contact page"
          >
            <div id={styles.navLeft}>
              <button className={styles.contactButton}>Contact Us</button>
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
              <button className={styles.contactButton}>Contact Us</button>
            </div>
          </Link>
        </section>
        <Link className={styles.contactHomeButton} href="/contact">
          <p className={styles.linkContactHeader}>Contact Us</p>
        </Link>
      </nav>

      {/*desktop menu*/}
      <nav className={styles.menuDesktop} aria-label="Desktop Navigation">
        <li id={styles.aboutItem}>
          <Link className={styles.navContainer} href="/aboutus">
            <h4
              className={styles.link}
              id={styles.aboutUs}
              role="navbar element About Us"
            >
              ABOUT US
            </h4>
            <IoMdArrowDropdown className={styles.dropIcon} />
          </Link>
          <ul className={styles.subCategory}>
            <Link className={styles.subLink} href="/aboutus#ourMission">
              <li className={styles.subItemAbout}>Our Mission</li>
            </Link>
            <Link className={styles.subLink} href="/aboutus#media">
              <li className={styles.subItemAbout}>Media</li>
            </Link>
            <Link className={styles.subLink} href="/aboutus#reviews">
              <li className={styles.subItemAbout}>Shop Reviews</li>
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
              OUR ARTISTS
            </h4>
            <IoMdArrowDropdown className={styles.dropIcon} />
          </Link>
          <ul className={styles.subCategory}>
            <Link className={styles.subLink} href="/richtats">
              <li className={styles.subItem}>Rich Marafioti</li>
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
      </nav>

      {/* mobile menu */}
      <nav
        className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
        aria-label="Mobile Navigation"
      >
        <article id={styles.aboutItem}>
          <Link
            className={styles.navContainer}
            id={styles.about}
            href="/aboutus"
          >
            <h4 className={styles.link} id={styles.aboutUs} role="heading">
              ABOUT US
            </h4>
          </Link>
          <section>
            <div className={styles.subSection}>
              <div className={styles.subCategory}>
                <Link className={styles.subLink} href="/aboutus#ourMission">
                  <p className={styles.subItemAbout}>Our Mission</p>
                </Link>
                <Link className={styles.subLink} href="/aboutus#media">
                  <p className={styles.subItemAbout}>Media</p>
                </Link>
                <Link className={styles.subLink} href="/aboutus#reviews">
                  <p className={styles.subItemAbout} id={styles.subItemBottom}>
                    Shop Reviews
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </article>
        <article id={styles.tattooItem}>
          <section>
            <Link
              className={styles.navContainer}
              id={styles.tattoos}
              href="/tattoos"
            >
              <h4 className={styles.link} id={styles.tats} role="heading">
                OUR ARTISTS
              </h4>
            </Link>
            <div className={styles.subSection}>
              <div className={styles.subCategory}>
                <Link className={styles.subLink} href="/richtats">
                  <p className={styles.subItem}>Rich Marafioti</p>
                </Link>
              </div>
            </div>
          </section>
        </article>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/aftercare">
            <h4 className={styles.link} role="heading">
              AFTERCARE
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/faqs">
            <h4 className={styles.link} role="heading">
              FAQs
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/giftcards">
            <h4 className={styles.link} id={styles.giftCards} role="heading">
              GIFTCARDS
            </h4>
          </Link>
        </div>
      </nav>
    </article>
  );
}
