import { useMemo } from "react";
import styles from "./UserListItem.module.css";
import { getFormatTime } from "../../utils/getFormatTime";

function UserListItem({ user, onClick }) {
  const formattedTime = useMemo(
    () => getFormatTime(user.lastMessageTime),
    [user.lastMessageTime]
  );

  return (
    <div className={styles.userListItemContainer} onClick={() => onClick(user)}>
      <img
        src={user.profilePic}
        alt={user.name}
        className={styles.profilePic}
      />
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>
          {user.name}
          {user.messageCount > 0 && ` (${user.messageCount})`}
        </h3>
        <span className={styles.lastMessageTime}>{formattedTime}</span>
      </div>
    </div>
  );
}
export default UserListItem;
