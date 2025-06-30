import styles from "./messageInput.module.css";

function MessageInput({ newMessage, setNewMessage, sendMessage }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.messageInput}
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="הודעה חדשה"
      />
      <button className={styles.inputButton} onClick={sendMessage}>
        שלח
      </button>
    </div>
  );
}
export default MessageInput;
