import { TCervejas } from '../services/Types'
import { useNavigate } from 'react-router'
import { CircularProgress, Center, Wrap, WrapItem, Button, Image, Box } from '@chakra-ui/react'
import './card.scss'

const Card = ({ cervejas }: { cervejas: TCervejas[] }) => {
  const navigate = useNavigate();

  const itemIdClick = (id: number) => {
    navigate(`/beer/${id}`)
  }

  const cards = cervejas.map(card => (
    <WrapItem key={card.id} marginLeft={1} bg={'GrayText'} padding={3} borderRadius={8} marginTop={4}>
      <Center w='18vw' h='15vh'>
        <Button border='none'
          borderRadius={5}
          cursor='pointer'
          onClick={() => itemIdClick(card.id)}
        >
          <Image maxWidth={100} maxHeight={100} width={'auto'} height={'auto'} src={card.image_url} alt={card.name} />
          <Box marginLeft={5}>
            <p>
              { card.first_brewed }
            </p>
          </Box>
        </Button>
      </Center>
    </WrapItem>
  ))
  return (
    <>
      {cervejas.length > 0 ? <Wrap bg={'CaptionText'} spacing='30px' justify='center'>
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
