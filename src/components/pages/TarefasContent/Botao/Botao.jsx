const Botao = ({callBack, children}) => {
  return (
    <button
      onClick={callBack}>
        {children}
    </button>
  )
}

export default Botao
