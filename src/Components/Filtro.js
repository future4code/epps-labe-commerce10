import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`

height:100%;
`;
const Input = styled.input`
  height: 35px;
  width: 100%;
`;

class Filtro extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <fieldset>
          <h1>Filtros:</h1>
          <label for="minimo">Valor mínimo</label>
          <Input
            onChange={this.props.inputValorMin}
            name="minimo"
            type="number"
          />
          <label for="maximo">Valor máximo</label>
          <Input
            onChange={this.props.inputValorMax}
            name="maximo"
            type="number"
          />
          <label for="buscar">Buscar Produto</label>
          <Input onChange={this.props.inputBuscar} name="buscar" type="text" />
        </fieldset>
      </ContainerFiltro>
    );
  }
}

export default Filtro;
