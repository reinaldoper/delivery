import Finish from "../components/Finish"
import Nav from "../components/Nav"
const FinishPage = () => {
  const verify = false;

  localStorage.setItem('card', JSON.stringify(verify));

  
  return (
    <>
    <Nav />
    <Finish />
    </>
  )
}

export default FinishPage
