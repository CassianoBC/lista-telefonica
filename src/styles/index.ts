import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
`

export const Cabecalho = styled.header`
    background-color: ${variaveis.corDeFundoSecundaria};
    padding: 10vh 0;
    text-align: center;
    color: ${variaveis.corTexto};

    h1 {
        font-size: 50px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
    }
`

export const Container = styled.main`
    width: 100%;
    height: 68vh;
    background-color: ${variaveis.corDeFundo};
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        font-size: 36px;
        text-align: center;
        }
`

export const Footer = styled.footer`
    background-color: ${variaveis.corDeFundoSecundaria};
    padding: 2vh 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    
    a {
        text-decoration: none;
        color: #fff;
    }
`

export const BotaoAdicionar = styled.button`
    display: flex;
    height: 64px;
    width: 64px;
    background-color: ${variaveis.corBotao};
    color: #fff;
    position: fixed;
    border-radius: 50%;
    bottom: 90px;
    right: 40px;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    text-decoration: none;
    border: none;
    cursor: pointer;
`





export default EstiloGlobal;