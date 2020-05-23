import React, { Component, Fragment } from "react";
import "./App.css";
import { Resume, Detail } from "./components/";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Resume />
        <Detail />
      </Fragment>
    );
  }
}

export default App;
