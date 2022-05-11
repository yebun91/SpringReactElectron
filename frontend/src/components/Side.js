import React, { useEffect, useState } from "react";
import style from "../styles/Side.module.css";
import ChatList from "./ChatList";

const Side = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }, []);
  return (
    <nav>
      사이드입니다.
      {message.map((v, idx) => (
        <ChatList name={v} key={idx} />
      ))}
    </nav>
  );
};

export default Side;
