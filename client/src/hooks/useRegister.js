import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const useRegister = () => {
    const API_URL = 'http://localhost:4000';
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { setUser } = useContext(UserContext);

    const register = async ({email, username, password}) =>  {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            return false
        }
        if (response.ok) {
            //save the user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            //update UserContext
            setUser(json.username);

            setIsLoading(false)
            return true
        }
    }

    return { register, isLoading, error }
}