
import React, { useState, useRef } from 'react';
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';


function validateEmail(email) {
  // Simple email regex
  return /^\S+@\S+\.\S+$/.test(email);
}

function ContactForm() {
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "First name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email address.";
    if (!msg.trim()) newErrors.msg = "Message is required.";
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors in the form.");
      return;
    }
    setLoading(true);
    const templateParams = {
      name: `${name} ${lname}`.trim(),
      message: msg,
      email: email,
      time: new Date().toLocaleString(),
    };
    emailjs
      .send(
        'service_lx7k9qb',
        'template_2ftpukd',
        templateParams,
        'lMpZU1HRUnumN1wOZ'
      )
      .then((result) => {
        setLoading(false);
        toast.success("Message sent successfully!");
        setName("");
        setLName("");
        setEmail("");
        setMsg("");
        setErrors({});
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="name-container">
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="from_name"
                value={name}
                placeholder="First Name"
                onChange={(e) => setName(e.target.value)}
                required
                aria-invalid={!!errors.name}
                aria-describedby="firstNameError"
                autoComplete="given-name"
              />
              {errors.name && (
                <div className="form-error" id="firstNameError">{errors.name}</div>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="from_lastname"
                value={lname}
                placeholder="Last Name"
                onChange={(e) => setLName(e.target.value)}
                autoComplete="family-name"
              />
            </div>
          </div>
          <div>
            <input
              type="email"
              name="from_email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={!!errors.email}
              aria-describedby="emailError"
              autoComplete="email"
            />
            {errors.email && (
              <div className="form-error" id="emailError">{errors.email}</div>
            )}
          </div>
          <div>
            <textarea
              name="message"
              value={msg}
              placeholder="Message"
              rows={3}
              onChange={(e) => setMsg(e.target.value)}
              required
              aria-invalid={!!errors.msg}
              aria-describedby="msgError"
            />
            {errors.msg && (
              <div className="form-error" id="msgError">{errors.msg}</div>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              type="submit"
              className="button"
              value={loading ? "Sending..." : "Send"}
              disabled={loading}
              style={{ minWidth: 100 }}
            />
            {loading && <LoadingSpinner size="small" color="#fff" />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm
