//import { useDispatch } from 'react-redux';
import * as S from './styles';
import { useState } from 'react';
import ContatoClass from '../../models/Contato';
import { editar, remover } from '../../store/reducers/contatos';
import { useDispatch } from 'react-redux';

type Props = ContatoClass

const Contato = ({ nome: nomeOriginal, email: emailOriginal, telefone: telefoneOriginal, id }: Props) => {

    const dispatch = useDispatch();
    const [nome, setNome] = useState(nomeOriginal)
    const [telefone, setTelefone] = useState(telefoneOriginal)
    const [email, setEmail] = useState(emailOriginal)
    const [estaEditando, setEstaEditando] = useState(false);

    const handleRemoverContato = () => {
        dispatch(remover(id))
    }

    const handleEditarContato = () => {
        dispatch(
            editar({
                nome,
                telefone,
                email,
                id
            })
        )
        setEstaEditando(false)
    }

    return (
        <>
            <S.Card>
                <S.InfoCard>
                    {estaEditando ? (
                        <>
                            <S.InputNome value={nome} onChange={(evento) => setNome(evento.target.value)}></S.InputNome>
                            <S.InputDados value={telefone} onChange={(evento) => setTelefone(evento.target.value)}></S.InputDados>
                            <S.InputDados value={email} onChange={(e) => setEmail(e.target.value)}></S.InputDados>
                        </>
                    ) : (
                        <>
                            <S.Nome>{nome}</S.Nome>
                            <S.Telefone>{telefone}</S.Telefone>
                            <S.Email>{email}</S.Email>
                        </>
                    )}
                </S.InfoCard>
                <S.BotoesCard>
                    {estaEditando ? (
                        <>
                            <S.BotaoEditar onClick={handleEditarContato}>Salvar</S.BotaoEditar>
                            <S.BotaoExcluir onClick={() => setEstaEditando(false)}>Cancelar</S.BotaoExcluir>
                        </>
                    ) : (
                        <>
                            <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
                            <S.BotaoExcluir onClick={handleRemoverContato}>Excluir</S.BotaoExcluir>
                        </>
                    )}
                </S.BotoesCard>
            </S.Card>
        </>
    )
}

export default Contato;