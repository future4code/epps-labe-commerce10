import React from "react";
import styled from "styled-components";

const ContainerBotaoCarrinho = styled.button`
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