import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Componentes
import Botao from '../../common/Botao/Botao';
import Tarefa from './Tarefa/Tarefa';
import Input from '../../common/Input/Input';

//Estilos
import { ListaTarefasStyle } from './listaTarefas.styled';
import { FormStyle } from './form.style';
import { TarefasStyle } from './tarefas.style';

const TarefasContent = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [mudarTarefa, setMudarTarefa] = useState('');
  const [filtrarTarefa, setFiltrarTarefa] = useState('');

  function adicionarTarefa(event) {
    event.preventDefault();
    const novaTarefa = {
      id: uuidv4(),
      nome: tarefa,
      completo: false,
      editando: false,
    };
    if (novaTarefa.nome === '') {
      console.log('Colocar o Modal');
    } else {
      setTarefas([...tarefas, novaTarefa]);
      setTarefa('');
    }
  }

  function toggleStatusTarefa(id) {
    const updateTarefa = tarefas.map((tarefa) => {
      if (tarefa.id === id) tarefa.completo = !tarefa.completo;
      return tarefa;
    });
    setTarefas(updateTarefa);
  }

  function editarTarefa(id) {
    const updateNomeTarefa = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        console.log(mudarTarefa);
        tarefa.nome = mudarTarefa;
        tarefa.editando = !tarefa.editando;
        return tarefa;
      }
      return tarefa;
    });
    setTarefas(updateNomeTarefa);
    setMudarTarefa('');
  }

  function edicaoLigada(id) {
    const updatedTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.editando = !tarefa.editando;
      }
      return tarefa;
    });
    setTarefas(updatedTarefas);
  }

  function excluirTarefa(id) {
    const updateTarefa = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(updateTarefa);
  }

  return (
    <div className="container">
      <TarefasStyle>
        <FormStyle type="submit">
          <div>
            <Input
              callBack={(event) => setTarefa(event.target.value)}
              valor={tarefa}
              textoPlace="Digite..."
            />
            <Botao callBack={adicionarTarefa} texto='Adicionar'/>
          </div>

          <Input
            callBack={(event) => {
              setFiltrarTarefa(event.target.value);
            }}
            valor={filtrarTarefa}
            textoPlace="Buscar Tarefa..."
          />
        </FormStyle>

        <ListaTarefasStyle>
          {tarefas.map((item) => {
            if (item.nome.toLowerCase().includes(filtrarTarefa.toLowerCase())) {
              return (
                <Tarefa
                  key={item.id}
                  item={item}
                  toggleStatusTarefa={toggleStatusTarefa}
                  mudarTarefa={mudarTarefa}
                  edicaoLigada={() => edicaoLigada(item.id)}
                  setMudarTarefa={setMudarTarefa}
                  editarTarefa={() => editarTarefa(item.id)}
                  excluirTarefa={() => excluirTarefa(item.id)}
                />
              );
            }
            return null;
          })}
        </ListaTarefasStyle>
      </TarefasStyle>
    </div>
  );
};

export default TarefasContent;
