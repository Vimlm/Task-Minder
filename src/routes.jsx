import { Route, Routes as RoutesDom, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import { GlobalStyle } from "./style/GlobalStyle"
import Tarefas from "./pages/Tarefas/Tarefas"
import Contato from "./pages/Contato/Contato"

const Routes = () => {
  return (
    
    <BrowserRouter>
    <GlobalStyle></GlobalStyle>
      <RoutesDom>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tarefas" element={<Tarefas />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </RoutesDom>
    </BrowserRouter>
  )
}

export default Routes
