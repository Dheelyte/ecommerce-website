// PromoBanner.js
import React, { useState, useEffect } from 'react';
import '../styles/PromoBanner.css';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [claimed, setClaimed] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Set end date for the promotion (3 days from now)
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    const distance = endDate - now;

    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClaimOffer = () => {
    setClaimed(true);
    // Simulate API call or redirect
    setTimeout(() => setClaimed(false), 3000);
  };

  return (
    <section className="promo-banner">
      <div className="promo-container">
        <div className="animate-on-scroll animate-slide-bottom animate-delay-1 promo-content">
          <div className="promo-badge">
            <span className="badge-text">Limited Time Offer</span>
            <div className="badge-pulse"></div>
          </div>

          <h1 className="promo-title">
            Summer <span className="highlight">Sale</span> Extravaganza!
          </h1>

          <p className="promo-subtitle">
            Enjoy up to <strong>50% OFF</strong> on selected items +{" "}
            <strong>FREE Shipping</strong> on orders over $50
          </p>

          <div className="countdown-container">
            <p className="countdown-label">Offer ends in:</p>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </div>

          <button 
            className={`claim-button ${claimed ? 'claimed' : ''} ${hovered ? 'hovered' : ''}`}
            onClick={handleClaimOffer}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            disabled={claimed}
          >
            {claimed ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Offer Claimed!
              </>
            ) : (
              <>
                <span>Claim This Offer Now</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>

          <div className="promo-features">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <span>Free Shipping</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <span>30-Day Returns</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>

        <div className="promo-visual animate-on-scroll animate-slide-bottom animate-delay-4">
          <div className="discount-tag">
            <span className="discount-amount">50%</span>
            <span className="discount-text">OFF</span>
          </div>
          
          <div className="product-showcase">
            <img 
              src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Summer Collection" 
              className="product-image"
            />
            
            <div className="floating-price original-price">
              <span>$129.99</span>
            </div>
            
            <div className="floating-price sale-price">
              <span>$64.99</span>
            </div>
            
            <div className="sparkle-container">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="sparkle" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    fontSize: `${8 + Math.random() * 8}px`
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff700" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkle-icon lucide-sparkle"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Confetti Effect when claimed */}
      {claimed && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="confetti" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PromoBanner;