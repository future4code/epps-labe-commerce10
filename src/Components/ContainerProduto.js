import React from "react";
import styled from "styled-components";

const ContainerProduto = styled.div`
  border: dashed orange 1px;
  font-size:larger;
  height: 75%;
`;
const Imagem = styled.img`
  height: 70%;
  width: 100%;
`;
const P = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold
`;
const Butao = styled.button`
  background-color: white;
  border-color: #004abe;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
  color: #004abe;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 5px ;
  width:100%;
  display:flex;
  justify-content:center;
  &:hover {
    background: #e9f0f7;
    transition: all .4s ease-in-out;
  }
`;

class Produto extends React.Component {
  render() {
    return (
      <ContainerProduto>
        <Imagem src={this.props.lista.imageUrl} alt={"imageUrl"} />
        <P>{this.props.lista.name}</P>
        <P>R$ {this.props.lista.value}</P>
        <Butao onClick={this.props.adicionarCarrinho}>
          Adicionar ao carrinho
        </Butao>
      </ContainerProduto>
    );
  }
}
export default Produto;