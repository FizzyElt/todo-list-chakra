import React, { createContext, useReducer, useState } from 'react'

type TodoListState = {
  content: string
  date: string
}[]

type TodoContextType = {
  selectedDate: {
    year: number
    month: number
    date: number
  }
  items: TodoListState
  handleUpdateItem: (content: string, index: number) => void
  handleAddItem: (date: string, content: string) => void
  handleDeleteItem: (index: number) => void
  handleUpdateDate: (updateDate: {
    year: number
    month: number
    date: number
  }) => void
}

export const TodoContext = createContext<TodoContextType>({
  selectedDate: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  },
  items: [],
  handleUpdateItem: (content: string, index: number) => {},
  handleAddItem: (date: string, content: string) => {},
  handleDeleteItem: (index: number) => {},
  handleUpdateDate: (updateDate: {
    year: number
    month: number
    date: number
  }) => {},
})

export enum TodoListAction {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
}

type TodoListActionType =
  | {
      type: TodoListAction.ADD
      payload: {
        content: string
        date: string
      }
    }
  | {
      type: TodoListAction.UPDATE
      payload: {
        content: string
        index: number
      }
    }
  | {
      type: TodoListAction.DELETE
      payload: number
    }

function todoListReducer(state: TodoListState, action: TodoListActionType) {
  switch (action.type) {
    case TodoListAction.ADD: {
      return [...state, action.payload]
    }

    case TodoListAction.UPDATE: {
      const { content, index } = action.payload
      state[index].content = content
      return [...state]
    }

    case TodoListAction.DELETE: {
      return state.filter((_, index) => index !== action.payload)
    }
    default:
      throw Error('no match type')
  }
}

type TodoContextProviderProps = {
  children: React.ReactNode
}
export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  })
  const [todoList, dispatch] = useReducer(todoListReducer, [])

  const handleUpdateItem = (content: string, index: number) => {
    dispatch({ type: TodoListAction.UPDATE, payload: { content, index } })
  }

  const handleAddItem = (date: string, content: string) => {
    dispatch({ type: TodoListAction.ADD, payload: { date, content } })
  }

  const handleDeleteItem = (index: number) => {
    dispatch({ type: TodoListAction.DELETE, payload: index })
  }

  const handleUpdateDate = (updateDate: {
    year: number
    month: number
    date: number
  }) => {
    setSelectedDate(updateDate)
  }

  return (
    <TodoContext.Provider
      value={{
        selectedDate,
        items: todoList,
        handleAddItem,
        handleDeleteItem,
        handleUpdateItem,
        handleUpdateDate,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
