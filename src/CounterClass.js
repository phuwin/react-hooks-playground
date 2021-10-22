import React, { Component } from "react";
import { Context } from './App';
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <Context.Consumer>
        {({ countContext, setCountContext }) => (
          <div>
            <h1>Counter</h1>
            <p>Count Context:{countContext}</p>
            <p>{this.state.count}</p>
            <button onClick={this.incrementCount} >Increment</button>
            <button onClick={() => { setCountContext(countContext + 1) }}>
              Increment context
            </button>
          </div>
        )}
      </Context.Consumer>
    );
  }
}