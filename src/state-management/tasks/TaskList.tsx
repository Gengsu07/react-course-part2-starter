import { useContext } from "react";
import useAuthStore from "../auth/AuthStore";
import TaskListContext from "./TaskListContext";

const TaskList = () => {
  const useTask = ()=> useContext(TaskListContext)  
  const { tasks, dispatch } = useTask();
  const { user } = useAuthStore()
  return (
    <>
      <p>User is:{user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task" + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskID: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
