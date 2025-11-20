import EstiloGlobal, { BotaoAdicionar, Cabecalho, Container, Footer } from "./styles";

function App() {

  return (
    <>
      <EstiloGlobal />
      <Cabecalho>
        <h1>Lista De Contatos</h1>
      </Cabecalho>
      <Container>
        <p>Você não possui contatos registrados, clique no botão "+" para registrar seu primeiro contatos</p>
        <BotaoAdicionar>+</BotaoAdicionar>
      </Container>
      <Footer>
        <a target="_blank" href="https://github.com/CassianoBC">@Cassiano</a>
      </Footer>
    </>
  )
}

export default App
