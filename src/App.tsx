import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EstiloGlobal from "./styles";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/novo",
    element: <Cadastro />
  }
])

function App() {

  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
