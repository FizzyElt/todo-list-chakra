import React, { useContext } from 'react'
import { Container, VStack, Text } from '@chakra-ui/react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { TodoContext } from '../ContextProvider/TodoContext'

export default function TodoListCard() {
  const { items } = useContext(TodoContext)

  return (
    <Container p={3} bg='gray.700' maxW='xl' minH='md' borderRadius='md'>
      <VStack align='stretch' spacing={4}>
        <Text textAlign='center' fontSize='4xl'>
          Todo List
        </Text>
        <TodoInput />
        {items.map(({ content }, index) => {
          return (
            <TodoItem
              key={`${content}_${index}`}
              content={content}
              index={index}
            />
          )
        })}
      </VStack>
    </Container>
  )
}
