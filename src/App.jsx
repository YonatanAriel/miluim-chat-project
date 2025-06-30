import { useState } from "react";
import UserList from "./components/userList/UserList";
import Chat from "./components/chat/Chat";
import styles from "./App.module.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("userList");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setCurrentScreen("chat");
  };

  return (
    <div className={styles.appConatiner}>
      {currentScreen === "userList" ? (
        <UserList onUserClick={handleUserSelect} />
      ) : (
        <Chat user={selectedUser} />
      )}
    </div>
  );
}

export default App;
