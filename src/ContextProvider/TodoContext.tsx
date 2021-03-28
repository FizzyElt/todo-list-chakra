import React, { createContext, useReducer } from 'react'

type TodoListState = {
  content: string
}[]

type TodoContextType = {
  items: TodoListState
  handleUpdateItem: (content: string, index: number) => void
  handleAddItem: (content: string) => void
  handleDeleteItem: (index: number) => void
}

export const TodoContext = createContext<TodoContextType>({
  items: [],
  handleUpdateItem: (content: string, index: number) => {},
  handleAddItem: (content: string) => {},
  handleDeleteItem: (index: number) => {},
})

export enum TodoListAction {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
}

type TodoListActionType =
  | {
      type: TodoListAction.ADD
      payload: string
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
      return [...state, { content: action.payload }]
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
  const [todoList, dispatch] = useReducer(todoListReducer, [])

  const handleUpdateItem = (content: string, index: number) => {
    dispatch({ type: TodoListAction.UPDATE, payload: { content, index } })
  }

  const handleAddItem = (content: string) => {
    dispatch({ type: TodoListAction.ADD, payload: content })
  }

  const handleDeleteItem = (index: number) => {
    dispatch({ type: TodoListAction.DELETE, payload: index })
  }

  return (
    <TodoContext.Provider
      value={{
        items: todoList,
        handleAddItem,
        handleDeleteItem,
        handleUpdateItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
