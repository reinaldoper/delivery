import { Box, Breadcrumb, BreadcrumbItem, Button, Text, Flex, Center } from '@chakra-ui/react'
import { Link, useLocation/* , useParams */ } from 'react-router-dom'
import Icons from './Icons';
import IconBs from './IconBs';
import { TIdCervejs } from '../services/Types';
import IconsCg from './IconsCg';
import { useStore } from '../store/state';

const Nav = () => {
  const logAdd = useStore((state) => state.setAdd)
  const add = useStore((state) => state.add)


  const car = localStorage.getItem('car');

  let verify = false;
  let beer = false;

  const local = useLocation();

  if (local.pathname === '/itens') verify = true;
  if (local.pathname === '/finished') beer = true;

  let car1: TIdCervejs

  if (car) car1 = JSON.parse(localStorage.getItem('car') ?? '')


  const click = () => {
    logAdd([...add, car1])
  }
  
  
  let soma: number = 0
  add.forEach((item) =>{
    soma += item.abv ? Number(item.abv) : 0;
  })
  
  

  const pagar = `${soma.toFixed(2)}`

  localStorage.setItem('total', JSON.stringify(pagar));


  const router = JSON.parse(localStorage.getItem('card') ?? 'default');


  return (
    <Flex bg={'lightgrey'} justifyContent={'space-evenly'} padding={5}>
      <Breadcrumb spacing='8px' separator='-' color={'black'} height='2rem' padding={3}>
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
          <Button height='1.2rem' onClick={() => logAdd([])} cursor={'pointer'} width={50} colorScheme='teal' variant='solid' bg='rgb(31, 241, 52)' border={'none'}>
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
            {add.length}
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
