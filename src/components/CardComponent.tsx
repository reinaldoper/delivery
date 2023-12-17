import { useState, useEffect } from 'react'
import { apiCervejas } from '../services/Api'
import { TCervejas } from '../services/Types'
import Card from '../cards/Card'

const CardComponent = () => {
  const [cervejas, setCervejas] = useState<TCervejas[]>([])

  useEffect(() => {
    const api = async () => {
      const result = await apiCervejas()
      setCervejas(result)
    }
    api()
  }, []);

  return (
    <>
      <Card cervejas={cervejas}/>
    </>
  )
}

export default CardComponent
