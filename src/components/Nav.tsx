import { Box, Breadcrumb, BreadcrumbItem, Button, Text, Flex, Center } from '@chakra-ui/react'
import { Link, useLocation/* , useParams */ } from 'react-router-dom'
import Icons from './Icons';
import IconBs from './IconBs';
import { useContext } from 'react';
import { TIdCervejs } from '../services/Types';
import { AppContext } from './AppContext';
import IconsCg from './IconsCg';

const Nav = () => {

  const { add, setAdd } = useContext(AppContext)

  const car = localStorage.getItem('car');

  let verify = false;
  let beer = false;

  const local = useLocation();

  if (local.pathname === '/itens') verify = true;
  if (local.pathname === '/finished') beer = true;

  let car1: TIdCervejs

  if (car) car1 = JSON.parse(localStorage.getItem('car') ?? '')


  const click = () => {
    setAdd([...add, car1])
  }
  localStorage.setItem('carrinho', JSON.stringify(add));

  const lenCar = JSON.parse(localStorage.getItem('carrinho') ?? '');

  const total = add.reduce((acc, add) => {
    return acc + (add && add.abv ? Number(add.abv) : 0);
  }, 0);
  
  

  console.log(add);
  

  const pagar = `${total.toFixed(2)}`

  localStorage.setItem('total', JSON.stringify(pagar));


  const router = JSON.parse(localStorage.getItem('card') ?? 'default');


  return (
    <Flex bg={'lightblue'} justifyContent={'space-evenly'} padding={5}>
      <Breadcrumb spacing='8px' separator='-' color={'Highlight'} height='2rem' padding={3}>
        <BreadcrumbItem isCurrentPage={verify}>
          <Link to='/' >Login</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage={verify}>
          <Link to='/itens'>Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage={beer}>
          <Link to='/finished'>Finish</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage={beer}>
          <Button height='1.2rem' onClick={() => setAdd([])} cursor={'pointer'} width={50} colorScheme='teal' variant='solid' bg='rgb(31, 241, 52)' border={'none'}>
            Clean
          </Button>
        </BreadcrumbItem>
        {router === true && <BreadcrumbItem>
          <Button height='1.2rem' onClick={() => click()} cursor={'pointer'} width={50} colorScheme='teal' variant='solid' bg='rgb(31, 241, 52)' border={'none'}>
            <Icons />
          </Button>
        </BreadcrumbItem>}
      </Breadcrumb>
      <Flex>
        <Box height='1rem' padding={3}>
          <Text width={50} colorScheme='teal' variant='solid' bg='rgb(31, 241, 52)' border={'none'}>
            <IconBs />
            {lenCar.length}
          </Text>
        </Box>
        <Center height='1rem' padding={6}>
          <Flex width={75} bg='rgb(31, 241, 52)' border={'none'}>
            <IconsCg />
            {pagar}
          </Flex>
        </Center>
      </Flex>
    </Flex>

  )
}

export default Nav
