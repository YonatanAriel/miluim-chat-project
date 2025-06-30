import { useState, useEffect } from "react";
import usersData from "../../data/users.json";
import UserListItem from "../userListItem/UserIistItem";
import styles from "./UserList.module.css";

function UserList({ onUserClick }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedTimes = JSON.parse(
      localStorage.getItem("lastMessageTimes") || "{}"
    );
    const updatedUsers = usersData.map((user) => ({
      ...user,
      lastMessageTime: savedTimes[user.id] || user.lastMessageTime,
    }));
    setUsers(updatedUsers);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>(: הצ'אט </h1>
      </div>
      <div className={styles.usersListContainer}>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} onClick={onUserClick} />
        ))}
      </div>
    </div>
  );
}
export default UserList;
