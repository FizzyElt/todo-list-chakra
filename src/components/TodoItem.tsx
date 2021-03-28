import React, { useContext, useState } from 'react'
import { Text, HStack, IconButton, Input } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { TodoContext } from '../ContextProvider/TodoContext'

type TodoItemProps = {
  content: string
  index: number
}

export default function TodoItem({ content, index }: TodoItemProps) {
  const { handleDeleteItem, handleUpdateItem } = useContext(TodoContext)

  const [isEdit, setEdit] = useState<boolean>(false)
  const [editInput, setEditInput] = useState(content)

  const handleConfirmClick = () => {
    handleUpdateItem(editInput, index)
    setEdit(false)
  }

  const handleCancelClick = () => {
    setEditInput(content)
    setEdit(false)
  }

  if (isEdit) {
    return (
      <HStack align='stretch'>
        <Input
          value={editInput}
          letterSpacing='0.1rem'
          size='md'
          onChange={(e) => setEditInput(e.target.value)}
          fontSize='xl'
        />
        <IconButton
          onClick={handleConfirmClick}
          aria-label='confirm item'
          icon={<CheckIcon color='green.400' />}
        />
        <IconButton
          onClick={handleCancelClick}
          aria-label='cancel item'
          icon={<CloseIcon color='red.500' />}
        />
      </HStack>
    )
  }

  return (
    <HStack>
      <Text flex={1} paddingX='2.5' borderBottom='2px' borderColor='gray.600'>
        {content}
      </Text>
      <IconButton
        onClick={() => setEdit(true)}
        aria-label='edit item'
        icon={<EditIcon />}
      />
      <IconButton
        onClick={() => handleDeleteItem(index)}
        aria-label='delete item'
        icon={<DeleteIcon />}
      />
    </HStack>
  )
}
