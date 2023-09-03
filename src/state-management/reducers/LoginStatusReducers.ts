
interface AuthLogin {
    type:'doLOGIN',
    user:string | undefined
}
interface AuthLogout {
    type :'doLOGOUT',
}

export type Auth = AuthLogin | AuthLogout

const LoginStatusReducers = (state: string | undefined, action:Auth): string| undefined=>{
    if (action.type === 'doLOGIN') return action.user;
    if (action.type === 'doLOGOUT') return ''
    return state = ''
}
export default LoginStatusReducers