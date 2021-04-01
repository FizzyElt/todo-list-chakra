import React from 'react'
import { HStack, Center } from '@chakra-ui/react'

export default function WeekBar() {
  const weekDay = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <HStack py='2' spacing={1} w='full' justify='space-between'>
      {weekDay.map((day) => (
        <Center flex='1' color='green.300'>
          {day}
        </Center>
      ))}
    </HStack>
  )
}
