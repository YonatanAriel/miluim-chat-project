import styles from "./Chat.module.css";
import BackButton from "../backButton/BackButton";
import { useEffect, useRef, useState } from "react";
import Message from "../message/Message";
import MessageInput from "../messageInput/MessageInput";
import { scrollToBottom } from "../../utils/scrollToBottom";
import { getRandomMessage } from "../../utils/getRandomMessages";
import Hamburger from "../hamburger/hamburger";

function Chat({ handleBackButtonClick, user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesBottomRef = useRef(null);

  useEffect(() => {
    scrollToBottom(messagesBottomRef);
  }, [messages]);

  useEffect(() => {
    const LSMessages = localStorage.getItem(`chat_${user.id}`);
    if (LSMessages) setMessages(JSON.parse(LSMessages));
  }, [user.id]);

  const saveMessagesToLS = (updatedMessages) => {
    localStorage.setItem(`chat_${user.id}`, JSON.stringify(updatedMessages));
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: "me",
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveMessagesToLS(updatedMessages);
    setNewMessage("");

    const savedTimes = JSON.parse(
      localStorage.getItem("lastMessageTimes") || "{}"
    );
    savedTimes[user.id] = new Date().toISOString();
    localStorage.setItem("lastMessageTimes", JSON.stringify(savedTimes));

    const randomMessage = getRandomMessage();
    setTimeout(() => {
      const updatedMessages = [...messages, userMessage, randomMessage];
      setMessages(updatedMessages);
      saveMessagesToLS(updatedMessages);
    }, 1000 + Math.random() * 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton onClick={handleBackButtonClick} />
        <img
          src={user.profilePic}
          alt={user.name}
          className={styles.userProfilePic}
        />
        <h2>{user.name}</h2>
        <Hamburger />
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
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
