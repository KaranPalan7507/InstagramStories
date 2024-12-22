import { IUser } from "../../types";
import "./style.scss";
interface UserProps {
  user: IUser;
}
const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="user-item">
      <img
        src={user.thumbnail}
        alt={`${user.name} Thumbnail`}
        className="thumbnail-img"
      />
    </div>
  );
};

export default User;
