import styles from "./Chat.module.css";
import BackButton from "../backButton/BackButton";
import { useEffect, useRef, useState } from "react";
import Message from "../message/Message";
import MessageInput from "../messageInput/MessageInput";
import { scrollToBottom } from "../../utils/scrollToBottom";

function Chat({ handleBackButtonClick }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesBottomRef = useRef(null);

  useEffect(() => {
    scrollToBottom(messagesBottomRef);
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: "me",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton onClick={handleBackButtonClick} />
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <Message message={message} />
        ))}
        <div ref={messagesBottomRef} />
      </div>
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}
export default Chat;
