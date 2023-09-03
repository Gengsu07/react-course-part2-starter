import { useReducer } from "react";
import "./App.css";
import AuthProviders from "./state-management/AuthProviders";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import TaskListContext from "./state-management/contexts/TaskListContext";
import TaskReducers from "./state-management/reducers/TaskReducers";
import TaskProviders from "./state-management/TaskProviders";

function App() {
  
  return (
    <AuthProviders>
      <TaskProviders>
        <NavBar/>
        <TaskList/>
      </TaskProviders>
    </AuthProviders>
  )
}

export default App;
