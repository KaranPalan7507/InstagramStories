import "./App.scss";
import UserList from "./components/UserList";
import { useEffect } from "react";
import Viewer from "./components/Viewer";
import { useStoryData } from "./StoryDataContext";

function App() {
  const { getData, loading } = useStoryData();
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className="header">
        <a href="./">
          <img src="./insta.png" className="logo insta" alt="Insta Logo" />
        </a>
      </header>
      <main>
        {loading ? (
          <div>loading</div>
        ) : (
          <div className="container">
            <UserList />
            <Viewer />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
