import "./App.css";
import { AuthProviders } from "./state-management/auth";
import NavBar from "./state-management/NavBar";
import { TaskList, TaskProviders } from "./state-management/tasks";

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
