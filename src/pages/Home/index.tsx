import BotaoAdd from "../../components/BotaoAdicionar";
import ConteudoPrincipal from "../../containers/ConteudoPrincipal";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";


const Home = () => {
    return (
        <>
            <Header />
            <Footer />
            <ConteudoPrincipal />
            <BotaoAdd />
        </>
    )
}

export default Home;