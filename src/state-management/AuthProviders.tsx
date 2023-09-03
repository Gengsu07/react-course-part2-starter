import { ReactNode, useReducer } from 'react';
import AuthContext from './contexts/AuthContext';
import LoginStatusReducers from './reducers/LoginStatusReducers';

interface Props {
    children : ReactNode;
}


const AuthProviders = ({children}:Props) => {
const [user, dispatch] = useReducer(LoginStatusReducers,'');
  return (
    <AuthContext.Provider value={{user, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders