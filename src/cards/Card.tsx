import { TCervejas } from '../services/Types'
import { useNavigate } from 'react-router'
import { CircularProgress, Center, Wrap, WrapItem, Button, Image } from '@chakra-ui/react'
import './card.css'

const Card = ({ cervejas }: { cervejas: TCervejas[] }) => {
  const navigate = useNavigate();

  const itemIdClick = (id: number) => {
    navigate(`/beer/${id}`)
  }

  const cards = cervejas.map(card => (
    <WrapItem key={card.id} marginLeft={1} bg={'lightcoral'} padding={3} borderRadius={8} marginTop={4}>
      <Center w='180px' h='400px'>
        <Button border='none'
          borderRadius={5}
          cursor='pointer'
          onClick={() => itemIdClick(card.id)}
        >
          <Image src={card.image_url} alt={card.name} />
        </Button>
      </Center>
    </WrapItem>
  ))
  return (
    <>
      {cervejas.length > 0 ? <Wrap spacing='30px' justify='center'>
        {cards}
      </Wrap> : <Center marginTop={80}>
        <CircularProgress isIndeterminate color='grey' />
        <CircularProgress isIndeterminate color='green' />
        <CircularProgress isIndeterminate color='grey' />
      </Center>}
    </>
  )
}

export default Card
