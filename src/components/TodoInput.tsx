import React, { useState, useContext } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
} from '@chakra-ui/react'
import { TodoContext } from '../ContextProvider/TodoContext'
export default function TodoInput() {
  const { handleAddItem } = useContext(TodoContext)
  const [inputText, setInputText] = useState<string>('')

  const handleClick = () => {
    handleAddItem(inputText)
    setInputText('')
  }

  return (
    <HStack>
      <Input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Button onClick={handleClick}>send</Button>
    </HStack>
  )
}
