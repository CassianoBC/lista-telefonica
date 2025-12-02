import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EstiloGlobal from "./styles";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { Provider } from "react-redux";
import store from "./store";

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
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
