import React, { Component } from "react";
import "./styles.scss";
import details from "../../json/details.json";

class Detail extends Component {
  render() {
    return (
      <section className="detail">
        <h2 id="title">Explicação de cada Feriado</h2>
        <ul className="list-information">{this.getInformations()}</ul>
      </section>
    );
  }

  getInformations() {
    return details.map((information, index) => {
      return (
        <li
          className="information"
          key={index}
          dangerouslySetInnerHTML={{ __html: information }}
        />
      );
    });
  }
}

export default Detail;
