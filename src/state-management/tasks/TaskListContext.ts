import React, { Dispatch } from "react";
import { Task, addDeleteTask } from "./TaskProviders";


interface TaskActionContext{
    tasks : Task[];
    dispatch: Dispatch<addDeleteTask>;
}

const TaskListContext = React.createContext<TaskActionContext>({} as TaskActionContext )
export default TaskListContext