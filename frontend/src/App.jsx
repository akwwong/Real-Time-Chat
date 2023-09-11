import { useState } from "react";

import "./App.css";
import Auth from "./auth";
import Chats from "./chats";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Auth onAuth={(user) => setUser(user)} />;
  } else {
    return <Chats user={user} />;
  }
}

export default App;