import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
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
              <li className={styles.subItem}>Reviews</li>
            </Link>
            <Link className={styles.subLink} href="/media">
              <li className={styles.subItem}>Media</li>
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
          <Link className={styles.navContainer} href="/contact">
            <h4 className={styles.link} role="navbar element Contact">
              CONTACT
            </h4>
          </Link>
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
            {/*<HiOutlineEnvelope className={styles.linkIcon} />*/}
            <h4 className={styles.link} role="navbar element Contact">
              FAQs
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/giftcards">
            {/*<IoGiftOutline className={styles.linkIcon} />*/}
            <h4
              className={styles.link}
              id={styles.giftCards}
              role="navbar element Giftcars"
            >
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

      {/* mobile menu */}
      <menu className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
        <li id={styles.aboutItem}>
          <Link className={styles.navContainer} href="/aboutus">
            {/*<GoBook className={styles.linkIcon} />*/}
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
            {/*<IoSkullOutline className={styles.linkIcon} />*/}
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
                <h4 className={styles.dropLinkName}>Mercy Wright</h4>
                <IoIosArrowForward />
              </Link>
              <Link className={styles.dropLink} href="/trevortats">
                <h4 className={styles.dropLinkName}>Trevor Aarsvold</h4>
                <IoIosArrowForward />
              </Link>
              <Link className={styles.dropLink} href="/allietats">
                <h4 className={styles.dropLinkName}>Allie Sider</h4>
                <IoIosArrowForward />
              </Link>
            </menu>
          </div>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/contact">
            {/*<HiOutlineEnvelope className={styles.linkIcon} />*/}
            <h4 className={styles.link} role="navbar element Contact">
              CONTACT
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/aftercare">
            {/*<IoHeartOutline className={styles.linkIcon} />*/}
            <h4 className={styles.link} role="navbar element Aftercare">
              AFTERCARE
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/faqs">
            {/*<HiOutlineEnvelope className={styles.linkIcon} />*/}
            <h4 className={styles.link} role="navbar element Contact">
              FAQs
            </h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navContainer} href="/giftcards">
            {/*<IoGiftOutline className={styles.linkIcon} />*/}
            <h4
              className={styles.link}
              id={styles.giftCards}
              role="navbar element Giftcars"
            >
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
    </>
  );
}
