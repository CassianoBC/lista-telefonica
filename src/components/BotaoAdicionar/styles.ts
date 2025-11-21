import { Link } from "react-router-dom";
import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const BotaoAdicionar = styled(Link)`
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