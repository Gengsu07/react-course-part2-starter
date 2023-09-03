import React, { ReactNode, useReducer } from 'react'
import TaskReducers from './reducers/TaskReducers'
import TaskListContext from './contexts/TaskListContext'

interface Props {
    children : ReactNode
}

const TaskProviders = ({children}:Props) => {
    const [tasks, dispatch] =  useReducer(TaskReducers, [])
  return (
    <TaskListContext.Provider value = {{tasks, dispatch}}>
        {children}
    </TaskListContext.Provider>
  )
}

export default TaskProviders