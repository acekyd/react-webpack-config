import React, { Component } from "react";
import { hot } from "react-hot-loader";
import './sass/app.scss';


class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div className="App">
        <h1>I'm configuring setting up Webpack today!!!</h1>

        <p>{`The count now is: ${this.state.counter}`}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default hot(module)(App);