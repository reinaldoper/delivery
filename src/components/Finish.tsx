import { Button, Center, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { AppContext } from "./AppContext"

const Finish = () => {
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [select, setSelect] = useState<string>('')
  const navigate = useNavigate()

  const { setAdd } = useContext(AppContext)

  const values = JSON.parse(localStorage.getItem('total') ?? '')

  const handleClick = () => {
    if (values && name.length > 0 && lastName.length > 0 && select.length > 0) {
      setAdd([])
      navigate('/itens')
    } else {
      alert('Please select a values object')
    }
  }
  return (
    <Center maxW={'40%'} margin={'auto'} marginTop={10} bg={'Highlight'} padding={8} borderRadius={7}>
      <FormControl isRequired>
        <FormLabel>Value</FormLabel>
        <Input placeholder='Value' value={values} />
        <FormLabel>First name</FormLabel>
        <Input value={name} placeholder='First name' onChange={(e) => setName(e.target.value)} />
        <FormLabel>Last name</FormLabel>
        <Input placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <FormLabel>Country</FormLabel>
        <Select placeholder='Select the form' onChange={(e) => setSelect(e.target.value)}>
          <option>Visa</option>
          <option>Master</option>
          <option>Elo</option>
        </Select>
        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
          onClick={() => handleClick()}
        >
          Submit
        </Button>
      </FormControl>
    </Center>
  )
}

export default Finish
