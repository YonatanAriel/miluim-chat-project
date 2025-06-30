import { useEffect } from "react";
import styles from "./UserListItem.module.css";
import { getFormatTime } from "../utils/getFormatTime";

function UserListItem({ user }) {
  useEffect(() => {
    console.log(getFormatTime(user.lastMessageTime));
  }, []);
  return (
    <div className={styles.userListItemContainer}>
      <img
        src={user.profilePic}
        alt={user.name}
        className={styles.profilePic}
      />
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>{user.name}</h3>
      </div>
    </div>
  );
}
export default UserListItem;
