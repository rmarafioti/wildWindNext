import React from "react";
import Head from "next/head";
import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import styles from "../styles/home.module.css";

/**
 *
 * @component Home features the main landing page of the web app with video and copy for SEO
 */
export default function Home() {
  return (
    <main className={styles.home}>
      <Head>
        <title>Wild Wind Tattoo - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the home page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/" />
      </Head>
      <h1 className={styles.headerHome}>Welcome to Wild Wind Tattoo</h1>
      <img
        className={styles.shopPhoto}
        src="https://res.cloudinary.com/dzpne110u/image/upload/v1720321542/wildWindSite/shopPhotos/shopFront_j9y8hf.jpg"
        alt="Wild Wind Tattoo's storefront"
      />
      <p className={styles.contactParagraph}>
        Book your appointment today or visit us at 1452 N. Western Ave. Chicago
        IL 60622.
      </p>
      <button className={styles.contactHomeButton}>Contact Us</button>
      <p
        className={`${styles.contactParagraph} ${styles.contactParagraphBottom}`}
      >
        Have questions? Contact us at 773.230.0223 or wildwindtattoo@gmail.com.
      </p>
      <h2 className={styles.headerTwo}>
        Expert Tattooing in Chicago's Vibrant Wicker Park
      </h2>
      <p className={styles.homeParagraph}>
        Founded by Rich Marafioti in 2015, Wild Wind Tattoo has been a beacon of
        expert tattooing in Chicago. Located in the heart of Wicker Park, our
        studio offers a bright, welcoming, and relaxing space for clients to get
        tattooed. At Wild Wind Tattoo, beautiful tattoos are just part of what
        we do. We pride ourselves on creating a forward-thinking, art-centered
        environment where you will enjoy a positive experience that stays with
        you as long as your tattoo.
      </p>

      <h2 className={styles.headerTwo}>Community Engagement</h2>

      <p className={styles.homeParagraph}>
        Wild Wind Tattoo proudly serves and works with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. Currently, we are partnered with the Chicago Therapy Collective's
        Hire Trans Now initiative. Our commitment to community and inclusivity
        is at the core of our mission.
      </p>

      <Link href="/aboutus" className={styles.homeLink}>
        <h4>Learn more</h4>
      </Link>
      <h2 className={styles.headerTwo}>Expert Tattoo Services</h2>
      <ul className={styles.tattooServices}>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>Variety and Customization:</h3>
          <p className={styles.homeParagraph}>
            We offer various tattoo styles, from small walk-ins to larger custom
            pieces. Whether you have a design in mind or need inspiration, our
            talented artists are here to bring your vision to life. Just ask!
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>Comfort and Professionalism:</h3>
          <p className={styles.homeParagraph}>
            At Wild Wind Tattoo, you can expect to be treated with respect and
            care. We communicate all aspects of your tattoo experience, from
            consultation to aftercare. Enjoy a clean, creative, and artistic
            environment while you get tattooed in our inclusive, safe space.
          </p>
        </li>
      </ul>

      <Link href="/tattoos" className={styles.homeLink}>
        <h4>View tattoos</h4>
      </Link>

      <h2 className={styles.headerTwo}>Why Choose Wild Wind Tattoo?</h2>

      <ul className={styles.whyChoose}>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Experienced Artists:
          </h3>
          <p className={styles.homeParagraph}>
            Our team brings years of expertise and passion to every tattoo.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Community Focus:
          </h3>
          <p className={styles.homeParagraph}>
            We actively engage with and support our local community through
            various initiatives and partnerships.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Inclusive Space:
          </h3>
          <p className={styles.homeParagraph}>
            We are committed to providing a welcoming environment for all
            clients, ensuring everyone feels comfortable and respected.
          </p>
        </li>
      </ul>

      <h2 className={styles.headerTwo}>Client Testimonials</h2>
      <li className={styles.homeReview}>
        <h2>Margaux S.</h2>
        <div className={styles.ratingSection}>
          <h3 className={styles.rating}>Rating: </h3>
          <h3 className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
        </div>
        <p className={`${styles.homeParagraph} ${styles.homeParagraphReview}`}>
          {" "}
          "This place is fantastic! I loved my experience working with Rich. He
          had such passion and he's very helpful guiding the experience. I
          relied on his expertise when I was getting two tattoos covered up with
          a bigger tattoo. He was great to talk with, I loved the relaxing jazz
          music in the shop and the vibrant art was so cheerful, so inviting.
          Rich and I kept in touch and he checked my tattoo out a month later to
          see how it healed. I've told my friends to go see Rich and I can't
          recommend enough! Thank you!"
        </p>
      </li>
      <div className={styles.homeLinksContainer}>
        <Link href="/reviews" className={styles.homeLink}>
          <h4>Read more reviews</h4>
        </Link>
      </div>
    </main>
  );
}
