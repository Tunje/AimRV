import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
    const { isAuthenticated, currentUser } = useAuth();
    
    // Check if user is authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    // Check if admin is required and user is not admin
    if (requireAdmin && currentUser?.role !== 'admin') {
        return <Navigate to="/" />;
    }
    
    // If all checks pass, render the children
    return children;
};

export default ProtectedRoute;
