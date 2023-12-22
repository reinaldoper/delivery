import { FormControl, Box, Button, Input, Center } from "@chakra-ui/react"
import { useNavigate } from "react-router"
import { useState } from "react"
import './login.css'
import { TLogar } from "../services/Types"
import { requiretUpload } from '../reducers/reducer';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [logar, setLogar] = useState<TLogar>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(requiretUpload(true));
    if (logar.email === 'admin@admin.com' && logar.password === 'admin') {
      navigate('/itens')
    } else {
      alert('Please enter your password and email and try again')
      setLogar({ email: '', password: '' })
    }
  }

  return (
    <Center bgSize={'cover'} height={'100vh'} bg={'lightgrey'}>
      <Box className="login-container" boxShadow={'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}>
        <h2>Login</h2>
        <FormControl id="login-form">
          <label htmlFor="email">Email:</label>
          <Input type="email"
            id="email" name="email"
            placeholder="admin@admin.com"
            value={logar.email}
            required
            onChange={(e) => setLogar({ ...logar, email: e.target.value })}
          />

          <label htmlFor="password">Password:</label>
          <Input type="password"
            id="password" placeholder='admin'
            name="password"
            required
            value={logar.password}
            onChange={(e) => setLogar({ ...logar, password: e.target.value })}
          />

          <Button type="button" onClick={() => handleClick()} >Login</Button>
        </FormControl>
      </Box>
    </Center>
  )
}


export default Login
