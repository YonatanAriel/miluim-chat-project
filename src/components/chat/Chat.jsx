import styles from "./Chat.module.css";
import BackButton from "../backButton/BackButton";
import { useState } from "react";
import Message from "../message/Message";

function Chat({ handleBackButtonClick }) {
  const [messages, setMessages] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton onClick={handleBackButtonClick} />
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <Message message={message} />
        ))}
        <div />
      </div>
    </div>
  );
}
export default Chat;
