import React, { useEffect, useState } from "react";
import Home from "./Home";
import Messages from "./Messages";

const Main = ({ messageId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messageId !== 0) {
      fetch(`/chat?id=${messageId}`, {
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
          setMessages(data);
          console.log("messageData : ", data);
        });
    }
  }, [messageId]);

  return (
    <main>
      {messageId === 0 ? (
        <Home />
      ) : (
        messages.map((message) => (
          <Messages
            key={message.id}
            name={message.name}
            message={message.message}
            date={message.date}
          />
        ))
      )}
    </main>
  );
};

export default Main;
