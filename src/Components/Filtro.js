import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
display: flex;
padding-right: 15px;
padding-top: 30px;
height:100%;
width: 100%;

`;

const FilterBox = styled.div`
padding-bottom: 15px;
height: 35px;
width: 100%;

`;

const Input = styled.input`
height: 35px;
margin:0 30px 0 5px;
width: 100%;
border-radius: 4px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
`;

const H1 = styled.h1`
display: flex;
justify-content: center;
padding-bottom: 15px;
font-size: 2em;
font-family: Andale Mono, monospace;
font-weight: 600;
margin: 0;
`;

const H2 = styled.h2`
display: flex;
justify-content: center;
padding-top: 8vh;
padding-bottom: 1vh;
font-weight: 600;
margin: 0;
`;

const Label = styled.form`
display: flex;
justify-content: center;

`;

class Filtro extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <FilterBox>
          <H1>Crazy Shirts</H1>
          <H2>Filtrar</H2>
          <Label for="minimo">Valor mínimo</Label>
          <Input
            onChange={this.props.inputValorMin}
            name="minimo"
            type="number"
          />
          <Label for="maximo">Valor máximo</Label>
          <Input
            onChange={this.props.inputValorMax}
            name="maximo"
            type="number"
          />
          <Label for="buscar">Buscar Produto</Label>
          <Input onChange={this.props.inputBuscar} name="buscar" type="text" />
        </FilterBox>
      </ContainerFiltro>
    );
  }
}
export default Filtro;



