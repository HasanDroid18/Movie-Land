import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css"; // We'll add a separate CSS file for styling

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅️
      </button>
      <br />
      <br />
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner in innovative tech solutions.</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At InnovateX, we are dedicated to delivering cutting-edge software
          that empowers businesses to reach new heights. Our mission is to
          simplify complex problems through technology and make a meaningful
          impact on the world.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Doe"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Jane Smith"
            />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Michael Johnson"
            />
            <h3>Michael Johnson</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@innovatex.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Innovation Drive, Tech City</p>
      </section>
    </div>
  );
}
