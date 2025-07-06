import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import styles from "./hamburger.module.css";
import Menu from "../menu/Menu";

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        <RxHamburgerMenu size={20} />
      </button>

      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
    </>
  );
}

export default Hamburger;
