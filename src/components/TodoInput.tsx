import React, { useState, useContext } from 'react'
import { Input, Button, HStack } from '@chakra-ui/react'
import { TodoContext } from '../ContextProvider/TodoContext'
import format from 'date-fns/format'

export default function TodoInput() {
  const { handleAddItem, selectedDate } = useContext(TodoContext)
  const [inputText, setInputText] = useState<string>('')

  const formattedDate = format(
    new Date(selectedDate.year, selectedDate.month, selectedDate.date),
    'yyyy/MM/dd'
  )

  const handleClick = () => {
    inputText && handleAddItem(formattedDate, inputText)
    setInputText('')
  }

  return (
    <HStack align='stretch'>
      <Input
        w='3xs'
        disabled
        letterSpacing='0.1rem'
        size='lg'
        value={formattedDate}
      />
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
