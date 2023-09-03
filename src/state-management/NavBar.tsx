import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import TaskListContext from './tasks/TaskListContext';

const NavBar = () => {
  const {tasks} = useContext(TaskListContext)
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
