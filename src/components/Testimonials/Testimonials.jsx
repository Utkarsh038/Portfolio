import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Professor/Mentor Name",
    role: "Computer Science Professor",
    company: "Your University",
    image: "/images/testimonial1.jpg",
    text: "Utkarsh demonstrates exceptional problem-solving skills and a deep understanding of algorithms.",
    rating: 5
  },
  {
    name: "Project Collaborator",
    role: "Full Stack Developer",
    company: "Tech Startup",
    image: "/images/testimonial2.jpg", 
    text: "Great team player with strong technical skills in React and Python.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What People Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
