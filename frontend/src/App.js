import "./styles/App.css";
import React, { useState, useEffect } from "react";
import ValidationSample from "./components/ValidationSample";

function App() {
  // const [value, setValue] = useState([]);
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setValue(data);
  //     });
  // }, []);
  return (
    <div>
      {/*<MyComponent name={value.name} age={value.age} gender={value.gender} />*/}
      <ValidationSample />
    </div>
  );
}

export default App;
