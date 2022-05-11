import React from "react";

const CreateRef = () => {
  const input = React.createRef();
  const focus = () => {
    input.current.focus();
  };
  return (
    <div>
      <input ref={input} />
    </div>
  );
};

export default CreateRef;
