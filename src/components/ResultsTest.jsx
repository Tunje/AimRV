import React from 'react';

const ResultsTest = () => {
  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h1>Results Test Page</h1>
      <p>This is a test to verify the route is working.</p>
      <button 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: 'rgb(56, 76, 135)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          fontSize: '1rem', 
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        Test Button
      </button>
    </div>
  );
};

export default ResultsTest;
