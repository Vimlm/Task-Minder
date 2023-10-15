import { BotaoStyle } from "./Botao.style"

const Botao = ({callBack, texto}) => {
  return (
    <BotaoStyle
      onClick={callBack}>
        {texto}
    </BotaoStyle>
  )
}

export default Botao
