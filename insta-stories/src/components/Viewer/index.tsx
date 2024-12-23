import { useEffect } from "react";
import { useStoryData } from "../../StoryDataContext";
import "./style.scss";
interface ViewerProps {}
const Viewer: React.FC<ViewerProps> = ({}) => {
  const { selectedUser, selected, nextStory } = useStoryData();
  useEffect(() => {
    if (selectedUser) {
      const timer = setInterval(() => {
        nextStory();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [selectedUser]);

  return (
    selectedUser && (
      <div className="viewer-wrapper">
        <div className="viewer">
          <div className="user-info">
            <img
              src={selectedUser?.thumbnail}
              alt={`${selectedUser?.name} Thumbnail`}
              className="user-img"
            />
            <div>{selectedUser?.name}</div>
          </div>
          {selected !== null && (
            <div>
              <img
                src={selectedUser?.stories[selected].url}
                alt={`${selectedUser?.name} story ${selected}`}
                className="story-img"
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};
export default Viewer;
