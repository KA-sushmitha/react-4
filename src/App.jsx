
import { useState } from 'react';

import UserList from './components/UserList';
import Login from './components/Login';
import Home from './components/Home';

import './App.css';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="app">

            <header>
                <h1>React Assignment - Task 3</h1>
                <p>List Rendering & Conditional Rendering</p>
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
            </section>

            

        </div>
    );
}

export default App;
