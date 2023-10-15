import { InputStyle } from "./Input.style"

const Input = ({callBack, valor, textoPlace}) => {
  return (
    <InputStyle 
      type="text" 
      onChange={callBack}
      value={valor}
      placeholder={textoPlace}>
    </InputStyle>
  )
}

export default Input
