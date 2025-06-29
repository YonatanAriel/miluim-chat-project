import { useState } from "react";
import usersData from "../data/users.json";
import UserListItem from "./UserIistItem";
import styles from "./UserList.module.css";

function UserList() {
  const [users, setUsers] = useState(usersData);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>צ'אט</h1>
      </div>
      <div className={styles.usersListContainer}>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
export default UserList;
