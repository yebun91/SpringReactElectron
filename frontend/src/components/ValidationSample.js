import React, {useState} from 'react';
import style from "../styles/ValidationSample.module.css"

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const onChange = e => {
    setPassword(e.target.value)
  }
  const onClick = () => {
    setClicked(true)
    setValidated(password === "0000");
  }
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={onChange}
        className={clicked ? (validated ? `${style.success}` : `${style.failure}`) : ""}
      />
      <button onClick={onClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;