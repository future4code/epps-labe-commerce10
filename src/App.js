import React from "react";
import Styled from "styled-components";
import ContainerProduto from "./Components/Produtos/ContainerProduto";


const Container = styled.div`
display:flex;
border: 1px solid black; 
margin: 1vw;
height: 99vh;
width: 100vw;
`
const GridContainer = styled.div`
display:flex;
border: 1px solid black; 
margin: 1vw;
height: 1vh;
width: 1vw;
`
const BoxFilter = styled.div`
margin-top: 1vw;
padding-left: 1vw;
padding-right: 1vw;
border: 1px solid black;
height: 95vh;
width: 22vw;
`
const Carrinho = styled.div`
border: 1px solid black;
margin-top: 1vw;
padding-left: 1vw;
padding-right: 1vw;
height: 95vh;
width: 13vw;
position: relative;
`

const Quantidade = styled.div`
margin-top: 1vw;
padding-left: 1vw;
padding-right: 1vw;
border: 1px solid black;
height: 15vh;
width: 56vw;
`


class Home extends React.Component{
  render(){
    return(

      <Container>
      
      <BoxFilter>      
      <h2>Filtros</h2>
      <label for="VMin" > Valor Mínimo: </label>
      <input id="VMin" type = "number" onChange=""/>
      <label for="VMax"> Valor Máximo: </label>
      <input id="VMax" type = "number" onChange=""/>
      <label for="BuscaProd"> Buscar Produto: </label>
      <input id="BuscaProd" type = "text" onChange=""/>       
      </BoxFilter>

      
      <home>
        <Quantidade>

          <p> Quantidade de Produto:</p>  

          <label> Orientação: </label>
          <select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </select>
        </Quantidade>

        
        <GridContainer>
          <p>Grid de Produtos</p>

        </GridContainer>


      </home>


      <Carrinho> 
        <h3>Carrinho</h3>
        <p>1x Produto <button>X</button></p>
        <p>1x Produto<button>X</button></p>
        <p>Total: R$ 396.00</p>
      </Carrinho>

      </Container>

    )
  }
}



export default class App extends React.Component{
  render (){
    return (
      <div>      
        
      <Home />    
      </div>
    )
  }
}
