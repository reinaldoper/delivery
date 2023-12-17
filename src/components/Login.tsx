import { FormControl, Box, Button, Input, Alert, AlertIcon, AlertDescription, AlertTitle, Center } from "@chakra-ui/react"
import { useNavigate } from "react-router"
import { useState } from "react"
import './login.css'
import { TLogar } from "../services/Types"

const Login = () => {
  const [logar, setLogar] = useState<TLogar>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleClick = () => {
   
    if (logar.email === 'admin@admin.com' && logar.password === 'admin') {
      navigate('/itens')
    } else {
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Please enter your password and email address</AlertDescription>
      </Alert>
      setLogar({email: '', password: ''})
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
