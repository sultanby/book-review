import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } =  useLogin();

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await login({ password, email });
        if(success){
            navigate('/');
        }
    };


    return (
            <form onSubmit={handleSubmit} className="register-form">
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </label>
                <input disabled={isLoading} type="submit" value="Sign In" />
                {error && <div className='error'>{error}</div>}
            </form>
    );
}

export default Login;
