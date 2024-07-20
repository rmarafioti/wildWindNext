import React from "react";
import Image from "next/image";
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
    <article className={styles.home}>
      <Head>
        <title>Wild Wind Tattoo - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the home page of wildwindtattoo.com."
        />
        <link rel="canonical" href="https://wildwindtattoo.com/" />
      </Head>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
      <section className={styles.artContainer}>
        <div className={styles.artOne}>
          <Image
            className={styles.pineapple}
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1721445808/wildWindSite/pineapple_nv473d.png"
            alt="photo of a pineapple"
            priority
            quality={75}
            width={1280}
            height={2851}
            sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.artOneElementOne}>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.dotRow}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          <div className={styles.checkContainer}>
            <div className={styles.checkbox}>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.white}></div>
              <div className={styles.checker}></div>
            </div>
          </div>
        </div>
        <div className={styles.artTwo}>
          <div className={styles.artTwoElementOne}>
            {/*<p className={styles.copy}>WHEREVER THE WIND TAKES YOU</p>*/}
          </div>
          <div className={styles.artTwoElementTwo}>
            <Image
              className={styles.wave}
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1721480796/wildWindSite/waveLine_t14lfd.png"
              alt="photo of a pineapple"
              priority
              quality={75}
              width={2550}
              height={889}
              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className={styles.artThree}>
          <div className={styles.artThreeElementOne}></div>
          <div className={styles.artThreeElementTwo}>
            <div className={styles.gridContainer}>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
              <div className={styles.grid}></div>
            </div>
          </div>
          <div className={styles.artThreeSub}>
            <div className={styles.artThreeSubElementOne}></div>
            <div className={styles.artThreeSubElementTwo}>
              <div className={styles.halfCircle}></div>
              <div className={styles.halfCircle}></div>
              <div className={styles.halfCircle}></div>
            </div>
          </div>
        </div>
      </section>
      <h1 className={styles.headerHome}>Welcome to Wild Wind Tattoo</h1>
      <Image
        className={styles.shopPhoto}
        src="https://res.cloudinary.com/dzpne110u/image/upload/c_scale,q_auto,w_1000/v1720322083/wildWindSite/shopPhotos/shopFront_j9y8hf.jpg"
        alt="Wild Wind Tattoo's storefront"
        priority
        quality={75}
        width={1776}
        height={1184}
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className={styles.contactParagraph}>
        Book your appointment today or visit us at 1452 N. Western Ave. Chicago
        IL 60622.
      </p>
      <Link className={styles.contactHomeButton} href="/contact">
        <p className={styles.linkContactHeader}>Contact Us</p>
      </Link>
      <p
        className={`${styles.contactParagraph} ${styles.contactParagraphBottom}`}
      >
        Have questions? Contact us at 773.230.0223 or wildwindtattoo@gmail.com.
      </p>
      <h2 className={styles.headerTwo}>
        Expert Tattooing in Chicago&apos;s Vibrant Wicker Park
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
        Fund. Currently, we are partnered with the Chicago Therapy
        Collective&apos;s Hire Trans Now initiative. Our commitment to community
        and inclusivity is at the core of our mission.
      </p>

      <Link href="/aboutus" className={styles.homeLink}>
        <h3 className={styles.linkHeader}>About us</h3>
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
        <h3 className={styles.linkHeader}>View tattoos</h3>
      </Link>

      <h2 className={styles.headerTwo}>Why Choose Wild Wind Tattoo?</h2>

      <section className={styles.whyChoose}>
        <div className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Experienced Artists:
          </h3>
          <p className={styles.homeParagraph}>
            Our team brings years of expertise and passion to every tattoo.
          </p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Community Focus:
          </h3>
          <p className={styles.homeParagraph}>
            We actively engage with and support our local community through
            various initiatives and partnerships.
          </p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.headerThree}>
            <IoCheckmark className={styles.checkmark} />
            Inclusive Space:
          </h3>
          <p className={styles.homeParagraph}>
            We are committed to providing a welcoming environment for all
            clients, ensuring everyone feels comfortable and respected.
          </p>
        </div>
      </section>

      <h2 className={styles.headerTwo}>Client Testimonials</h2>
      <section className={styles.homeReview}>
        <h2 className={styles.reviewerName}> Margaux S.</h2>
        <div className={styles.ratingSection}>
          <h3 className={styles.rating}>Rating: </h3>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
        <p className={`${styles.homeParagraph} ${styles.homeParagraphReview}`}>
          {" "}
          &quot;This place is fantastic! I loved my experience working with
          Rich. He had such passion and he&apos;s very helpful guiding the
          experience. I relied on his expertise when I was getting two tattoos
          covered up with a bigger tattoo. He was great to talk with, I loved
          the relaxing jazz music in the shop and the vibrant art was so
          cheerful, so inviting. Rich and I kept in touch and he checked my
          tattoo out a month later to see how it healed. I&apos;ve told my
          friends to go see Rich and I can&apos;t recommend enough! Thank
          you!&quot;
        </p>
      </section>

      <Link href="/reviews" className={styles.homeLink}>
        <h3 className={styles.linkHeader}>Read more reviews</h3>
      </Link>
    </article>
  );
}
