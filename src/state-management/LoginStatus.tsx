import { useContext, useReducer, useRef } from "react";
import LoginStatusReducers from "./reducers/LoginStatusReducers";
import AuthContext from "./contexts/AuthContext";

const LoginStatus = () => {
  const {user, dispatch} = useContext(AuthContext)

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({type:'doLOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type:'doLOGIN',user:'sugengw07'})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
