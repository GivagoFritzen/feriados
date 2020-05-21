import React, { Component } from "react";
import "./styles.scss";

class Dropdown extends Component {
  render() {
    return (
      <select className="dropdown-select" name="county" id="county">
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

export default Dropdown;
