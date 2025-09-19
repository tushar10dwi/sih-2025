import React, { useState, useEffect } from "react";
import "./LandingPage.css";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Scroll animations (IntersectionObserver)
    const fadeElements = document.querySelectorAll(".fade-in");
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -100px 0px" };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    fadeElements.forEach((el) => appearOnScroll.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      fadeElements.forEach((el) => appearOnScroll.unobserve(el));
    };
  }, []);

  return (
    <>
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="container header-container">
          <a href="/" className="logo">
            <div className="logo-text">
              Navi<span className="logo-accent">Disha</span>
            </div>
          </a>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/dashboard" className="nav-link">Dashboard</a></li>
            <li className="nav-item"><a href="/roadmaps" className="nav-link">Roadmaps</a></li>
            <li className="nav-item"><a href="#key-features" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li className="nav-item"><a href="/support" className="nav-link">Contact</a></li>
            <div className="mobile-auth">
              <a href="/auth" className="btn btn-login">Login</a>
              <a href="/auth" className="btn btn-primary">Sign Up</a>
            </div>
          </ul>

          <div className="auth-buttons">
            <a href="/auth" className="btn btn-login">Login</a>
            <a href="/auth" className="btn btn-primary">Sign Up</a>
          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Plan Your Future with Confidence</h1>
            <p className="hero-subtitle">
              AI-powered personalized career guidance — from aptitude quizzes to college roadmaps.
            </p>
            <div className="hero-buttons">
              <a href="/auth" className="btn btn-accent">Get Started</a>
              <a href="#value-prop" className="btn btn-secondary">Explore Features</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-prop" className="value-prop">
        <div className="container">
          <h2 className="section-title">Why Choose NaviDisha?</h2>
          <p className="section-subtitle">
            We provide cutting-edge tools and insights to help students make informed career decisions
          </p>

          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-route"></i></div>
              <h3 className="feature-title">Personalized Roadmaps</h3>
              <p className="feature-desc">Custom career paths tailored to your skills, interests, and goals</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3 className="feature-title">Exam & College Recommendations</h3>
              <p className="feature-desc">Get matched with the best educational opportunities for your career path</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
              <h3 className="feature-title">Progress Tracking</h3>
              <p className="feature-desc">Monitor your development and stay on track with your career goals</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-lock"></i></div>
              <h3 className="feature-title">Secure & Trusted Platform</h3>
              <p className="feature-desc">Your data is protected with enterprise-grade security measures</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-users"></i></div>
              <h3 className="feature-title">Community & Mentorship</h3>
              <p className="feature-desc">Connect with mentors and peers to gain real-world insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Start your career journey in three simple steps</p>

          <div className="steps">
            <div className="step fade-in">
              <div className="step-number">1</div>
              <h3 className="step-title">Sign Up</h3>
              <p className="step-desc">Create your free account in less than a minute</p>
            </div>
            <div className="step fade-in">
              <div className="step-number">2</div>
              <h3 className="step-title">Take Quiz</h3>
              <p className="step-desc">Complete our comprehensive aptitude assessment</p>
            </div>
            <div className="step fade-in">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Your Roadmap</h3>
              <p className="step-desc">Receive your personalized career development plan</p>
            </div>
          </div>

          <div className="steps-cta">
            <a href="/auth" className="btn btn-accent">Start Your Journey</a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="key-features" className="key-features">
        <div className="container">
          <h2 className="section-title">Key Features of the Platform</h2>
          <p className="section-subtitle">
            Comprehensive tools designed to guide you through every step of your career journey
          </p>

          <div className="features-grid-large">
            <div className="feature-card-large fade-in">
              <div className="feature-icon-large"><i className="fas fa-brain"></i></div>
              <h3 className="feature-title-large">Aptitude & Interest Quiz</h3>
              <p className="feature-desc-large">Comprehensive assessment to identify your strengths and interests, providing stream and course suggestions.</p>
            </div>
            <div className="feature-card-large fade-in">
              <div className="feature-icon-large"><i className="fas fa-project-diagram"></i></div>
              <h3 className="feature-title-large">Course-to-Career Mapping</h3>
              <p className="feature-desc-large">Visual flowcharts showing how different courses lead to various career opportunities and growth paths.</p>
            </div>
            <div className="feature-card-large fade-in">
              <div className="feature-icon-large"><i className="fas fa-map-marker-alt"></i></div>
              <h3 className="feature-title-large">Nearby College Directory</h3>
              <p className="feature-desc-large">Comprehensive location-wise data on colleges, courses offered, admission criteria, and placement records.</p>
            </div>
            <div className="feature-card-large fade-in">
              <div className="feature-icon-large"><i className="fas fa-bell"></i></div>
              <h3 className="feature-title-large">Timeline Tracker & Alerts</h3>
              <p className="feature-desc-large">Never miss important deadlines with personalized reminders for admissions, exams, and scholarships.</p>
            </div>
            <div className="feature-card-large fade-in">
              <div className="feature-icon-large"><i className="fas fa-chart-pie"></i></div>
              <h3 className="feature-title-large">Personalized Dashboard</h3>
              <p className="feature-desc-large">AI-based recommendations and progress tracking in a centralized, easy-to-navigate interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from students who transformed their careers with our platform
          </p>

          <div className="testimonial-grid">
            <div className="testimonial-card fade-in">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  NaviDisha helped me discover my passion for data science. The personalized roadmap made it easy to choose the right courses and colleges.
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">RP</div>
                  <div className="author-info">
                    <h4>Rahul Patel</h4>
                    <p>Data Scientist at TechCorp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  The aptitude test revealed strengths I didn't know I had. Thanks to CareerAdvisor, I'm now pursuing my dream career in architecture.
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">PD</div>
                  <div className="author-info">
                    <h4>Priya Desai</h4>
                    <p>Architecture Student</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  The scholarship alerts feature alone was worth it! I received notifications for three scholarships I qualified for and ended up securing two of them.
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">AK</div>
                  <div className="author-info">
                    <h4>Amit Kumar</h4>
                    <p>Engineering Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build Your Future?</h2>
          <p className="cta-subtitle">
            Join thousands of students who have discovered their ideal career paths with our AI-powered platform
          </p>
          <a href="/auth" className="btn btn-accent">Sign Up for Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <div className="footer-logo-text">NaviDisha</div>
              </div>
              <p className="footer-desc">
                AI-powered career guidance platform helping students make informed decisions about their future.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>

            <div className="footer-links-container">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/"><i className="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> About Us</a></li>
                <li><a href="#key-features"><i className="fas fa-chevron-right"></i> Features</a></li>
                <li><a href="#testimonials"><i className="fas fa-chevron-right"></i> Testimonials</a></li>
                <li><a href="/support"><i className="fas fa-chevron-right"></i> Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-container">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-links">
                <li><a href="/support"><i className="fas fa-chevron-right"></i> FAQ</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Privacy Policy</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Terms of Service</a></li>
                <li><a href="/support"><i className="fas fa-chevron-right"></i> Help Center</a></li>
              </ul>
            </div>

            <div className="footer-links-container">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Jammu & Kashmir</a></li>
                <li><a href="mailto:info@navidisha.com"><i className="fas fa-envelope"></i> info@navidisha.com</a></li>
                <li><a href="tel:+911234567890"><i className="fas fa-phone-alt"></i> +91 12345 67890</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 NaviDisha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
