import BotaoAdd from "../../components/BotaoAdicionar";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import ListaDeContatos from "../../containers/ListaDeContatos";


const Home = () => {
    return (
        <>
            <Header />
            <ListaDeContatos />
            <Footer />
            <BotaoAdd />
        </>
    )
}

export default Home;