import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import About from './About';
import Resume from './Resume';
import hamdiImage from '../assets/hamdi.jpg';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: '#f5f0e6',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#b96111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', maxWidth: 700 }}
      >
        {/* Floating Image */}
        <motion.img
          src={hamdiImage}
          alt="Hamdi Ali"
          style={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '2rem',
            border: '4px solid #b96111',
            boxShadow: '0 10px 20px rgba(250, 144, 5, 0.52)',
            cursor: 'pointer',
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(246, 124, 10, 1)' }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textShadow: '1px 1px 2px rgba(255, 125, 4, 1)',
          }}
        >
          Welcome to Hamdi&apos;s Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ fontSize: '1.3rem', lineHeight: 1.5, color: '#f98109ff' }}
        >
          Cybersecurity enthusiast & software developer passionate about crafting clean, modern web apps.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      <Projects />

      {/* Actual About and Resume Components */}
      <About />
      <Resume />
    </div>
  );
}
