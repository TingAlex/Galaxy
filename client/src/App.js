import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import picdemo from "./images/pic-1523703732839.jpg";
class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src="/images/backpic-1523706699805.jpg" />
      </div>;
  }
}

export default App;
