import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateYear } from "../../../actions";

class DropdownYears extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: new Date().getFullYear(),
    };
  }

  changeCurrentState = (e) => {
    this.setState({ currentState: e.target.value }, () =>
      this.props.updateYear(this.state.currentState)
    );
  };

  render() {
    return (
      <select className="dropdown-year" onChange={this.changeCurrentState}>
        {this.getYears()}
      </select>
    );
  }

  getYears() {
    const currentYear = new Date().getFullYear();

    var years = [];
    for (let index = currentYear; index < (currentYear + 100); index++) {
      years.push(<option key={index} value={index}>{index}</option>);
    }

    return years;
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateYear }, dispatch);

export default connect(null, mapDispatchToProps)(DropdownYears);
