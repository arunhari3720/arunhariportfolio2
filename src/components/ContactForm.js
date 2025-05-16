import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';
import './styles.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // Initialize EmailJS with your User ID
    // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
    init("Cyu-EMcxYgtdbaiko");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Sending the email
        send('service_y2i5kks', 'template_zer3koi', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage('Your message has been sent successfully!');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatusMessage('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsSending(false);
                // Clear form only if the message is successfully sent
                if (statusMessage.startsWith('Your message')) {
                    setFormData({ name: '', email: '', message: '' });
                }
            });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default ContactForm;