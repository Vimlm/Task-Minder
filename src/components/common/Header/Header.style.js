import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding-top: 2rem;
  gap: 2rem;

  .menu,
  .menu-redes {
    display: flex;
    gap: 1rem;
    padding: 0.75rem;
  }
  .menu {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .taskLogo {
    width: 8rem;
  }

  .linkMenu {
    position: relative;
    padding: 1rem;
  }

  .linkMenu:after {
    content: "";
    display: block;
    height: 1px;
    width: 0px;
    background: #fff;
    margin-top: 4px;
    transition: 0.4s;
    position: absolute;
  }

  .linkMenu:hover:after {
    width: 100%;
  }

  .menu-redes li:hover {
    scale: 1.1;
  }
`