import { useStoryData } from "../../StoryDataContext";
import { IUser } from "../../types";
import "./style.scss";
interface UserProps {
  user: IUser;
}
const User: React.FC<UserProps> = ({ user }) => {
  const { storyClick } = useStoryData();

  return (
    <div className="user-item" onClick={() => storyClick(user)}>
      <img
        src={user.thumbnail}
        alt={`${user.name} Thumbnail`}
        className="thumbnail-img"
      />
    </div>
  );
};

export default User;
