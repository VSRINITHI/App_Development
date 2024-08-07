import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../Assets/Css/Register.css';

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Set to false to show login first
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For error messages
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Directly navigate to dashboard if email is 'srinithimomentous@admin.in'
    if (email === 'srinithimomentous@admin.in' && password === 'srinithi') {
      navigate('/dashboard');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Successful login
      console.log('Login successful!');
      if (!email.endsWith('@gmail.com')) {
        navigate('/dashboard'); // Navigate to Dashboard page
      } else {
        navigate('/'); // Navigate to Home page
      }
    } else if (email.endsWith('@gmail.com')) {
      setErrorMessage('Invalid email or password.');
    } else {
      setErrorMessage('Please register.');
      toggleForm();
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Directly navigate to dashboard if email is 'srinithimomentous@admin.in'
    if (email === 'srinithimomentous@admin.in') {
      navigate('/dashboard');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (storedUsers.some((user) => user.email === email)) {
      setErrorMessage('Email already exists.');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Successful signup
    console.log('Sign up successful!');
    setIsSignUp(false); // Switch to login form

    if (!email.endsWith('@gmail.com')) {
      navigate('/dashboard'); // Navigate to Dashboard page
    }
  };

  return (
    <div className="reg-main">
      <input
        type="checkbox"
        id="reg-chk"
        aria-hidden="true"
        checked={isSignUp}
        onChange={toggleForm}
      />

      <div className="reg-login">
        <form onSubmit={handleLogin}>
          <br />
          <br />
          <br /><br/><br/>
          <label htmlFor="reg-chk" aria-hidden="true" className="reg-form-label">
            Login
          </label>
          {errorMessage && <p className="reg-error">{errorMessage}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <label htmlFor="reg-chk" aria-hidden="true" className="reg-toggle-label">
            New User? REGISTER
          </label>
        </form>
      </div>

      <div className="reg-signup">
        <form onSubmit={handleSignUp}>
          <br />
          <br />
          <label htmlFor="reg-chk" aria-hidden="true" className="reg-form-label">
            Register
          </label>
          {errorMessage && <p className="reg-error">{errorMessage}</p>}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
          <label htmlFor="reg-chk" aria-hidden="true" className="reg-toggle-label">
            Already a User? LOGIN
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
