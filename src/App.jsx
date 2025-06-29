import { useState } from "react";
import UserList from "./components/UserList";
import Chat from "./components/Chat";

function App() {
  const [currentScreen, setCurrentScreen] = useState("userList");

  return (
    <div className="app">
      {currentScreen === "userList" ? <UserList /> : <Chat />}
    </div>
  );
}

export default App;
