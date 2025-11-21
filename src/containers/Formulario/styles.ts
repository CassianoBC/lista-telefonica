import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const MainContainer = styled.main`
    background-color: ${variaveis.corDeFundo};
    height: 78vh;
`

export const Title = styled.h2`
    padding: 50px 0;
    text-align: center;
    font-size: 36px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
`

export const Campo = styled.input`
    background-color: #fff;
    border: 1px solid #ccccc;
    width: 50%;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 36px;
`

export const BotaoSubmit = styled.button`
    background-color: #4caf50;
    font-weight: bold;
    font-size: 16px;
    color: white;
    padding: 15px 30px;
    border-radius: 15px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #45a049;}
`

export const BotaoCancela = styled(BotaoSubmit)`
    background-color: #f44336;

    &:hover {
        background-color: #da190b;
    }
`