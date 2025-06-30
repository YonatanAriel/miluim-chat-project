import styles from "./Chat.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";

function Chat({ handleBackButtonClick }) {
  const [messages, setMessages] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={handleBackButtonClick}>
          <IoMdArrowRoundBack />
        </button>
      </div>
    </div>
  );
}
export default Chat;
