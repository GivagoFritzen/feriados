import React, { Component, Fragment } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateState } from "../../../actions";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: "national",
    };
  }

  changeCurrentState = (e) => {
    this.setState({ currentState: e.target.value }, () =>
      this.props.updateState(this.state.currentState)
    );
  };

  render() {
    return (
      <select
        className="dropdown-select"
        name="county"
        id="county"
        onChange={this.changeCurrentState}
      >
        <option value="national">Nacional</option>
        <option value="acre">Acre</option>
        <option value="alagoas">Alagoas</option>
        <option value="amapa">Amapá</option>
        <option value="amazonas">Amazonas</option>
        <option value="bahia">Bahia</option>
        <option value="ceara">Ceará</option>
        <option value="distritoFederal">Distrito Federal</option>
        <option value="espiritoSanto">Espírito Santo</option>
        <option value="goias">Goiás</option>
        <option value="maranhao">Maranhão</option>
        <option value="matoGrosso">Mato Grosso</option>
        <option value="MatoGrossoDoSul">Mato Grosso do Sul</option>
        <option value="minasGerais">Minas Gerais</option>
        <option value="para">Pará</option>
        <option value="paraiba">Paraíba</option>
        <option value="parana">Paraná</option>
        <option value="pernambuco">Pernambuco</option>
        <option value="piaui">Piauí</option>
        <option value="rioDeJaneiro">Rio de Janeiro</option>
        <option value="rioGrandeDoNorte">Rio Grande do Norte</option>
        <option value="rioGrandeDoSul">Rio Grande do Sul</option>
        <option value="rondonia">Rondônia</option>
        <option value="roraima">Roraima</option>
        <option value="santaCatarina">Santa Catarina</option>
        <option value="saoPaulo">São Paulo</option>
        <option value="sergipe">Sergipe</option>
        <option value="tocantins">Tocantins</option>
      </select>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateState }, dispatch);

export default connect(null, mapDispatchToProps)(Dropdown);
