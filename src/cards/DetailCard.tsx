import { TIdCervejs } from "../services/Types"
import './detail.css'
import { Center, Box, Image, CircularProgress, Text, Flex, Container } from "@chakra-ui/react";

const DetailCard = ({ detail }: { detail: TIdCervejs[] }) => {
  const ingredients = detail.length > 0 && detail[0].ingredients.hops
    .slice(0, 3)
    .map((item, index) => (
      <Box key={index}>
        <Text>{item.name}</Text>
        <Text>{item.attribute}</Text>
        <Text marginBottom={10}>{item.amount.value}</Text>
      </Box>
    ));


  if (detail.length > 0) localStorage.setItem('car', JSON.stringify(detail[0]));

  const result = (
    <Flex>
      <Box marginTop={10} marginLeft={10}>
        {detail.length > 0 && <Image maxWidth={200} maxHeight={200} width={'auto'} height={'auto'} src={detail[0].image_url} alt={detail[0].name} />}
      </Box>
      <Box marginTop={10} marginLeft={5}>
        <Center>
          <h1>{detail.length > 0 && detail[0].name}</h1>
        </Center>
        <Center>
          <p className="description">{detail.length > 0 && detail[0].description}</p>
        </Center>
        <Center>
          <h1>Details</h1>
        </Center>
        <Center>
          <p className="description">{detail.length > 0 && detail[0].brewers_tips.toString()}</p>
        </Center>
        <Center>
          <h1>Fabrication date</h1>
        </Center>
        <Center>
          <p className="description">{detail.length > 0 && detail[0].first_brewed}</p>
        </Center>
      </Box>
      <Box marginTop={10} marginLeft={5} color={"whitesmoke"}>
        <h1 className="h1-ingredients">Ingredients</h1>
        {ingredients}
      </Box>
    </Flex>

  )


  return (
    <div className="container-detail">
      {detail.length > 0 ? <Container maxW='4xl' bg='blue.600' padding={8} borderRadius={5} centerContent>
        <Box padding='4' bg='blue.300' color='black' maxW='max-content'>
          {result}
        </Box>
      </Container> : <Center marginTop={80}>
        <CircularProgress isIndeterminate color='grey' />
        <CircularProgress isIndeterminate color='green' />
        <CircularProgress isIndeterminate color='grey' />
      </Center>}
    </div>
  )
}

export default DetailCard
