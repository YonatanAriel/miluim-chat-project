import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./BackButton.module.css";

function BackButton({ onClick }) {
  return (
    <button className={styles.backButton} onClick={onClick}>
      <IoMdArrowRoundBack />
    </button>
  );
}

export default BackButton;
