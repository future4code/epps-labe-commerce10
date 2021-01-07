import React from "react";
import ContainerProduto from "./Components/ContainerProduto";
import BotaoCarrinho from "./Components/BotaoCarrinho";
import Carrinho from "./Components/ContainerCarrinho";
import Filtro from "./Components/Filtro";
import Camisa1 from "./img/camisa1.jpg";
import Camisa2 from "./img/camisa2.jpg";
import Camisa3 from "./img/camisa3.jpg";
import Camisa4 from "./img/camisa4.jpg";
import Camisa5 from "./img/camisa5.jpg";
import Camisa6 from "./img/camisa6.jpg";
import Camisa7 from "./img/camisa7.jpg";
import Camisa8 from "./img/camisa8.jpg";
import styled from "styled-components";

const ShopContainer = styled.div`
`;
export default class App extends React.Component {
  state = {
    carrinhoClick: false,
    listaDeProdutos: [
      {
        id: 1,
        name: "TESTE 1",
        value: 10,
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        name: "TESTE 2",
        value: 500.0,
        imageUrl: Camisa2,
      },
      {
        id: 3,
        name: "TESTE 3",
        value: 20,
        imageUrl: Camisa3,
      },
      {
        id: 4,
        name: "TESTE 4",
        value: 30,
        imageUrl: Camisa4,
      },
      {
        id: 5,
        name: "TESTE 5",
        value: 40,
        imageUrl: Camisa5,
      },
      {
        id: 6,
        name: "TESTE 6",
        value: 40,
        imageUrl: Camisa6,
      },
      {
        id: 7,
        name: "TESTE 7",
        value: 50,
        imageUrl: Camisa7,
      },
      {
        id: 8,
        name: "TESTE 8",
        value: 60,
        imageUrl: Camisa8,
      },
    ],
    carrinhoClick: false,
  };
  onClickCarrinho = () => {
    this.setState({
      carrinhoClick: !this.state.carrinhoClick,
    });
  };
  render() {
    const produtos = this.state.listaDeProdutos.map((produtos) => {
      return (
        <ContainerProduto
          name={produtos.name}
          value={produtos.value}
          imageUrl={produtos.imageUrl}
        />
      );
    });
    const carrinhoClicado = this.state.carrinhoClick;
    if (!carrinhoClicado) {
      return (
        <ShopContainer>
          <Filtro />
          <div onChange={this.onChangeCarrinho}>{produtos}</div>
          <BotaoCarrinho onClickIcone={this.onClickCarrinho} />
        </ShopContainer>
      );
    } else {
      return (
        <ShopContainer>
          <Filtro />
          <div onChange={this.onChangeCarrinho}>{produtos}</div>
          <Carrinho />
          <BotaoCarrinho onClickIcone={this.onClickCarrinho} />
        </ShopContainer>
      );
    }
  }
}