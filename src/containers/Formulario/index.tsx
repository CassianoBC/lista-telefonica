import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useState } from "react";

const Formulario = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <>
            <S.MainContainer>
                <S.Title>NOVO CONTATO</S.Title>
                <S.Form>
                    <S.Campo required value={nome} type="text" placeholder="Nome:"/>
                    <S.Campo value={email} type="email" placeholder="Email:"/>
                    <S.Campo value={telefone} type="number" placeholder="Telefone:"/>
                    <S.ButtonContainer>
                        <S.BotaoSubmit type="submit">Adicionar</S.BotaoSubmit>
                        <S.BotaoCancela onClick={() => navigate("/")} type="button">Cancelar</S.BotaoCancela>
                    </S.ButtonContainer>
                </S.Form>
            </S.MainContainer>
        </>
    )
}

export default Formulario;