import { createPortal } from "react-dom";
import styles from "./Menu.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function Menu({ toggleMenu }) {
  const [menuClass, setMenuClass] = useState(styles.menu);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuClass(`${styles.menu} ${styles.open}`);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setMenuClass(styles.menu);
    setTimeout(toggleMenu, 600);
  };

  return createPortal(
    <>
      <div className={styles.overlay} onClick={handleClose}></div>
      <div className={menuClass}>
        <div className={styles.menuHeader}>
          <button className={styles.closeButton} onClick={handleClose}>
            <IoCloseOutline />
          </button>
          <h3>תפריט</h3>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>הגדרות</div>
          <div className={styles.menuItem}>עזרה</div>
          <div className={styles.menuItem}>אודות</div>
          <div className={styles.menuItem}>התנתק</div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default Menu;
