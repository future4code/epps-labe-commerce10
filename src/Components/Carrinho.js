import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`

width: 300px;
height: 600px;
border: 1px solid black;
padding: 16px;

`;

class Carrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        <h1>Carrinho:</h1>
        {this.props.produto.map((element) => {
          return (
            <p>
              {''}
              {element.name}: {element.value}
            </p>
          );
        })}
        <p>
          Total: <strong>R$ {this.props.total}</strong>
        </p>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
