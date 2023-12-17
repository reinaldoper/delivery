import CardComponent from "../components/CardComponent"
import Nav from "../components/Nav"

const Itens = () => {
  const verify = false;

  localStorage.setItem('card', JSON.stringify(verify));
  return (
    <>
      <Nav />
      <CardComponent />
    </>
  )
}

export default Itens
