import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
    children: "없을것",
    gender: "입력안함",
  };
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
  };

  render() {
    const { name, children, age, gender } = this.props;
    return (
      <div>
        내컴포넌트는 {name} {age}세 이다. <br />
        children 값은 {children}이다. <br />
        성별은 {gender}이다.
      </div>
    );
  }
}

// const MyComponent = ({ name, children, age, gender }) => {
//   return (
//     <div>
//       내컴포넌트는 {name} {age}세 이다. <br />
//       children 값은 {children}이다. <br />
//       성별은 {gender}이다.
//     </div>
//   );
// }

// MyComponent.defaultProps = {
//   name: "기본이름",
//   children: "없을것",
//   gender: "입력안함",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   gender: PropTypes.string,
// };

export default MyComponent;
