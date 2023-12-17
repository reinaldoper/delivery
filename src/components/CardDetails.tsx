import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { TIdCervejs } from "../services/Types"
import { apiByIdCervejas } from "../services/Api"
import DetailCard from "../cards/DetailCard"

const CardDetails = () => {
  const [detail, setDetails] = useState<TIdCervejs[]>([])
  const { id } = useParams()
  

  useEffect(() => {
    const route = async () => {
      const result = await apiByIdCervejas(Number(id));
      setDetails(result)
    }
    route();
  }, [id])
  return (
    <>
      <DetailCard detail={detail} />
    </>
  )
}

export default CardDetails
