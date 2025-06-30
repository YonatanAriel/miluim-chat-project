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

  const handleBackButtonClick = () => {
    setCurrentScreen("userList");
    setSelectedUser(null);
  };

  return (
    <div className={styles.appConatiner}>
      {currentScreen === "userList" ? (
        <UserList onUserClick={handleUserSelect} />
      ) : (
        <Chat
          user={selectedUser}
          handleBackButtonClick={handleBackButtonClick}
        />
      )}
    </div>
  );
}

export default App;
