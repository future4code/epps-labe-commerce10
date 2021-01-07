import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  border: solid 2px black;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
        <p>Total:</p>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;