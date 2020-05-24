import React, { Component } from "react";
import "./styles.scss";

class DayResume extends Component {
  render() {
    return (
      <section className="day-resume">
        <header className="day-month"><strong>{this.props.date}</strong></header>
        <div className="holiday">{this.props.name}</div>
        <footer className="day-of-week">{this.props.dayofweek}</footer>
      </section>
    );
  }
}

export default DayResume;
