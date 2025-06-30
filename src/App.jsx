import { useState } from "react";
import UserList from "./components/userList/UserList";
import Chat from "./components/chat/Chat";

function App() {
  const [currentScreen, setCurrentScreen] = useState("userList");

  return (
    <div className="app">
      {currentScreen === "userList" ? <UserList /> : <Chat />}
    </div>
  );
}

export default App;
