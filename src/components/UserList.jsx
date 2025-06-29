import { useState } from "react";
import usersData from "../data/users.json";
import UserListItem from "./UserIistItem";

function UserList() {
  const [users, setUsers] = useState(usersData);

  return (
    <div>
      <div>
        <h1>צ'אט</h1>
      </div>
      <div>
        {users.map((user) => (
          <UserListItem key={user.id} user={userS} />
        ))}
      </div>
    </div>
  );
}
export default UserList;
