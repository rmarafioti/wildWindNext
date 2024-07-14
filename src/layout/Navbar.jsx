import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoSkullOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import useDropdown from "../components/dropDown";

import styles from "./Navbar.module.css";

/**
 * @component navigation bar featuring a functional hamburger menu and drop down menu to route to each component in the application
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutDropdown = useDropdown();
  const tattooDropdown = useDropdown();
  const location = useRouter();

  const aboutDropdownRef = useRef(aboutDropdown);
  const tattooDropdownRef = useRef(tattooDropdown);

  //reset menu and dropdown to closed on state change
  // Reset menu and dropdown to closed on state change
  useEffect(() => {
    setMenuOpen(false);
    aboutDropdownRef.current.closeDropdown();
    tattooDropdownRef.current.closeDropdown();
  }, [location.pathname]);

  /**
   * @toggleMenu open and close hamburger menu && close drop down menu
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    aboutDropdownRef.current.closeDropdown();
    tattooDropdownRef.current.closeDropdown();
  };

  return (
    <>
      <nav id={styles.nav}>
        <div id={styles.hamMenuContainer} onClick={toggleMenu}>
          <div
            className={`${styles.menuButtonBurger} ${
              menuOpen ? styles.open : ""
            }`}
          ></div>
        </div>
        <Link href="/">
          <img
            id={styles.navLogo}
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1717377135/wildWindSite/WWT_Green_kc8y1n.png"
            alt="shop logo"
          />
        </Link>
        <div id={styles.navRight}>
          <Link
            id={styles.faqContainer}
            href="/faqs"
            aria-label="icon which links to the website's frequently asked questions page"
          >
            <TbMessageCircleQuestion id={styles.faqIcon} />
          </Link>
          <Link
            id={styles.contactContainer}
            href="/contact"
            aria-label="icon which links to the website's contact page"
          >
            <button id={styles.contactButton}>Contact Us</button>
          </Link>
        </div>
      </nav>
      {/*hamburger menu open*/}
      <section id={styles.menuContainer}>
        <menu className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li id={styles.aboutItem}>
            <Link className={styles.navContainer} href="/aboutus">
              <GoBook className={styles.linkIcon} />
              <h4
                className={styles.link}
                id={styles.aboutUs}
                role="navbar element About Us"
              >
                ABOUT US
              </h4>
            </Link>
            {/*drop down menu togglebutton*/}
            <div
              className={styles.aboutLink}
              id={styles.dropIcon}
              onClick={aboutDropdown.toggleDropdown}
            >
              {aboutDropdown.isOpen ? <IoCloseOutline /> : <IoIosArrowDown />}
            </div>
          </li>
          <li id={styles.tattooItem}>
            <Link className={styles.navContainer} href="/tattoos">
              <IoSkullOutline className={styles.linkIcon} />
              <h4
                className={styles.link}
                id={styles.tats}
                role="navbar element Tattoos"
              >
                TATTOOS
              </h4>
            </Link>
            {/*drop down menu togglebutton*/}
            <div
              className={styles.aboutLink}
              id={styles.dropIcon}
              onClick={tattooDropdown.toggleDropdown}
            >
              {tattooDropdown.isOpen ? <IoCloseOutline /> : <IoIosArrowDown />}
            </div>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navContainer} href="/contact">
              <HiOutlineEnvelope className={styles.linkIcon} />
              <h4 className={styles.link} role="navbar element Contact">
                CONTACT
              </h4>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navContainer} href="/aftercare">
              <IoHeartOutline className={styles.linkIcon} />
              <h4 className={styles.link} role="navbar element Aftercare">
                AFTERCARE
              </h4>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navContainer} href="/giftcards">
              <IoGiftOutline className={styles.linkIcon} />
              <h4 className={styles.link} role="navbar element Giftcars">
                GIFTCARDS
              </h4>
            </Link>
          </li>
        </menu>
        {/*drop down menu open*/}
        <div id={styles.dropDownContainer}>
          <menu
            className={`${styles.drop} ${
              aboutDropdown.isOpen ? styles.active : ""
            }`}
          >
            <Link
              className={styles.dropLink}
              id={styles.dropLinkTop}
              href="/reviews"
            >
              <h4 className={styles.dropLinkName}>Reviews</h4>
              <IoIosArrowForward />
            </Link>
            <Link
              className={styles.dropLink}
              id={styles.dropLinkMiddle}
              href="/media"
            >
              <h4 className={styles.dropLinkName}>Media</h4>
              <IoIosArrowForward />
            </Link>
            <Link className={styles.dropLink} href="/faqs">
              <h4 className={styles.dropLinkName}>FAQs</h4>
              <IoIosArrowForward />
            </Link>
          </menu>
        </div>
        {/*drop down menu open*/}
        <div id={styles.dropDownContainer}>
          <menu
            className={`${styles.droptats} ${
              tattooDropdown.isOpen ? styles.active : ""
            }`}
          >
            <Link
              className={styles.dropLink}
              id={styles.dropLinkTop}
              href="/richtats"
            >
              <h4 className={styles.dropLinkName}>Rich Marafioti</h4>
              <IoIosArrowForward />
            </Link>
            <Link className={styles.dropLink} href="/mercytats">
              <h4 className={styles.dropLinkName}>Mercedes Wright</h4>
              <IoIosArrowForward />
            </Link>
          </menu>
        </div>
      </section>
    </>
  );
}
