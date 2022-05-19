import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { useParams } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id !== 0) {
      axios({
        method: "get",
        url: `/chat/${id}`,
        // params: { api_key: "1234", langualge: "en" }, // 파라미터를 전달
        responseType: "json",
        maxContentLength: 2000,
      }).then(function (response) {
        setMessages(response.data);
        console.log("messageData : ", response.data);
      });
    }
  }, [id]);

  return (
    <main>
      {messages.map((message) => (
        <Messages
          key={message.id}
          chat_room_id={message.chat_room_id}
          message={message.message}
          send_date={message.send_date}
        />
      ))}
    </main>
  );
};

export default Main;
