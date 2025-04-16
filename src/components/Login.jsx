import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/index.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();

    useEffect(() => {
        // If already authenticated, redirect to home page
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Use Firebase authentication
            const result = await login(email, password);
            
            if (result.success) {
                console.log("Login successful");
                console.log("Current user after login:", { email, role: 'admin' });
                // Redirect to home page
                navigate('/');
            } else {
                setError(result.message || 'Ogiltigt e-post eller lösenord');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Ett fel uppstod vid inloggning. Försök igen.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex_col">
            {/* Header Section */}
            <section className="login-header-section dynamic-background flex flex_col flex_j_E">
                <div className="login-header-container flex flex_col flex_j_SA">
                    <div className="login-title-container">
                        <p className="fonts_huge login-title">LOGGA IN</p>
                    </div>
                </div>
            </section>

            {/* Login Form Section Wrapper - Full width background */}
            <div className="login-form-wrapper">
                {/* Login Form Container with max-width constraint */}
                <div className="login-form-container">
                    {/* Login Form */}
                    <div className="login-form">
                        <div className="login-card">
                            <h2 className="fonts_medium font_blue login-subtitle">Administratörsinloggning</h2>
                            
                            {error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label 
                                        htmlFor="email" 
                                        className="fonts_small"
                                    >
                                        E-post
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label 
                                        htmlFor="password" 
                                        className="fonts_small"
                                    >
                                        Lösenord
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="form-input"
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="navbbutton button font_blue"
                                    disabled={loading}
                                >
                                    {loading ? 'Loggar in...' : 'Logga in'}
                                </button>
                            </form>
                            
                            <div className="login-note">
                                <p className="fonts_small" style={{ color: '#666' }}>
                                    Detta är en inloggning endast för administratörer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image Section */}
            <section className="login-background-section dynamic-background flex flex_col flex_j_E">
                <div className="login-background-container"></div>
            </section>
        </div>
    );
};

export default Login;
