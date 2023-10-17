import { BotaoStyle } from "./botao.style"

const Botao = ({callBack, texto}) => {
  return (
    <BotaoStyle
      onClick={callBack}>
        {texto}
    </BotaoStyle>
  )
}

export default Botao
