// Hero.js
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    return () => setLoaded(false);
  }, []);

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="content-wrapper">
          <h1 className="hero-title">
            <span className="title-line">Elevate Your</span>
            <span className="title-line accent">Style</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover the latest trends in fashion with our exclusive collection. 
            Curated pieces that redefine modern elegance.
          </p>
          
          <div className="cta-container">
            <button className="hero-cta primary">
              <span>Shop Collection</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 6H5.25V4.5H13.5V6Z" fill="currentColor"/>
                <path d="M13.5 10.5H5.25V9H13.5V10.5Z" fill="currentColor"/>
                <path d="M5.25 15H13.5V13.5H5.25V15Z" fill="currentColor"/>
                <path d="M15.75 19.5V4.5H14.25V19.5H15.75Z" fill="currentColor"/>
                <path d="M19.5 12L15.75 8.25V15.75L19.5 12Z" fill="currentColor"/>
              </svg>
            </button>
            
            <button className="hero-cta secondary">
              <span>Explore More</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Brands</span>
            </div>
            <div className="stat">
              <span className="stat-number">2k+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat">
              <span className="stat-number">30k+</span>
              <span className="stat-label">Customers</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Fashion collection" 
            className="hero-main-image"
          />
          <div className="floating-card card-1">
            <div className="card-content">
              <span className="card-title">Summer Collection</span>
              <span className="card-discount">30% OFF</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <span className="card-title">New Arrivals</span>
              <span className="card-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;