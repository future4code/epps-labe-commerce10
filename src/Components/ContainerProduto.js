import React from "react";
import styled from 'styled-components'

const Quantidade = styled.div`
color: #333;
font-size: 20px;
font-weight: 600;
line-height: 16px;
margin: 20px 0;
width: 100%;
`;

const Pics = styled.img`
display: flex;
height: 200px;
width: 200px;
`;

const Button = styled.button`
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
padding: 5px 10px;

&:hover {
background: #e9f0f7;
transition: all .4s ease-in-out;
}
`;


class ContainerProduto extends React.Component {
    render(){
        return(
            
            <Quantidade>
                <Pics src={this.props.imageUrl}/> 
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <Button>Adicionar ao Carrinho</Button>
           </Quantidade>
        
        )
    }
}

export default ContainerProduto