import { GithubLogo, LinkedinLogo, ListChecks } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { HeaderStyle } from "./Header.style"

const Header = () => {
  return (
    <HeaderStyle>
      <Link className="taskLogo" to='/'><ListChecks size={48} color="#fff" weight="thin"/></Link>
      <nav>
        <ul className="menu">
          <li><Link className='linkMenu' to="/tarefas">To-do List</Link></li>
          <li><Link className='linkMenu' to="/contato">Contact</Link></li>
        </ul>
      </nav>
      <nav>
        <ul className="menu-redes">
          <li><a href="https://www.linkedin.com/in/victormlmartins/" target="_blank" rel="noreferrer"><LinkedinLogo size={48} color="#fff" weight="thin" /></a></li>
          <li><a href="https://github.com/Vimlm" target="_blank" rel="noreferrer"><GithubLogo size={48} color="#fff" weight="thin" /></a></li>
        </ul>
      </nav>
    </HeaderStyle>

  )
}

export default Header
