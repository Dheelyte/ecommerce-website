// Testimonials.js
import { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      rating: 5,
      content: "The quality of clothing here is exceptional. I've been recommending StyleHub to all my followers. Their seasonal collections are always on point!",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 5,
      content: "As someone who values both style and comfort, I'm impressed by how StyleHub balances both. The materials are premium and the designs are timeless.",
      featured: false
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lifestyle Blogger",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 4,
      content: "The customer service is outstanding! They helped me choose the perfect outfit for my event, and I received so many compliments. Will definitely shop again!",
      featured: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 5,
      content: "I'm not much of a fashion person, but StyleHub makes it easy to look good. Their style recommendations are always perfect for any occasion.",
      featured: false
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 5,
      content: "The attention to detail in their clothing is remarkable. From the stitching to the fabric choice, everything feels premium and well-thought-out.",
      featured: true
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title animate-on-scroll animate-slide-bottom animate-delay-2">What Our Customers Say</h2>
          <p className="testimonials-subtitle">Join thousands of satisfied customers who trust StyleHub for their fashion needs</p>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-stats">
            <div className="testimonial-stat-card">
              <div className="testimonial-stat-number">4.9/5</div>
              <div className="testimonial-stat-label">Average Rating</div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                          stroke="#F59E0B" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="testimonial-stat-card">
              <div className="testimonial-stat-number">10K+</div>
              <div className="testimonial-stat-label">Happy Customers</div>
            </div>
            
            <div className="testimonial-stat-card">
              <div className="testimonial-stat-number">98%</div>
              <div className="testimonial-stat-label">Would Recommend</div>
            </div>
          </div>

          <div className="testimonials-slider">
            <div className="testimonial-slider-container">
              <div 
                className="testimonial-slider-track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className={`testimonial-card ${index === activeIndex ? 'testimonial-active' : ''} ${testimonial.featured ? 'testimonial-featured' : ''}`}
                  >
                    <div className="testimonial-card-content">
                      <div className="testimonial-card-header">
                        <div className="testimonial-avatar">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                          {testimonial.featured && (
                            <span className="testimonial-featured-badge">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                                      stroke="#F59E0B" 
                                      strokeWidth="2" 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round"/>
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="testimonial-user-info">
                          <h4 className="testimonial-user-name">{testimonial.name}</h4>
                          <p className="testimonial-user-role">{testimonial.role}</p>
                        </div>
                        <div className="testimonial-rating">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill={i < testimonial.rating ? "#F59E0B" : "none"} 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                                    stroke="#F59E0B" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <p className="testimonial-text">"{testimonial.content}"</p>
                      
                      <div className="testimonial-card-footer">
                        <div className="testimonial-social-proof">
                          <div className="testimonial-social-likes">
                            <span className="testimonial-like-count">24</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 8H15.5C15.5 6 14.5 4 13 4C11.62 4 10.5 5.08 10.5 6.5C10.5 7.92 11.62 9 13 9H20C20.5304 9 21.0391 8.78929 21.4142 8.41421C21.7893 8.03914 22 7.53043 22 7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5V8Z" 
                                    stroke="#64748B" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                              <path d="M4 8H8V20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8Z" 
                                    stroke="#64748B" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="testimonial-social-comments">
                            <span className="testimonial-comment-count">8</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
                                    stroke="#64748B" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonial-slider-controls">
              <button className="testimonial-control-btn testimonial-prev" onClick={prevTestimonial}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="testimonial-slider-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`testimonial-dot ${index === activeIndex ? 'testimonial-dot-active' : ''}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
              
              <button className="testimonial-control-btn testimonial-next" onClick={nextTestimonial}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="testimonials-cta">
          <h3>Ready to experience the difference?</h3>
          <button className="testimonial-cta-button">
            Shop Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;