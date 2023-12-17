import CardDetails from "../components/CardDetails"
import Nav from "../components/Nav"

const DetailsBeer = () => {
  const verify = true;

  localStorage.setItem('card', JSON.stringify(verify));

  return (
    <>
      <Nav />
      <CardDetails />
    </>
  )
}

export default DetailsBeer
