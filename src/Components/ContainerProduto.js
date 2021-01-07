import React from "react";
import styled from 'styled-components'

class ContainerProduto extends React.Component {
    render(){
        return(
            <div>
            <img src={this.props.imageUrl}/>
            <p>{this.props.name}</p>
            <p>{this.props.value}</p>
            <button>Adicionar ao Carrinho</button>
        </div>
        )
    }
}

export default ContainerProduto