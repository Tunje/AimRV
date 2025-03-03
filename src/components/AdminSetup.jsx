import React, { useState } from 'react';
import { ensureAdminExists } from '../firebase/setupAdmin';

const AdminSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSetupAdmin = async () => {
    setIsLoading(true);
    setMessage('Setting up admin user...');
    
    try {
      const result = await ensureAdminExists();
      
      if (result) {
        setSuccess(true);
        setMessage('Admin user set up successfully! You can now log in as admin@example.com with password "password123"');
      } else {
        setSuccess(false);
        setMessage('Failed to set up admin user. Check console for details.');
      }
    } catch (error) {
      console.error('Error in admin setup:', error);
      setSuccess(false);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '2rem auto', 
      padding: '1.5rem', 
      backgroundColor: 'rgba(0, 166, 251, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(0, 166, 251, 0.3)'
    }}>
      <h2 style={{ color: '#00a6fb', marginBottom: '1rem' }}>Admin Setup</h2>
      
      <p style={{ marginBottom: '1rem' }}>
        Use this button to ensure the admin user is properly set up in Firestore.
        This will create or update the admin role for admin@example.com.
      </p>
      
      <button 
        onClick={handleSetupAdmin}
        disabled={isLoading}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgb(56, 76, 135)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1,
          transition: 'background-color 0.3s',
          marginBottom: '1rem'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(79, 99, 158)'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(56, 76, 135)'}
      >
        {isLoading ? 'Setting up...' : 'Setup Admin User'}
      </button>
      
      {message && (
        <div style={{ 
          padding: '0.75rem', 
          backgroundColor: success ? 'rgba(0, 200, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
          border: `1px solid ${success ? 'rgba(0, 200, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'}`,
          borderRadius: '4px',
          color: success ? 'green' : 'red'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default AdminSetup;
