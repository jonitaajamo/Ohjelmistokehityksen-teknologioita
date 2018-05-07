import React, {Component} from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  add = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  subtract = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  };

  reset = () => {
    this.setState(() => {
      return {counter: 0};
    });
  };

  render() {
    return (
      <div className="box">
        <div className="title">Counter</div>
        <h2>Counter:</h2>
        <div>{this.state.counter}</div>
        <button className="button is-success" onClick={this.add}>
          +
        </button>
        <button className="button is-danger" onClick={this.subtract}>
          -
        </button>
        <button className="button" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}

export default Counter;
