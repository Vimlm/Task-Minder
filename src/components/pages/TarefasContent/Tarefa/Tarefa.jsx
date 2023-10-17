import { Check, Pencil, Trash, X } from "@phosphor-icons/react";
import { TarefaStyle } from "./Tarefa.style";

//Componentes
import Input from "../../../common/Input/Input";
import Botao from "../Botao/Botao";

const Tarefa = ({ item, toggleStatusTarefa, mudarTarefa, edicaoLigada, setMudarTarefa, editarTarefa, excluirTarefa }) => {
  return (
    <TarefaStyle>
      {
        item.editando ? (
          <div className="check-p-container">
            {null}
            <div className="inputEdit">
              <Input callBack={(event) => setMudarTarefa(event.target.value)} valor={mudarTarefa.value} />
            </div>
          </div>
        ) : (
          <div className="check-p-container inputCheckBox">
            <input type="checkbox" onChange={() => toggleStatusTarefa(item.id)}/>
            <p style={{ textDecoration: item.completo ? 'line-through' : '' }}>{item.nome}</p>
          </div>
        )
      }

      {
        item.editando ? (
          <div className="botao-container">
            <Botao callBack={() => edicaoLigada(item.id)} texto="Cancelar">
              <X size={32} color="#1f0505" weight="thin" />
            </ Botao>
            <Botao callBack={() => editarTarefa(item.id)} texto="Confirmar">
              <Check size={32} color="#1f0505" weight="thin" />
            </ Botao>
          </div>
        ) : (
          <div className="botao-container">
            <Botao callBack={() => edicaoLigada(item.id)} texto="Editar">
              <Pencil size={32} color="#1f0505" weight="thin" />
            </ Botao>
            <Botao callBack={() => excluirTarefa(item.id)} texto="Excluir">
              <Trash size={32} color="#431e1e" weight="thin" />
            </ Botao>
          </div>
        )
      }
    </TarefaStyle>
  );
}


export default Tarefa
