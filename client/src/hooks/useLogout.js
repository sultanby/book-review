import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const useLogout = () => {
    const { setUser } = useContext(UserContext);

    const logout = async () =>  {
        //remove user from storage
        localStorage.removeItem('user')
        setUser(null)
    }

    return { logout }
}