import axios from 'axios';

const API_BASE_URL = 'http://localhost:8072/ecart/authservice';

// Create an Axios instance with default settings
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000, // 15 seconds timeout
});


export const handleSignIn = async (username, password, setIsLoggedIn, setUsername) => {
    try {
        const response = await axios.post('http://localhost:8072/ecart/authservice/auth/login', {
            username,
            password,
        });

        const { token, username: returnedUsername } = response.data;

        // Store token and username in localStorage
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('username', returnedUsername);

        // Update user state
        setIsLoggedIn(true);
        setUsername(returnedUsername);

        // Optionally, set Authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
        console.error('Error signing in:', error);
        // Handle error (e.g., show error message to user)
    }
};

export const handleSignUp = async (name, email, password) => {
    console.log('Sending request...');

    await apiClient.post('/auth/register', {
        username: name,
        email: email,
        password: password
    });
};


export const handleForgotPassword = (navigate) => {
    navigate('/forgot-password');
};

export const handleGoogleLogin = () => {
    alert('Google Login clicked');
};
