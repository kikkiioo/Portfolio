import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.scss';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
  
    emailjs.send(
      'service_lfvxo5w',
      'template_25qosyg',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'ADnFjpGgvXnA7jc-F'
    )
    .then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    })
    .catch(err => {
      console.error(err);
      alert('Something went wrong!');
    })
    .finally(() => {
      setLoading(false);
    });
  };
  
  const handleClosePopup = () => {
    setSubmitted(false);
    setLoading(false);
  };
  

  return (
    <section className="contact" id="contact">
      <h2>Let's Talk?</h2>
      <p className="subtext">
         Whether it’s a role, a project, or just a good reason to talk over coffee — I’m in. Let’s connect!☕
     </p>


      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>

      {loading && (
        <div className="popup loading">
          <div className="popup-content">
            <p>Sending your message… ⏳</p>
          </div>
        </div>
      )}

      {submitted && !loading && (
        <div className="popup success">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>×</button>
            <p>Thanks! I’ll get back to you soon 🚀</p>
          </div>
        </div>
      )}

    </section>

    
  );
};

export default Contact;
