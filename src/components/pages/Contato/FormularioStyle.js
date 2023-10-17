import styled from "styled-components";

export const FormularioStyle = styled.form`
  display: flex;
  flex-direction: column;
  background: #FFDB9B;
  margin-top: 2rem;
  gap: 20px;
  text-align: start;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;

  .nome,
  .email,
  .telefone,
  .mensagem {
    width: 70%;
    margin: 1rem 6rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  button {
    width: 70%;
  }
`