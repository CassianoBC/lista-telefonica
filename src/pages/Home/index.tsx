import { useSelector } from "react-redux";
import BotaoAdd from "../../components/BotaoAdicionar";
import SemContatos from "../../components/SemContatos";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import ListaDeContatos from "../../containers/ListaDeContatos";
import type { RootReducer } from "../../store";


const Home = () => {
    const { lista } = useSelector((state: RootReducer) => state.contatos)

    return (
        <>
            <Header />
            {lista.length === 0 ? (
                <>
                    <SemContatos />
                </>
            ) : (
                <ListaDeContatos />
            ) }
            <Footer />
            <BotaoAdd />
        </>
    )
}

export default Home;