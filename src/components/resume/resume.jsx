import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import DayResume from "./day/dayResume";
import Dropdown from "./dropdown/dropdown";
import GetDates from "../../utils/datesUtil";

class Resume extends Component {
  render() {
    const { currentState } = this.props;

    return (
      <div className="resume">
        <div id="year-content">
          <h1 id="year">Feriados de {new Date().getFullYear()}</h1>
          <h1>{currentState}</h1>
          <Dropdown />
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

const mapStateToProps = (store) => ({
  currentState: store.statesReducer.currentState,
});

export default connect(mapStateToProps)(Resume);
