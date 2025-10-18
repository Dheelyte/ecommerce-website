// About.js
import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  const brandStory = {
    title: "Our Story",
    subtitle: "From a small idea to a fashion destination",
    description: "Founded in 2015, StyleHub began as a passion project between two friends who believed that everyone deserves access to quality, stylish clothing without breaking the bank. What started as a small boutique in downtown Seattle has grown into a beloved brand known for its commitment to quality, sustainability, and inclusive fashion.",
    stats: [
      { number: "8", label: "Years of Excellence", suffix: "+" },
      { number: "50", label: "Countries Served", suffix: "+" },
      { number: "500", label: "Team Members", suffix: "+" },
      { number: "1M", label: "Happy Customers", suffix: "+" }
    ]
  };

  const timeline = [
    {
      year: "2015",
      title: "Humble Beginnings",
      description: "Opened our first boutique in Seattle with a simple mission: make great fashion accessible to everyone.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-1"
    },
    {
      year: "2017",
      title: "Going Digital",
      description: "Launched our ecommerce platform, bringing StyleHub to customers across the United States.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-2"
    },
    {
      year: "2019",
      title: "Sustainable Shift",
      description: "Committed to sustainability by introducing our eco-friendly collection and ethical sourcing practices.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-3"
    },
    {
      year: "2021",
      title: "Global Reach",
      description: "Expanded internationally, now serving customers in over 50 countries worldwide.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-4"
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our AR try-on feature and AI style assistant, revolutionizing the online shopping experience.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-4"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every garment is carefully crafted and rigorously tested to ensure it meets our high standards.",
      icon: "🎯",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-1"
    },
    {
      title: "Sustainability",
      description: "We're committed to reducing our environmental impact through ethical sourcing, sustainable materials, and responsible manufacturing.",
      icon: "🌱",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-2"
    },
    {
      title: "Inclusivity",
      description: "Fashion is for everyone. We offer extended sizing and diverse representation in all our campaigns and collections.",
      icon: "🤝",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-3"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      quote: "Fashion should empower, not intimidate.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-1"
    },
    {
      name: "Marcus Johnson",
      role: "Co-Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      quote: "Every piece tells a story. We're just helping you write yours.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-2"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
      quote: "Beautiful fashion shouldn't cost the earth.",
      animation: "animate-on-scroll animate-slide-bottom animate-delay-3"
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Brand Story */}
        <div className="brand-story">
          <div className="story-content">
            <h2 className="about-main-title animate-on-scroll animate-slide-bottom animate-delay-4">{brandStory.title}</h2>
            <p className="story-subtitle">{brandStory.subtitle}</p>
            <p className="story-description">{brandStory.description}</p>
            
            <div className="story-stats animate-on-scroll animate-slide-bottom animate-delay-2">
              {brandStory.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">
                    {stat.number}<span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="story-visual">
            <div className="floating-element element-1">
              <div className="floating-icon">✨</div>
              <p>Quality Craftsmanship</p>
            </div>
            <div className="floating-element element-2">
              <div className="floating-icon">🌍</div>
              <p>Global Community</p>
            </div>
            <div className="floating-element element-3">
              <div className="floating-icon">❤️</div>
              <p>Customer Love</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <h2 className="about-main-title">Our Journey</h2>
          <p className="section-subtitle">Milestones that shaped who we are today</p>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item ${index === activeTimelineItem ? 'active' : ''} ${item.animation}`}
                onClick={() => setActiveTimelineItem(index)}
              >
                <div className="timeline-marker">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="values-section">
          <h2 className="about-main-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`value-card ${value.animation}`}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="team-section">
          <h2 className="about-main-title">Meet Our Leaders</h2>
          <p className="section-subtitle">The passionate people behind StyleHub</p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className={`team-card ${member.animation}`}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <p className="team-quote">"{member.quote}"</p>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <div className="cta-content">
            <h2 className="cta-title">Join Our Story</h2>
            <p className="cta-subtitle">Become part of our growing community of fashion enthusiasts</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Shop Collection</button>
              <button className="cta-button secondary">Learn More</button>
            </div>
          </div>
          {/* Animated Wave */}
            <div className="cta-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;