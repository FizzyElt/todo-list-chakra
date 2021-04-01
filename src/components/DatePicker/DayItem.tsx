import React from 'react'
import { Center } from '@chakra-ui/react'

type DayItemProp = {
  day: number
  year: number
  month: number
  isCurrentMonth: boolean
}

export default function DayItem({
  day,
  year,
  month,
  isCurrentMonth,
}: DayItemProp) {
  if (isCurrentMonth) {
    return (
      <Center
        m='auto'
        h='10'
        w='10'
        borderRadius='md'
        cursor='pointer'
        _hover={{
          bgColor: 'blue.500',
        }}
        color='white'
      >
        {day}
      </Center>
    )
  }
  return (
    <Center color='gray.500' m='auto' h='10' w='10' borderRadius='md'>
      {day}
    </Center>
  )
}
