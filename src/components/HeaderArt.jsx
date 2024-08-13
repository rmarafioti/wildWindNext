import React from 'react';
import styles from "@/styles/headerart.module.css";

const HeaderArt = () => {
  const dotRows = Array(5).fill(null);
  const dots = Array(7).fill(null);

  return (
    <>
      <div className={styles.artOneElementOne}>
        {dotRows.map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className={styles.dotRow}>
            {dots.map((_, dotIndex) => (
              <div key={`dot-${rowIndex}-${dotIndex}`} className={styles.dot}></div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default HeaderArt;