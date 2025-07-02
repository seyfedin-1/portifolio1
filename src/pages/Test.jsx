import React from 'react';

export default function Test() {
  console.log('Test component rendered');
  
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <h1 style={{ color: '#2563eb', fontSize: '2.5rem', fontWeight: 'bold' }}>Windsurf Portfolio</h1>
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800"
        alt="Portfolio"
        style={{
          width: '300px',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
      <p style={{ color: '#374151', fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        Welcome to my portfolio website! This is a test page to verify that everything is working correctly.
      </p>
    </div>
  );
}
