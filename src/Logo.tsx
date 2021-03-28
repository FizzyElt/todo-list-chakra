import * as React from 'react'
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import logo from './logo.svg'

const spin = keyframes`
  0% { scale:1 }
  50% { scale:1.2 }
  100% { scale:1 }
`

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 2s ease-in-out`

  return <chakra.img animation={animation} src={logo} ref={ref} {...props} />
})
