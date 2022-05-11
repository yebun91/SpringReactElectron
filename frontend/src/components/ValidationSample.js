import React, { useState, useRef } from "react";
import style from "../styles/ValidationSample.module.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const input = useRef();

  const onChange = (e) => {
    setPassword(e.target.value);
  };
  const onClick = () => {
    setClicked(true);
    setValidated(password === "0000");
    input.current.focus();
  };
  return (
    <div>
      <input
        ref={input}
        type="password"
        value={password}
        onChange={onChange}
        className={
          clicked ? (validated ? `${style.success}` : `${style.failure}`) : ""
        }
      />
      <button onClick={onClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
