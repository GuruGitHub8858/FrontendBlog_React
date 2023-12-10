// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Signup.css'; // Import external CSS file for styling

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('public');
    const navigate = useNavigate();

    const handleSignup = async () => {


        try {
            const response = await axios.post('http://localhost:8080/api/users/signup', {
                email,
                password,
                role,
            });

            if (response.status === 201) {
                const user = response.data;
                console.log('Signup successful:', user);
                // Redirect or navigate to the dashboard
                navigate('/login');
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Signup</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required  // This attribute makes the field required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required  // This attribute makes the field required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="public">Public</option>
                </select>
                <button onClick={handleSignup}>Signup</button>
            </div>
        </div>

    );
};

export default Signup;
