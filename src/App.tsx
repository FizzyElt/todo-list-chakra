import * as React from 'react'
import { ChakraProvider, Box, Grid, VStack } from '@chakra-ui/react'
import TodoListCard from './components/TodoListCard'
import theme from './theme'
import TodoContextProvider from './ContextProvider/TodoContext'
export const App = () => (
  <ChakraProvider theme={theme}>
    <TodoContextProvider>
      <Box fontSize='xl'>
        <Grid minH='100vh' p={3}>
          <VStack mt={32}>
            <TodoListCard />
          </VStack>
        </Grid>
      </Box>
    </TodoContextProvider>
  </ChakraProvider>
)
