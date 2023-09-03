import { useContext } from "react";
import TaskListContext from "../contexts/TaskListContext";

const useTask = ()=> useContext(TaskListContext)

export default useTask;