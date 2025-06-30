import styles from "./Message.module.css";

function Message({ message }) {
  const formattedTime = new Date(message.timestamp).toLocaleTimeString(
    "he-IL",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <div
      className={`${styles.message} ${
        message.sender === "me" ? styles.sent : styles.received
      }`}
    >
      <div className={styles.messageBubble}>{message.text}</div>
      <div className={styles.messageTime}>{formattedTime}</div>
    </div>
  );
}
export default Message;
