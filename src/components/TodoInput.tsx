import React, { useState, useContext } from 'react'
import { Input, Button, HStack } from '@chakra-ui/react'
import { TodoContext } from '../ContextProvider/TodoContext'

export default function TodoInput() {
  const { handleAddItem } = useContext(TodoContext)
  const [inputText, setInputText] = useState<string>('')

  const handleClick = () => {
    inputText && handleAddItem(inputText)
    setInputText('')
  }

  return (
    <HStack align='stretch'>
      <Input
        letterSpacing='0.1rem'
        size='lg'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button h='inherit' onClick={handleClick}>
        send
      </Button>
    </HStack>
  )
}
