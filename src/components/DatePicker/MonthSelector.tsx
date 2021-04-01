import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

type MonthSelectorProps = {
  month: number
  onSelect: (month: number) => void
}

export default function MonthSelector({ month, onSelect }: MonthSelectorProps) {
  const monthList = Array.from({ length: 12 }, (_, index) => index)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {month + 1}
      </MenuButton>
      <MenuList minW='12'>
        {monthList.map((i) => {
          return <MenuItem onClick={() => onSelect(i)}>{i + 1}</MenuItem>
        })}
      </MenuList>
    </Menu>
  )
}
