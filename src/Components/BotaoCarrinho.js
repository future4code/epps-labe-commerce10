import React from "react";
import styled from "styled-components";

const ContainerBotaoCarrinho = styled.button`
  background-color: white;
  border: solid 2px #f2f2f2;
  border-radius: 50%;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 80px;
  height: 80px;
  padding: 10px;
`;


const Icone = styled.img`
height:50px;
`;

class BotaoCarrinho extends React.Component {
  render() {
    return (
      <ContainerBotaoCarrinho onClick={this.props.onClickIcone}>
        <Icone
          src={'https://www.flaticon.com/svg/static/icons/svg/2331/2331970.svg'}
          />
      </ContainerBotaoCarrinho>
    );
  }
}

export default BotaoCarrinho; 