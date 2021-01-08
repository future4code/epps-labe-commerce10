import React from 'react';
import styled from 'styled-components';

const Carrinho = styled.div`

`

class ContainerCarrinho extends React.Component {
    render(){
        return(
            <Carrinho>
                <h3>Carrinho</h3>
                <p>1x Produto <button>X</button></p>
                <p>1x Produto<button>X</button></p>
                <p>Total: R$ 396.00</p>
            </Carrinho>
        )
    }
} 
export default ContainerCarrinho;