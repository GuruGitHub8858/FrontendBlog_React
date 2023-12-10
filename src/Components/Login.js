// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('public');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                email,
                password,
                role: userType,
            });

            if (response.status === 200) {
                const user = response.data;
                console.log('Logged in user:', user);

                if (user.role === 'admin') {

                    navigate('/postblog');
                } else if (user.role === 'public') {

                    navigate('/getblog');
                }

                alert('Logged in');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid login');
            setEmail('');
            setPassword('');
            setUserType('public');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>User Type:</label>
                <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <option value="public">public</option>
                    <option value="admin">admin</option>
                </select>
                <button onClick={handleLogin}>Login</button>
                {loginError && <div className="login-error">Invalid email or password</div>}
                <div className="signup-link">
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
