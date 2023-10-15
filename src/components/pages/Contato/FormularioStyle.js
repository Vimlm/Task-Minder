import styled from "styled-components";

export const FormularioStyle = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: #FFDB9B;
  padding: 8rem;
  margin-top: 2rem;
  gap: 20px;
  text-align: start;
  border-radius: 0.25rem;

  .nome,
  .email,
  .telefone,
  .mensagem {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
`