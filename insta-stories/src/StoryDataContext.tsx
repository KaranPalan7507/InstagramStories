import React, { createContext, useContext, useState } from "react";
import data from "./data.json";
import { IUser } from "./types";

const StoryDataContext = createContext({
  getData: () => {},
  loading: true,
  users: [] as IUser[],
  storyClick: (user: IUser) => {
    console.log(user);
  },
  selectedUser: null as IUser | null,
  selected: null as number | null,
  nextStory: () => {},
  prevStory: () => {},
  closeViewer: () => {},
});
export function StoryDataProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setUsers(data.users);
  };
  const storyClick = (user: IUser) => {
    setSelectedUser(user);
    setSelected(0);
  };
  const nextStory = () => {
    setSelected((prev) => {
      let newSelected = (prev || 0) + 1;
      if (newSelected > (selectedUser?.stories?.length || 0) - 1) {
        const currUserIndex = users.findIndex(
          (user) => user.id === selectedUser?.id
        );
        setSelectedUser(
          currUserIndex < users.length - 1 ? users[currUserIndex + 1] : null
        );
        newSelected = 0;
      }

      return newSelected;
    });
  };
  const prevStory = () => {
    setSelected((prev) => {
      let newSelected = (prev || 0) - 1;
      if (newSelected < 0) {
        const currUserIndex = users.findIndex(
          (user) => user.id === selectedUser?.id
        );
        setSelectedUser(currUserIndex >= 0 ? users[currUserIndex - 1] : null);
        newSelected = 0;
      }

      return newSelected;
    });
  };
  const closeViewer = () => {
    setSelectedUser(null);
    setSelected(null);
  };

  return (
    <StoryDataContext.Provider
      value={{
        getData,
        loading,
        users,
        storyClick,
        selectedUser,
        selected,
        nextStory,
        prevStory,
        closeViewer,
      }}
    >
      {children}
    </StoryDataContext.Provider>
  );
}
export function useStoryData() {
  return useContext(StoryDataContext);
}
