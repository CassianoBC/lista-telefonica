import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { cadastrar } from "../../store/reducers/contatos";

const Formulario = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const cadastraContato = (evento: FormEvent) => {
        evento.preventDefault()

        dispatch(
            cadastrar({
                nome,
                telefone,
                email
            })
        )
        navigate('/')
    }

    return (
        <>
            <S.MainContainer>
                <S.Title>NOVO CONTATO</S.Title>
                <S.Form onSubmit={cadastraContato}>
                    <S.Campo onChange={(evento) => setNome(evento.target.value)} required value={nome} type="text" placeholder="Nome:" />
                    <S.Campo onChange={(evento) => setEmail(evento.target.value)} value={email} type="email" placeholder="Email:" />
                    <S.Campo onChange={(evento) => setTelefone(evento.target.value)} value={telefone} type="number" placeholder="Telefone:" />
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