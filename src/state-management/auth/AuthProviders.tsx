import { ReactNode, useReducer } from 'react';
import AuthContext from './AuthContext';



interface AuthLogin {
  type:'doLOGIN',
  user:string 
}
interface AuthLogout {
  type :'doLOGOUT',
}

export type Auth = AuthLogin | AuthLogout

const LoginStatusReducers = (state: string , action:Auth): string=>{
  if (action.type === 'doLOGIN') return action.user;
  if (action.type === 'doLOGOUT') return ''
  return state = ''
}


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