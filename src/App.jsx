
import { useState } from 'react';

import UserList from './components/UserList';
import Login from './components/Login';
import Home from './components/Home';
import Toggle from './components/Toggle';

import './App.css';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [light, setIsLight] = useState(false);

    return (
        <div className={light ? "app light" : "app dark"}>

            {/* Theme button - Top Right */}
            <div className="theme-top">
                <button
                    className="theme-btn"
                    onClick={() => setIsLight(!light)}
                >
                    {light ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
            </div>

            <header>
                <h1>React Learning Dashboard - Task 3 & Task 4</h1>
                <p>List Rendering & Conditional Rendering</p>
                <p>useState Hook, Counter and Theme</p>
            </header>

            <section className="login-section">

                <h2>Login / Home Functionality</h2>

                <button
                    className={isLoggedIn ? "logout-btn" : "login-btn"}
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>

                {isLoggedIn ? <Home /> : <Login />}

                {isLoggedIn && <UserList />}

                <Toggle />

            </section>

        </div>
    );
}

export default App;
