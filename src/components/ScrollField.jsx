import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoArrowDown } from "react-icons/io5";

import styles from "@/styles/scrolltop.module.css";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 1000px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
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
