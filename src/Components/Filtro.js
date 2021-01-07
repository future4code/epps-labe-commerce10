import React from "react";
import styled from "styled-components";

const FilterBox = styled.div`
  margin: 1vw;
  padding-left: 2vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 25vw;
`;

const Input = styled.input`
  display: flex;
  margin-bottom: 1vh;
  width: 75%;
`;

class Filtro extends React.Component {
  render() {
    return (
      <FilterBox>
      <h2>Filtro:</h2>

      <label>Valor Mínimo:</label>
      <Input type="number" onChange="" />
      <label>Valor Máximo:</label>
      <Input type="number" onChange="" />
      <label>Buscar Produto:</label>
      <Input type="text" onChange="" />
    </FilterBox>
    )
  }
}

export default Filtro
