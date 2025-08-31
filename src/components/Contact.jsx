import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.scss';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(
      'service_lfvxo5w',     // replace with your EmailJS service ID
      'template_25qosyg',    // replace with your EmailJS template ID
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'ADnFjpGgvXnA7jc-F'         // replace with your EmailJS public user ID
    )
    .then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    })
    .catch(err => {
      console.error(err);
      alert('Something went wrong!');
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Let's Talk?</h2>
      <p className="subtext">
        ☕ Whether it’s a role, a project, or just a good reason to talk over coffee — I’m in. Let’s connect!
     </p>


      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>

      {submitted && <p className="success">Thanks! I’ll get back to you soon 🚀</p>}
    </section>
  );
};

export default Contact;
