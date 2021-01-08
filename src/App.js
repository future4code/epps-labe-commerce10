import React from "react";
import styled from "styled-components";
import Produto from "./Components/ContainerProduto";
import Filtro from "./Components/Filtro";
import Carrinho from "./Components/Carrinho";
import Camisa1 from "./img/camisa1.jpg";
import Camisa2 from "./img/camisa2.jpg";
import Camisa3 from "./img/camisa3.jpg";
import Camisa4 from "./img/camisa4.jpg";
import Camisa5 from "./img/camisa5.jpg";
import Camisa6 from "./img/camisa6.jpg";
import Camisa7 from "./img/camisa7.jpg";
import Camisa8 from "./img/camisa8.jpg";

const Principal = styled.div`
  display: flex;
`;

const ContainerDeProdutos = styled.section`
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-bottom: 8px;
`;

const ContainerMeio = styled.div`
  margin: 10px;
`;

const BotaoCarrinho = styled.div`
  background-color: #ffffff;
  box-shadow: black 0px 0px 5px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`;
const Icone = styled.img`
  height: 50px;
`;

class App extends React.Component {
  state = {
    componenteCarrinho: false,
    valueMinimo: "",
    valueMaximo: "",
    buscar: "",
    arrayCarrinho: [],
    inputCrescente: "Crescente",
    valueTotal: "",

    ListaProdutos: [
      {
        id: 1,
        name: "Teste 1",
        value: 15.0,
        imageUrl: Camisa1,
      },
      {
        id: 2,
        name: "Teste 2",
        value: 35.0,
        imageUrl: Camisa2,
      },
      {
        id: 3,
        name: "Teste 3",
        value: 25.0,
        imageUrl: Camisa3,
      },
      {
        id: 4,
        name: "Teste 4",
        value: 20.0,
        imageUrl: Camisa4,
      },
      {
        id: 5,
        name: "Teste 5",
        value: 40.0,
        imageUrl: Camisa5,
      },
      {
        id: 6,
        name: "Teste 6",
        value: 60.0,
        imageUrl: Camisa6,
      },
      {
        id: 7,
        name: "Teste 7",
        value: 45.0,
        imageUrl: Camisa7,
      },
      {
        id: 8,
        name: "Teste 8",
        value: 80.0,
        imageUrl: Camisa8,
      },
    ],
  };

  renderizaCarrinho = () => {
    this.setState({ componenteCarrinho: !this.state.componenteCarrinho });
  };

  onChangeMinimo = (event) => {
    this.setState({ valueMinimo: event.target.value });
  };

  onChangeMaximo = (event) => {
    this.setState({ valueMaximo: event.target.value });
  };

  funcaoProcurar = (event) => {
    this.setState({ buscar: event.target.value });
  };

  adicionarCarrinho = (id) => {
    const adiciona = this.state.ListaProdutos.forEach((item) => {
      if (id === item.id) {
        this.state.arrayCarrinho.push(item);
      }
    });

    let soma = this.state.arrayCarrinho.reduce(
      (valorAnterior, numero) => valorAnterior + numero.value,
      0
    );

    this.setState({ valueTotal: soma });
  };

  //Tentativa de deletar do carrinho

  // DeletarCarrinho = (id) => {
  //   let lista = [...this.state.arrayCarrinho]
  //   let product = this.state.arrayCarrinho.findIndex((product)=>product.id === id)
  //   lista.splice(product,1)
  //   this.setState({arrayCarrinho:lista})
  // }

  onChangeCrecente = (event) => {
    this.setState({ inputCrescente: event.target.value });
    switch (this.state.inputCrescente) {
      case "Crescente":
        return this.setState({
          ListaProdutos: this.state.ListaProdutos.sort(function (a, b) {
            return b.value - a.value;
          }),
        });
      case "Decrescente":
        return this.setState({
          ListaProdutos: this.state.ListaProdutos.sort(function (a, b) {
            return a.value - b.value;
          }),
        });
      default:
        return true;
    }
  };

  render() {
    let listaFiltrada = this.state.ListaProdutos;
    if (this.state.valueMinimo !== "") {
      listaFiltrada = listaFiltrada.filter((element) => {
        return element.value >= this.state.valueMinimo ? true : false;
      });
    }
    if (this.state.valueMaximo !== "") {
      listaFiltrada = listaFiltrada.filter((element) => {
        return element.value <= this.state.valueMaximo ? true : false;
      });
    }
    if (this.state.buscar !== "") {
      listaFiltrada = listaFiltrada.filter((element) => {
        return element.name
          .toLowerCase()
          .includes(this.state.buscar.toLowerCase())
          ? true
          : false;
      });
    }

    return (
      <Principal>
        <Filtro
          inputValorMin={this.onChangeMinimo}
          inputValorMax={this.onChangeMaximo}
          inputBuscar={this.funcaoProcurar}
        />
        <ContainerDeProdutos colunas={this.state.componenteCarrinho}>
          <ContainerMeio>
            <Header>
              <p>Quantidade de produtos: {listaFiltrada.length}</p>
              <select
                value={this.state.inputCrescente}
                onChange={this.onChangeCrecente}
              >
                <option value="Crescente">Preco: Crescente</option>
                <option value="Decrescente">Preco: Decrescente</option>
              </select>
            </Header>
            <ContainerProdutos>
              {listaFiltrada.map((element) => {
                return (
                  <Produto
                    key={element.id}
                    lista={element}
                    adicionarCarrinho={() => this.adicionarCarrinho(element.id)}
                  />
                );
              })}
            </ContainerProdutos>
          </ContainerMeio>
          <div>
            {this.state.componenteCarrinho && (
              <Carrinho
                produto={this.state.arrayCarrinho}
                total={this.state.valueTotal}
              />
            )}
          </div>
        </ContainerDeProdutos>
        <BotaoCarrinho onClick={this.renderizaCarrinho}>
          <Icone
            src={
              "https://www.flaticon.com/svg/static/icons/svg/2331/2331970.svg"
            }
          />
        </BotaoCarrinho>
      </Principal>
    );
  }
}

export default App;
