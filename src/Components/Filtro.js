import React from "react";
import styled from "styled-components";

const FilterBox = styled.div`


`;

const Input = styled.input`
height: 35px;
margin:0 30px 0 5px;
width: 100%;
`;

const H2 = styled.h2`
display: flex;
justify-content: center;
padding-bottom: 15px;
font-size: 2em;
font-weight: 600;
margin: 0;
`;

const Form = styled.form`
display: flex;
justify-content: space-between;
padding-bottom: 15px;
`;

class Filtro extends React.Component {
  render() {
    return (
      <FilterBox>

      <H2>Crazy Shirts</H2>

      <Form>
      
        <label>Valor Mínimo:</label>
        <Input type="number" onChange="" placeholder="R$ 00,00" />
        <label>Valor Máximo:</label>
        <Input type="number" onChange="" placeholder="R$ 00,00" />
        <label>Buscar Produto:</label>
        <Input type="text" onChange="" placeholder="Digite o nome do produto" />
      </Form>
    </FilterBox>
    )
  }
}

export default Filtro