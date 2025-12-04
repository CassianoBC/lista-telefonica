import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Cabecalho = styled.header`
    background-color: ${variaveis.corDeFundoSecundaria};
    padding: 5vh 0;
    text-align: center;
    color: ${variaveis.corTexto};
    position: sticky;
    top: 0;

    h1 {
        font-size: 50px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
    }
`