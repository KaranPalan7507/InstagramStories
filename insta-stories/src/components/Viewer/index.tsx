import { useEffect, useRef } from "react";
import { useStoryData } from "../../StoryDataContext";
import "./style.scss";
interface ViewerProps {}
const Viewer: React.FC<ViewerProps> = ({}) => {
  const { selectedUser, selected, nextStory, prevStory, closeViewer } =
    useStoryData();
  const timerRef = useRef<any>(null);
  useEffect(() => {
    if (selectedUser !== null && selected !== null) {
      timerRef.current = setTimeout(() => {
        nextStory();
      }, 5000);
    } else {
      clearTimeout(timerRef.current);
    }
    return () => clearTimeout(timerRef.current);
  }, [selectedUser, selected]);

  return (
    selectedUser && (
      <div className="viewer-wrapper">
        <div className="viewer">
          <div className="indicator-list">
            {selectedUser?.stories?.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`story-indicatory ${
                    selected && index < selected
                      ? "active"
                      : selected === index
                      ? "current"
                      : ""
                  }`}
                ></div>
              );
            })}
          </div>
          <div className="user-info">
            <div className="user-info-content">
              <img
                src={selectedUser?.thumbnail}
                alt={`${selectedUser?.name} Thumbnail`}
                className="user-img"
              />
              <div>{selectedUser?.name}</div>
            </div>
            <div className="close" onClick={closeViewer}></div>
          </div>
          {selected !== null && (
            <div className="viewer-img-wrapper">
              <div
                className="nav prev"
                onClick={() => {
                  prevStory();
                  clearTimeout(timerRef.current);
                }}
              ></div>
              <div className="img-container">
                <img
                  src={selectedUser?.stories[selected].url}
                  alt={`${selectedUser?.name} story ${selected}`}
                  className="story-img"
                />
              </div>
              <div
                className="nav next"
                onClick={() => {
                  nextStory();
                  clearTimeout(timerRef.current);
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    )
  );
};
export default Viewer;
