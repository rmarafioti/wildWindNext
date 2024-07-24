import Image from "next/image";

import styles from "@/styles/landingpageart.module.css";

export default function LandingPageArt() {
  return (
    <>
      <section className={styles.artContainer}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
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
          <div className={styles.artTwoElementOne}></div>
          <div className={styles.square}></div>
          <div className={styles.artTwoElementTwo}>
            <Image
              className={styles.squiggle}
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1721793174/wildWindSite/squiggle_mam01t.png"
              alt="illustration of a squiggle line"
              priority
              quality={75}
              width={1588}
              height={641}
              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              className={styles.squiggleTwo}
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1721793174/wildWindSite/squiggle_mam01t.png"
              alt="illustration of a squiggle line"
              priority
              quality={75}
              width={1588}
              height={641}
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
    </>
  );
}
