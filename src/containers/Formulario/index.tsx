import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Formulario = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.MainContainer>
                <S.Title>NOVO CONTATO</S.Title>
                <S.Form>
                    <S.Campo required type="text" placeholder="Nome:"/>
                    <S.Campo type="email" placeholder="Email:"/>
                    <S.Campo type="number" placeholder="Telefone:"/>
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