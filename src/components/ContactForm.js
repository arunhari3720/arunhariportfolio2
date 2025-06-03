import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';
import './contactform.css';
import './styles.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // Initialize EmailJS with your User ID
    init("Cyu-EMcxYgtdbaiko"); // Replace with your actual EmailJS user ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Update state with form values
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsSending(true); // Set sending state to true

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
                setIsSending(false); // Reset sending state
                // Clear form if the message was successfully sent
                if (statusMessage.startsWith('Your message')) {
                    setFormData({ name: '', email: '', message: '' });
                }
            });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange} // Handle changes
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange} // Handle changes
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange} // Handle changes
                    required
                />
                <button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {statusMessage && <p>{statusMessage}</p>} {/* Display status messages */}
        </div>
    );
};

export default ContactForm;