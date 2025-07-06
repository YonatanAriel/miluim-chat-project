import { useState, useEffect } from "react";
import usersData from "../../data/users.json";
import UserListItem from "../userListItem/UserIistItem";
import styles from "./UserList.module.css";
import Hamburger from "../hamburger/hamburger";
import { getUpdatedUsers } from "../../utils/getUpdatedUsers";

function UserList({ onUserClick }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const updatedUsers = getUpdatedUsers(usersData);
    setUsers(updatedUsers);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>(: הצ'אט </h1>
        <Hamburger />
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
