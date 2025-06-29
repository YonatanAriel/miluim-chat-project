import styles from "./UserListItem.module.css";

function UserListItem({ user }) {
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
