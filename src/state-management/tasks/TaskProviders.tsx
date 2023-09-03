import  { ReactNode, useReducer } from 'react'
import TaskListContext from './TaskListContext'


export interface Task {
  id: number;
  title: string;
}

interface addTask {
  type:'ADD',
  task: Task
}

interface deleteTask {
  type : 'DELETE',
  taskID : number
}

export type addDeleteTask = addTask | deleteTask

const TaskReducers = (tasks:Task[], action:addDeleteTask ):Task[] =>{
  switch (action.type){
      case  'ADD':
          return [action.task, ...tasks]
      case 'DELETE':
          return tasks.filter(t=> t.id != action.taskID)
  }
}


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