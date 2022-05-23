import React from "react";
import logo from "../assets/logo/logo_unisem.png";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const Head = () => {
  return (
    <Nav>
      <div>
        <img src={logo} alt="Unisem" />
      </div>
      <div>
        <div>
          <div>
            <h2>30</h2>
            <h3>신호위반</h3>
          </div>
          <div>
            <h2>00</h2>
            <h3>속도위반</h3>
          </div>
          <div>
            <h2>00</h2>
            <h3>보도주행</h3>
          </div>
          <div>
            <h2>14</h2>
            <h3>불법유턴</h3>
          </div>
          <div>
            <h2>255</h2>
            <h3>이륜차신호위반</h3>
          </div>
          <div>
            <h2>00</h2>
            <h3>이륜차속도위반</h3>
          </div>
          <div>
            <h2>287</h2>
            <h3>차로이용위반</h3>
          </div>
          <div>
            <h2>12</h2>
            <h3>헬멧 미착용</h3>
          </div>
          <div>
            <h2>11</h2>
            <h3>우회전</h3>
          </div>
        </div>
        <div>
          <div>
            <h2>LOCAL</h2>
            <h3>오전 09:00:00</h3>
          </div>
          <div>
            <h2>NTP</h2>
            <h3>오전 09:00:00</h3>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Head;
