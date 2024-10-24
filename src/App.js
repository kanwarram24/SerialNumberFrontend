import React, { useState } from 'react';
import Login from './components/Login';
import './App.css';
0
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (username, password) => {
        fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ username, password }), // Use URL encoded form data
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse JSON response if successful
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            setUser(data); // Store the returned user data
            setIsAuthenticated(true); // Update state to show the dashboard
        })
        .catch(error => {
            alert('Invalid credentials'); // Notify user on failure
            console.error('Error:', error);
        });
    };

    return (
        <div className="App">
            {isAuthenticated ? (
                <h1>Welcome, {user.username}!</h1> // Greet the logged-in user
            ) : (
                <Login onLogin={handleLogin} /> // Show login form if not authenticated
            )}
        </div>
    );
}

export default App;
