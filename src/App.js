import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import { useState, useEffect } from 'react';
import ForgotPassword from './Components/Auth/ForgotPassword';
import { handleForgotPassword, handleGoogleLogin, handleLogout, handleSignIn, handleSignUp } from './Components/Auth/authHandlers';
import { HomeContainer } from './Components/Layout/HomeContainer/HomeContainer';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  // Check for token on initial load and set user state
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      // Optional: You can validate the token here if needed
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Retrieve username (or any other user info from token or API)
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
        setIsLoggedIn(true);
      }
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    axios.defaults.headers.common['Authorization'] = '';
    setIsLoggedIn(false);
    setUsername("");
  }



  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="/signin"
            element={
              <SignIn
                onSignIn={async (username, password) => {
                  await handleSignIn(username, password, setIsLoggedIn, setUsername);
                  navigate('/'); // Navigate to the homepage after login
                }}
                onSignUp={() => navigate('/signup')}
                onForgotPassword={() => navigate('/forgot-password')}
                onGoogleLogin={handleGoogleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                onSignUp={(name, email, password) => {
                  handleSignUp(name, email, password);
                  navigate('/');
                }}
              />
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
