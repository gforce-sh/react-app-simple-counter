import React from "react";
import Button from "./Button.js";
import Display from "./Display.js";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.startCount };
    this.decrementCount = this.decrementCount.bind(this);
    this.newClass = "display";
  }

  incrementCount() {
    console.log("I was clicked");
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  decrementCount() {
    this.setState(state => ({ count: state.count - 1 }));
  }

  toggleClass() {
    return (this.newClass =
      this.state.count > 0 ? "display-positive" : "display-negative");
  }

  initialCount(value) {
    this.startValue = value;
  }

  render() {
    return (
      <div className="counter">
        <Display count={this.state.count} className={this.toggleClass()} />
        <Button
          className={"btn"}
          text="Increment"
          onClick={this.incrementCount.bind(this)}
        />
        <Button
          className={"btn"}
          text="Decrement"
          onClick={this.decrementCount}
        />
      </div>
    );
  }
}

export default Counter;
