import React from "react";
import Main from "./components/Main";
import Side from "./components/Side";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Side />
      <Main />
    </div>
  );
};

export default App;
