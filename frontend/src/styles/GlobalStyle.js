import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html { 
  height: 100%; 
  body { 
    padding : 0;
    margin: 0;
    #root { 
      display: flex; 
      font-family: sans-serif; 
      height: 100%; 
      justify-content: center; 
      padding: 15px; 
    }; 
  };
  button{
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
  };
  input{
    display: flex;
    outline: none;
    padding-left: 10px;
  };
`;
