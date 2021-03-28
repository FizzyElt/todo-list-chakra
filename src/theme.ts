import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.800',
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        letterSpacing: '0.1rem',
      },
    },
  },
})

export default customTheme
