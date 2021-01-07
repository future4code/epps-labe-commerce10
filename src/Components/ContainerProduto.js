import React from "react";
import styled from 'styled-components'

const Quantidade = styled.div`

`
const Pics = styled.div`

`

class ContainerProduto extends React.Component {
    render(){
        return(
            
            <Quantidade>
                <Pics src={this.props.imageUrl}> </Pics>
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <button>Adicionar ao Carrinho</button>
           </Quantidade>
        
        )
    }
}

export default ContainerProduto