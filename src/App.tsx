import "./App.css";
import { Counter } from "./state-management/counter";
import NavBar from "./state-management/NavBar";
import { TaskList, TaskProviders } from "./state-management/tasks";

function App() {
  
  return (
      <TaskProviders>
        <Counter/>
        <NavBar/>
        <TaskList/>
      </TaskProviders>
  )
}

export default App;
