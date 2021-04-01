import * as React from 'react'
import { ChakraProvider, Box, Grid, VStack } from '@chakra-ui/react'
import TodoListCard from './components/TodoListCard'
import theme from './theme'
import TodoContextProvider from './ContextProvider/TodoContext'
import DatePicker from './components/DatePicker'

export const App = () => (
  <ChakraProvider theme={theme}>
    <TodoContextProvider>
      <VStack width='full' marginY={32} alignItems='center'>
        <DatePicker />
        <TodoListCard />
      </VStack>
    </TodoContextProvider>
  </ChakraProvider>
)
