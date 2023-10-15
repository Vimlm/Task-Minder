import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  .bgContainer {
    min-width: 100vw;
    height: 100vh;
  }

  .bgContainer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80');
    filter: brightness(.7);
    z-index: -1;
  }

  .container {
    min-width: 100vw;
    display: flex;
    height: 80vh;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    padding-bottom: 3rem;
  }
`