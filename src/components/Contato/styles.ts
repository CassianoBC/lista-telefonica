import styled from "styled-components";

export const Card = styled.div`
width: 60%;
background-color: #f0f0f0;
margin: 10px auto;
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: space-between;
align-items: center;
`

export const InfoCard = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`

export const InputNome = styled.input`
font-size: 24px;
font-weight: bold;
border: none;
background-color: transparent;

`
export const InputDados = styled(InputNome)`
font-weight: 400;
font-size: 18px
`


export const BotoesCard = styled.div`
display: flex;
gap: 16px;
`

export const BotaoEditar = styled.button`
background-color: #4CAF50;
color: white;
padding: 8px 16px;
border: none;
border-radius: 4px;
cursor: pointer;
`

export const BotaoExcluir = styled.button`
background-color: #f44336;
color: white;
padding: 8px 16px;
border: none;
border-radius: 4px;
cursor: pointer;
`

export const Nome = styled.h3`
font-size: 24px;
`

export const Telefone = styled.p`
font-size: 18px;
`

export const Email = styled.p`
font-size: 18px;
`