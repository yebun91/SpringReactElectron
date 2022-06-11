import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html { 
  :root{
    /* color */
    --background-color: #f7f7f7;
    --white-color: #ffffff;
    --black-color: #1b1b1b;
    --ligth-gray-color: #dfdde1;
    --dark-gray-color: #484857;
    --gray-color: #737089;
    --pink-color: #ff0055;
    --yellow-color: #ffd528;
    --red-color: #d50000;
    --green-color : #4bcd1b;
    --dark-green-color : #263823;
    --dark-red-color : #472b29;
    --dark-yellow-color : #454429;
    /* font size */
    --font-big: 48px;
    --font-large: 34px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 14px;
    --font-micro: 12px;
    /* font weight */
    --weight-bold: 700;
    --weight-semi-bold: 500;
    --weight-regular: 400;
    --weight-light: 300;
  }
  body { 
    padding : 0;
    margin: 0;
    box-sizing: border-box;
    font-family:'Noto Sans KR';
    #root { 
      position: fixed;
      width: 100%;
    }; 
    button{
      cursor: pointer;
      border:none; 
      box-shadow:none; 
      padding:0;
      border-radius: 5px;
      background: var(--white-color);
      padding: 10px 15px;
      font-weight: var(--weight-bold);
      &:hover{
        background: var(--ligth-gray-color);
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset;
      }
    };
    input{
      outline: none;
      border-radius: 5px;
      border: none;
      padding: 10px 10px;
      padding-left: 10px;
      width: 35px;
    };
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    };
    h1,h2,h3,h4,p{
      margin: 0;
      padding: 0;
    }
    .fill_button{
      background-color: var(--gray-color);
      color: var(--white-color);
      &:hover {
        background: var(--ligth-gray-color);
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset;
        color: var(--black-color);
      }
    }
    .nomal_button{
      border: 1px solid var(--ligth-gray-color);
    }
    .display_none {
      display: none;
    }
  };
  
}`;
