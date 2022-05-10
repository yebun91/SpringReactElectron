import React, { Component, useState } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// const Counter = () => {
//   const [number, setNumber] = useState(0);
//   const [fixedNumber, setFixedNumber] = useState(0);
//   const onClick = () => {
//     setNumber((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <h2>바뀌지 않는 값: {fixedNumber}</h2>
//       <button onClick={onClick}>+1</button>
//     </div>
//   );
// };

export default Counter;
