import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import ChatList from "./components/ChatList";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";

const App = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/chat-list",
      // params: { api_key: "1234", langualge: "en" }, // 파라미터를 전달
      responseType: "json",
      maxContentLength: 2000,
    }).then(function (response) {
      setChats(response.data);
      console.log("memberData : ", response.data);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        {chats.map((chat) => {
          const url = `/chat/${chat.id}`;
          return (
            <Link
              key={chat.id}
              to={{
                pathname: url,
              }}
            >
              <div>
                <ChatList name={chat.name} />
              </div>
            </Link>
          );
        })}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
