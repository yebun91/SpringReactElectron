import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { value: state.value + 1 };
    case "Decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "Increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-1</button>
    </div>
  );
};

export default Counter;
