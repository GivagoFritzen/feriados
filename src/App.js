import React, { Component } from "react";
import "./App.css";
import { Resume, Detail } from "./components/";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Resume />
          <Detail />
        </header>
      </div>
    );
  }
}

export default App;
