import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (event) => {
    const nextForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="입력해 아무거나"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
