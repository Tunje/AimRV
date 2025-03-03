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
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="font_blue fonts_huge font_white">LOGGA IN</p>
                    </div>
                </div>
            </section>

            {/* Login Form Section */}
            <section style={{ padding: '50px 0', backgroundColor: '#f5f5f5', width: '100vw', minHeight: '60vh' }}>
                <div className="MaxWH" style={{ padding: '0 20px', maxWidth: '500px', margin: '0 auto' }}>
                    <div style={{ 
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        padding: '30px'
                    }}>
                        <h2 className="fonts_medium font_blue" style={{ marginBottom: '20px', textAlign: 'center' }}>Administratörsinloggning</h2>
                        
                        {error && (
                            <div style={{ 
                                backgroundColor: 'rgba(255, 0, 0, 0.1)', 
                                color: '#d32f2f',
                                padding: '10px',
                                borderRadius: '4px',
                                marginBottom: '20px',
                                textAlign: 'center'
                            }}>
                                {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label 
                                    htmlFor="email" 
                                    className="fonts_small" 
                                    style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
                                >
                                    E-post
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ 
                                        width: '80%',
                                        padding: '10px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                            
                            <div style={{ marginBottom: '30px' }}>
                                <label 
                                    htmlFor="password" 
                                    className="fonts_small" 
                                    style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
                                >
                                    Lösenord
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ 
                                        width: '80%',
                                        padding: '10px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="navbbutton button font_blue"
                                style={{ 
                                    width: '80%',
                                    padding: '10px 15px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                disabled={loading}
                            >
                                {loading ? 'Loggar in...' : 'Logga in'}
                            </button>
                        </form>
                        
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <p className="fonts_small" style={{ color: '#666' }}>
                                Detta är en inloggning endast för administratörer.
                            </p>
                            <p className="fonts_small" style={{ color: '#666', marginTop: '5px' }}>
                                Standard: admin@example.com / password123
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Image Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E" style={{ height: '30vh', width: '100vw' }}>
            </section>
        </div>
    );
};

export default Login;
