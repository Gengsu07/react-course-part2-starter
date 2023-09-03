import React, { Dispatch } from "react";
import { Auth } from "./AuthProviders";

interface AuthActionContext {
    user: string ,
    dispatch : Dispatch<Auth>
}

const AuthContext = React.createContext<AuthActionContext>({} as AuthActionContext)
export default AuthContext;