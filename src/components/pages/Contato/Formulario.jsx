import Botao from "../../common/Botao/Botao"
import { FormularioStyle } from "./FormularioStyle"

const Formulario = () => {
  return (
    <div className="container">
      <FormularioStyle typeof="submit">
        <div className="nome">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome"/>
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" id="email"/>
        </div>

        <div className="telefone">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone"/>
        </div>
        <div className="mensagem">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
        </div>

        <Botao texto='Enviar'/>
      </FormularioStyle>
    </div>
  )
}

export default Formulario
