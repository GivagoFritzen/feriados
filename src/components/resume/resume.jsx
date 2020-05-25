import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import DayResume from "./day/dayResume";
import DropdownStates from "./dropdownStates/dropdownStates";
import DropdownYears from "./dropdownYears/dropdownYears";
import GetDates from "../../utils/datesUtil";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <label id="year-content">
          <h1 id="year">
            Feriados de <DropdownYears />
          </h1>
          <DropdownStates />
        </label>
        <div id="days">{this.getDaysResume()}</div>
      </div>
    );
  }

  getDaysResume() {
    const { currentState, currentYear } = this.props;

    return GetDates(currentState, currentYear).map((element, index) => {
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
  currentYear: store.yearReducer.currentYear,
});

export default connect(mapStateToProps)(Resume);
