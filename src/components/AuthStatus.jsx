import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useText } from '../context/TextContext';

const AuthStatus = () => {
    const { isAuthenticated, currentUser } = useAuth();
    const { isAdmin, isEditing } = useText();

    return (
        <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '10px', 
            backgroundColor: 'rgba(0,0,0,0.7)', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px',
            zIndex: 1000,
            fontSize: '12px'
        }}>
            <h4 style={{ margin: '0 0 5px 0' }}>Debug Info</h4>
            <div>
                <p style={{ margin: '2px 0' }}>isAuthenticated: {isAuthenticated ? 'true' : 'false'}</p>
                <p style={{ margin: '2px 0' }}>User: {currentUser ? JSON.stringify(currentUser) : 'none'}</p>
                <p style={{ margin: '2px 0' }}>isAdmin: {isAdmin ? 'true' : 'false'}</p>
                <p style={{ margin: '2px 0' }}>isEditing: {isEditing ? 'true' : 'false'}</p>
            </div>
        </div>
    );
};

export default AuthStatus;
