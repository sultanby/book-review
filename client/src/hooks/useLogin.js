import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const useLogin = () => {
    const API_URL = 'http://localhost:4000';
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { setUser } = useContext(UserContext);

    const login = async ({email, password}) =>  {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
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

    return { login, isLoading, error }
}