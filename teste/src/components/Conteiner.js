const Conteiner = ({ children, myValue }) => {
  return (
    <>
        <h2>Este é o titulo do container</h2>
        {children}
        <p>O valor é: {myValue}</p>
    </>
  )
}

export default Conteiner