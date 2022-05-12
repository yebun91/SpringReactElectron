import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import ChatList from "./components/ChatList";
import "./styles/App.css";
import Button from "@mui/material/Button";

const App = () => {
  const [member, setMember] = useState([]);
  const [messageId, setMessageId] = useState(0);

  useEffect(() => {
    fetch("/hello", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body:JSON.stringify({
      //   name:'어쩌구',
      //   age:20
      // }),
      credentials: "same-origin",
      redirect: "follow",
      referrer: "no-referrer",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMember(data);
        console.log("memberData : ", data);
      });
  }, []);

  const onClick = (id) => {
    setMessageId(id);
  };

  return (
    <div className="App">
      <nav>
        {member.map((member) => (
          <div key={member.id} onClick={() => onClick(member.id)}>
            <ChatList
              name={member.name}
              age={member.age}
              servant={member.servant}
              hobby={member.hobby}
            />
          </div>
        ))}
      </nav>
      <Main messageId={messageId} />
    </div>
  );
};

export default App;
