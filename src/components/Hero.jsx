import React from 'react';
import HamdiImage from '../assets/hamdi.jpg';

const Hero = () => {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      padding: '60px',
      backgroundColor: '#f5f0e6',
      gap: '40px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      <img
        src={HamdiImage}
        alt="Hamdi Ali Abdullahi"
        style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 15px rgba(217, 116, 48, 0.5)' }}
      />
      <div style={{ maxWidth: '600px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#d97430', fontFamily: "'Share Tech Mono', monospace" }}>
          Hi, I’m Hamdi Ali Abdullahi
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#a85c1a', fontFamily: "'Share Tech Mono', monospace" }}>
          Cybersecurity Student | Developer | Tech Enthusiast
        </p>
      </div>
    </section>
  );
};

export default Hero;
