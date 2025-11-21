import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Rodape = styled.footer`
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