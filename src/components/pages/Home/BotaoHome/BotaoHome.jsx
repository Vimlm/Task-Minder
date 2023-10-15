import { BotaoHomeStyle } from "./BotaoHome.style"

const Botao = ({callBack, texto}) => {
  return (
    <BotaoHomeStyle
      onClick={callBack}>
        {texto}
    </BotaoHomeStyle>
  )
}

export default Botao
