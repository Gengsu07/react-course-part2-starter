import { create } from "zustand"
import {mountStoreDevtool} from "simple-zustand-devtools"

interface AuthStore {
    user : string,
    login : (username : string) => void,
    logout : () => void
}

  const useAuthStore = create<AuthStore>(set => ({
    user: '',
    login : (username) => set(store=> ({user: username})),
    logout : () => set(()=> ({user:''}))  
}))

if (process.env.NODE_ENV === 'development'){
    mountStoreDevtool('AuthStore', useAuthStore)
}
  export default useAuthStore