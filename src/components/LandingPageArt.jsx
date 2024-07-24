import Image from "next/image";
import { TfiFaceSmile } from "react-icons/tfi";

import styles from "@/styles/landingpageart.module.css";

export default function LandingPageArt() {
  return (
    <>
      <section className={styles.artContainer}>
        <TfiFaceSmile className={styles.smile} />

        <div className={styles.boxRow}>
          <div className={styles.boxLine} id={styles.boxColor}></div>
          <div className={styles.boxLine}></div>
          <div className={styles.boxLine} id={styles.boxColor}></div>
          <div className={styles.boxLine}></div>
          <div className={styles.boxLine} id={styles.boxColor}></div>
          <div className={styles.boxLine}></div>
          <div className={styles.boxLine} id={styles.boxColor}></div>
        </div>

        <div className={styles.line}></div>
        <div className={styles.artOne}>
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
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
              <div className={styles.checker} id={styles.lightCheck}></div>
              <div className={styles.checker}></div>
            </div>
          </div>
        </div>
        <div className={styles.artTwo}>
          <div className={styles.artTwoElementOne}>
            <Image
              className={styles.pineapple}
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1721822973/wildWindSite/pineapple_tsulyz.png"
              alt="photo of a pineapple"
              priority
              quality={75}
              width={1149}
              height={2020}
              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/*<div className={styles.square}></div>*/}
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
          <div className={styles.circle}></div>
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
