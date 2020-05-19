import React, { Component } from "react";
import "./styles.scss";
import DayResume from "./day/dayResume";
import GetDates from "../../utils/datesUtil";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div id="year-content">
          <h1 id="year">Feriados de {new Date().getFullYear()}</h1>
        </div>
        <div id="days">{this.getDaysResume()}</div>
      </div>
    );
  }

  getDaysResume() {
    return GetDates().map((element) => {
      return (
        <DayResume
          key={element.id}
          date={element.day}
          name={element.name}
          dayofweek={element["day-of-week"]}
        />
      );
    });
  }
}

export default Resume;
