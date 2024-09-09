import { BsDot } from "react-icons/bs";

import styles from "../styles/aboutus.module.css";

export default function OurMission() {
  return (
    <>
      <h2 className={styles.shopHeader} id="ourMission">
        OUR MISSION
      </h2>
      <p className={styles.firstParagraph}>
        Rich Marafioti founded Wild Wind Tattoo, which has provided expert
        tattooing in Chicago since 2015. Located in vibrant Wicker Park, Wild
        Wind Tattoo offers a bright, welcoming, and relaxing space for clients
        to get tattooed. Beautiful tattoos are just part of what we do. We pride
        ourselves on creating a forward-thinking, art-centered environment where
        you will enjoy a positive experience, staying with you as long as your
        tattoo.
      </p>
      <div className={styles.unorderedList}>
        <p className={styles.missionItem}>Variety</p>
        <BsDot className={styles.dot} />
        <p className={styles.missionItem}>Comfort</p>
        <BsDot className={styles.dot} />
        <p className={styles.missionItem}>Professionalism</p>
      </div>
      <section className={styles.shopMiddleParagraphs}>
        <p className={styles.middleParagraph}>
          You can expect to be treated with respect and care at WWT. We will
          communicate all aspects of your tattoo experience, from consultation
          to caring for your new tattoo.
        </p>
        <p className={`${styles.middleParagraph} ${styles.midParagraph}`}>
          We offer various tattoo styles, from small walk-ins to larger custom
          pieces. Have something in mind? Just ask!
        </p>
        <p className={`${styles.middleParagraph} ${styles.bottomParagraph}`}>
          Our community is important to us. We are here to give you the tattoo
          you want in an inclusive, safe space. While you get tattooed, enjoy a
          clean, creative, and artistic environment.
        </p>
      </section>
      <div className={styles.communitySection}>
        <BsDot className={styles.dot} />
        <p className={styles.missionItem}>Community</p>
        <BsDot className={styles.dot} />
      </div>
      <p className={styles.shopParagraphs}>
        Wild Wind Tattoo is proud to serve and work with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. We are currently partnered with Chicago Therapy Collective&apos;s
        Hire Trans Now initiative.
      </p>
    </>
  );
}
