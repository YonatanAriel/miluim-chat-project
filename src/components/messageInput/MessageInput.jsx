import styles from "./messageInput.module.css";
import { IoSend } from "react-icons/io5";

function MessageInput({ newMessage, setNewMessage, sendMessage }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.messageInput}
        type="text"
        value={newMessage}
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="הודעה חדשה"
      />
      <button className={styles.inputButton} onClick={sendMessage}>
        <IoSend size={20} color="white" />{" "}
      </button>
    </div>
  );
}
export default MessageInput;
