import "./App.css";
import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import data from "./data.json";
import { IUser } from "./types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setUsers(data.users);
  }, []);

  return (
    <>
      <header className="header">
        <a href="./">
          <img src="./insta.png" className="logo insta" alt="Insta Logo" />
        </a>
      </header>
      <main>
        <div className="container">
          <UserList users={users} />
        </div>
      </main>
    </>
  );
}

export default App;
