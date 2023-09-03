import { useContext } from 'react';
import LoginStatus from './LoginStatus';
import TaskListContext from './contexts/TaskListContext';
import useAuth from './hooks/useAuth';

const NavBar = () => {
  const {tasks} = useContext(TaskListContext)
  const {user} =  useAuth()
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{user}:{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
