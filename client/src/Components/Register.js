import React, { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { register, isLoading, error } =  useRegister();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const  success = await register({ username, password, email });
        if(success){
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input disabled={isLoading} type="submit" value="Register" />
            {error && <div className='error'>{error}</div>}
        </form>
    );
}

export default Register;
