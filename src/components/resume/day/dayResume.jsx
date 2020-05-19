import React, { Component } from "react";
import "./styles.scss";

class DayResume extends Component {
  render() {
    return (
      <section className="day-resume">
        <header id="day-month">{this.props.date}</header>
        <div id="holiday">{this.props.name}</div>
        <footer id="day-of-week">{this.props.dayofweek}</footer>
      </section>
    );
  }
}

export default DayResume;
