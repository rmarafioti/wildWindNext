import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoArrowDown } from "react-icons/io5";

import styles from "@/styles/scrolltop.module.css";

/**
 *
 * @component ScrollField is passed into releaseforms.jsx nd will allow the user to scroll to the next field they need to fill out passed paragraphs of text if they would not like to read them
 */
export default function ScrollField() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll arrow when the user scrolls down 400px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400 && window.pageYOffset < 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <Link
          to="nextField"
          smooth={true}
          offset={-180}
          duration={800}
          className={styles.backTop}
        >
          <IoArrowDown className={styles.arrow} />
        </Link>
      )}
    </div>
  );
}
