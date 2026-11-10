
import './Login.css';

function Login() {
    return (
        <div className="login-box">
            <div className="login-icon">🔐</div>

            <h2>Welcome Back!</h2>

            <p>Please login to access your home page.</p>

            <div className="login-details">
                <p>Username: Demo User</p>
                <p>Status: Not Logged In</p>
            </div>
        </div>
    );
}

export default Login;
