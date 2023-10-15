import { Link } from "react-router-dom"
import { HomeContentStyle } from "./HomeContent.style"
import Botao from "./BotaoHome/BotaoHome"

const HomeContent = () => {
  return (
    <HomeContentStyle className="container">
      <h2>Organize Your Tasks</h2>
      <h1>TaskMinder</h1>
      <Link to='/tarefas'><Botao texto='explore now'/></Link>
    </HomeContentStyle>
  )
}

export default HomeContent
