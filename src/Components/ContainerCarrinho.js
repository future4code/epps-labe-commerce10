import React from "react";
import styled from "styled-components";

const Carrinho = styled.div`
background-color: #fff;
min-height: 100vh;
padding: 50px;

position: fixed;
right: 0;
top: 0;
`

const H3 = styled.h3`
margin-bottom: 20px;
`

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