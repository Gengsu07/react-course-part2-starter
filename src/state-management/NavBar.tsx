import LoginStatus from './auth/LoginStatus';
import useCounterStore from './counter/CounterStore';

const NavBar = () => {
  const counter = useCounterStore(s=> s.counter)
  console.log('RERENDERS')
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
      
    </nav>
  );
};

export default NavBar;
