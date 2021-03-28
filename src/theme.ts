import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.800',
      },
    },
  },
})

export default customTheme
