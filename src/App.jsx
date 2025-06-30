import { useState } from "react";
import UserList from "./components/userList/UserList";
import Chat from "./components/chat/Chat";
import styles from "./App.module.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("userList");

  return (
    <div className={styles.appConatiner}>
      {currentScreen === "userList" ? <UserList /> : <Chat />}
    </div>
  );
}

export default App;
