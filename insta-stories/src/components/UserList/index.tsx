import { useStoryData } from "../../StoryDataContext";
import "./style.scss";
import User from "./User";
interface UserListProps {}
const UserList: React.FC<UserListProps> = () => {
  const { users } = useStoryData();

  return (
    <div className="user-list">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
