import styled from "styled-components";

export const TarefaStyle = styled.li`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  background: #FFCE82;
  border-radius: 0.75rem;
  margin-top: 1rem;
  box-shadow: 1px 0 1px black;
  align-items: center;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .check-p-container {
    display: flex;
    gap: 2rem;
  }

  .inputCheckBox input {
    width: 20px;
  }

  .inputEdit input {
    width: 400px;
    padding: 0.5rem;
  }

  .botao-container {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`