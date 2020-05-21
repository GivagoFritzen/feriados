import React, { Component } from "react";
import "./styles.scss";
import DayResume from "./day/dayResume";
import Dropdown from "./dropdown/dropdown";
import GetDates from "../../utils/datesUtil";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div id="year-content">
          <h1 id="year">Feriados de {new Date().getFullYear()}</h1>
          <Dropdown></Dropdown>
        </div>
        <div id="days">{this.getDaysResume()}</div>
      </div>
    );
  }

  getDaysResume() {
    return GetDates().map((element, index) => {
      return (
        <DayResume
          key={index}
          date={element.day}
          name={element.name}
          dayofweek={element["day-of-week"]}
        />
      );
    });
  }
}

export default Resume;
