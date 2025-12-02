// import SemContatos from "../../components/SemContatos";
import { Container } from "./styles"


const ConteudoPrincipal = () => {
    return (
        <Container>
            {/* <SemContatos /> */}

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João Silva</td>
                        <td>joao.silva@example.com</td>
                        <td>123456789</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default ConteudoPrincipal;