import React, { useState } from 'react'
import { Grid, GridItem, Box, HStack, Text, IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import WeekBar from './WeekBar'
import DayItem from './DayItem'
import MonthSelector from './MonthSelector'
import getDayList from './getDayList'

type DateState = {
  year: number
  month: number
  date: number
}

function initDateState(): DateState {
  const today = new Date()

  return {
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate(),
  }
}

function DatePicker() {
  const [dateState, setDateState] = useState<DateState>(initDateState())

  const handleChangeMonth = (month: number) => {
    setDateState((prev) => ({ ...prev, month }))
  }

  const handleIncrementYear = () => {
    setDateState((prev) => ({ ...prev, year: prev.year + 1 }))
  }

  const handleDecrementYear = () => {
    setDateState((prev) => ({ ...prev, year: prev.year - 1 }))
  }

  const dayList = getDayList(dateState.year, dateState.month)

  return (
    <Box bgColor='gray.600' borderRadius='lg'>
      <Grid p={1} gap={1} w='96' templateColumns='repeat(7,1fr)'>
        {/** year bar */}
        <GridItem colSpan={7}>
          <HStack m='auto' justify='center' spacing={6}>
            <HStack spacing={4}>
              <IconButton
                aria-label='click-left'
                icon={<ChevronLeftIcon />}
                onClick={handleDecrementYear}
              />
              <Text>{dateState.year}</Text>
              <IconButton
                aria-label='click-right'
                icon={<ChevronRightIcon />}
                onClick={handleIncrementYear}
              />
            </HStack>
            <MonthSelector
              month={dateState.month}
              onSelect={handleChangeMonth}
            />
          </HStack>
        </GridItem>

        {/** week bar */}
        <GridItem colSpan={7}>
          <WeekBar />
        </GridItem>

        {/** day item */}
        {dayList.map((item) => {
          return (
            <GridItem rowSpan={1} colSpan={1}>
              <DayItem {...item} />
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default DatePicker
