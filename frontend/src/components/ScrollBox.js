import React, { useRef, useState, Component } from "react";

// const ScrollBox = () => {
//   const scrollToBottom = () => {
//     const { scrollHeight, ClientHeight } = divRef;
//     divRef.scrollTop = scrollHeight - ClientHeight;
//   };
//   const divRef = useRef(null);
//   const style = {
//     border: "1px solid black",
//     height: "300px",
//     width: "300px",
//     overflow: "auto",
//     position: "relative",
//   };
//   const innerStyle = {
//     width: "100%",
//     height: "650px",
//     background: "linear-gradient(white, black)",
//   };
//   return (
//     <div style={style} ref={divRef}>
//       <div style={innerStyle}></div>
//     </div>
//   );
// };

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
