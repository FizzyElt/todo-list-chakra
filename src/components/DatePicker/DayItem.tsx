import React, { useContext } from 'react'
import { Center } from '@chakra-ui/react'

import { TodoContext } from '../../ContextProvider/TodoContext'

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
  const { selectedDate, handleUpdateDate } = useContext(TodoContext)

  const itemColor =
    selectedDate.year === year &&
    selectedDate.month === month &&
    selectedDate.date === day
      ? 'blue.500'
      : 'transparent'

  if (isCurrentMonth) {
    return (
      <Center
        m='auto'
        h='10'
        w='10'
        borderRadius='md'
        cursor='pointer'
        bgColor={itemColor}
        _hover={{
          bgColor: 'blue.500',
        }}
        color='white'
        onClick={() => handleUpdateDate({ year, month, date: day })}
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
