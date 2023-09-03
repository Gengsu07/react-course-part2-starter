import React, { Dispatch } from "react";
import { Task, addDeleteTask } from "../reducers/TaskReducers";

interface TaskActionContext{
    tasks : Task[];
    dispatch: Dispatch<addDeleteTask>;
}

const TaskListContext = React.createContext<TaskActionContext>({} as TaskActionContext )
export default TaskListContext