import { IUser } from "../../types";
import "./style.scss";
import User from "./User";
interface UserListProps {
  users: IUser[];
}
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
