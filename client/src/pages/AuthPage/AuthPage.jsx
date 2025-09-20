import React, { useState, useEffect } from "react";
import "./AuthPage.css"; // Move your <style> content here

export default function Authentication() {
  const [activeTab, setActiveTab] = useState("login");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: false,
    confirm: false,
  });
  const [resetSuccess, setResetSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animations when component mounts
  useEffect(() => {
    const promo = document.querySelector(".promo-content");
    const authContainer = document.querySelector(".auth-container");
    if (promo) promo.style.animation = "slideInLeft 0.8s ease forwards";
    if (authContainer) authContainer.style.animation =
      "slideInRight 0.8s ease forwards";
  }, []);

  // Email validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Login submit
  // Login submit
const handleLogin = async (e) => {
  e.preventDefault();
  const email = e.target["login-email"].value;
  const password = e.target["login-password"].value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!password.trim()) {
    alert("Password is required");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.log("Login response:", data);

    // ✅ store token if server returns it
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    alert("Login successful!");
    // ✅ redirect to dashboard
    window.location.href = "/dashboard";

  } catch (error) {
    console.error("Error logging in:", error);
    alert("Login failed. Please check your credentials.");
  }
};

  // Signup submit
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target["signup-name"].value;
    const email = e.target["signup-email"].value;
    const password = e.target["signup-password"].value;
    const confirm = e.target["signup-confirm-password"].value;

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up:", { name, email });
    alert("Account created successfully! (This is a demo)");
  };

  // Forgot password submit
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target["reset-email"].value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    console.log("Sending reset instructions to:", email);
    setResetSuccess(true);
    setTimeout(() => {
      setShowForgotModal(false);
      setResetSuccess(false);
    }, 3000);
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="header-container">
          <a href="#" className="logo">
            <div className="logo-text">
              Navi<span className="logo-accent">Disha</span>
            </div>
          </a>

          <ul className={`nav-menu ${hamburgerOpen ? "active" : ""}`}>
            <li className="nav-item"><a href="landing_page.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="dashboard.html" className="nav-link">Dashboard</a></li>
            <li className="nav-item"><a href="roadmaps.html" className="nav-link">Roadmaps</a></li>
            <li className="nav-item"><a href="support.html" className="nav-link">Contact</a></li>
          </ul>

          <div
            className={`hamburger ${hamburgerOpen ? "active" : ""}`}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Promo Content */}
        <div className="promo-content">
          <h2 className="promo-title">Plan Your Career Path with Confidence</h2>
          <p className="promo-subtitle">
            Join thousands of students who have discovered their ideal career
            paths with our AI-powered platform
          </p>

          <ul className="features-list">
            <li className="feature-item floating" style={{ animationDelay: "0.2s" }}>
              <div className="feature-icon">
                <i className="fas fa-route"></i>
              </div>
              <div className="feature-text">
                <h4 className="feature-title">Personalized Roadmaps</h4>
                <p className="feature-desc">
                  Custom career paths tailored to your skills and goals
                </p>
              </div>
            </li>
            <li className="feature-item floating" style={{ animationDelay: "0.4s" }}>
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="feature-text">
                <h4 className="feature-title">College Recommendations</h4>
                <p className="feature-desc">
                  Find the best educational opportunities for your career
                </p>
              </div>
            </li>
            <li className="feature-item floating" style={{ animationDelay: "0.6s" }}>
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="feature-text">
                <h4 className="feature-title">Progress Tracking</h4>
                <p className="feature-desc">
                  Monitor your development and stay on track
                </p>
              </div>
            </li>
          </ul>

          <div className="testimonial">
            <p className="testimonial-text">
              CareerAdvisor helped me discover my passion for data science. The
              personalized roadmap made it easy to choose the right courses and
              colleges.
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

        {/* Auth Container */}
        <div className="auth-container">
          <div className="auth-header">
            <a href="#" className="logo">
              <div className="logo-text-login">
                Navi<span className="logo-accent">Disha</span>
              </div>
            </a>
            <p>Sign in to access your personalized career roadmap</p>

            <div className="auth-tabs">
              <div
                className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </div>
              <div
                className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </div>
            </div>
          </div>

          <div className="auth-body">
            {/* Login Form */}
            {activeTab === "login" && (
              <form className="auth-form active" onSubmit={handleLogin}>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="login-email" className="form-input" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword.login ? "text" : "password"}
                      name="login-password"
                      className="form-input"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword({ ...showPassword, login: !showPassword.login })
                      }
                    >
                      <i className={`far ${showPassword.login ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <div className="checkbox-group">
                    <input type="checkbox" id="remember-me" className="checkbox" />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <a href="#" className="forgot-link" onClick={() => setShowForgotModal(true)}>
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>

                <div className="social-divider"><span>Or continue with</span></div>
                <div className="social-buttons">
                  <button type="button" className="btn btn-google">
                    <i className="fab fa-google icon-left"></i> Google
                  </button>
                  <button type="button" className="btn btn-facebook">
                    <i className="fab fa-facebook-f icon-left"></i> Facebook
                  </button>
                </div>
              </form>
            )}

            {/* Signup Form */}
            {activeTab === "signup" && (
              <form className="auth-form active" onSubmit={handleSignup}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="signup-name" className="form-input" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="signup-email" className="form-input" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword.signup ? "text" : "password"}
                      name="signup-password"
                      className="form-input"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword({ ...showPassword, signup: !showPassword.signup })
                      }
                    >
                      <i className={`far ${showPassword.signup ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword.confirm ? "text" : "password"}
                      name="signup-confirm-password"
                      className="form-input"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword({ ...showPassword, confirm: !showPassword.confirm })
                      }
                    >
                      <i className={`far ${showPassword.confirm ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
                <div className="social-divider"><span>Or sign up with</span></div>
                <div className="social-buttons">
                  <button type="button" className="btn btn-google">
                    <i className="fab fa-google icon-left"></i> Google
                  </button>
                  <button type="button" className="btn btn-facebook">
                    <i className="fab fa-facebook-f icon-left"></i> Facebook
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Reset Password</h3>
              <button className="close-modal" onClick={() => setShowForgotModal(false)}>
                &times;
              </button>
            </div>
            <p>Enter your email address and we'll send you instructions to reset your password.</p>
            <form id="forgot-password-form" onSubmit={handleForgotPassword}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" name="reset-email" className="form-input" placeholder="Enter your email" required />
              </div>
              <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
            {resetSuccess && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i> Password reset instructions have been sent to your email.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
