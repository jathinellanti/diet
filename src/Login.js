import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const navigate = useNavigate();

  const generateRandomCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  };

  const initializeCaptcha = () => {
    setGeneratedCaptcha(generateRandomCaptcha());
  };

  useEffect(() => {
    initializeCaptcha();
    setIsVisible(true); // Set visible when component mounts
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha !== generatedCaptcha) {
      setError('Incorrect CAPTCHA. Please try again.');
      setCaptcha('');
      initializeCaptcha();
      return;
    }

    console.log('Login Data:', { username, password });

    setUsername('');
    setPassword('');
    setCaptcha('');
    initializeCaptcha();

    navigate('/');
  };

  return (
    <div className={`login-page ${isVisible ? 'fade-in' : ''}`}>
      <div className="login-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          <label htmlFor="captcha">CAPTCHA: {generatedCaptcha}</label>
          <input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
            placeholder="Enter the CAPTCHA above"
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>
        <p className="redirect-link">
          Don't have an account? <a href="/signup">Signup here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
