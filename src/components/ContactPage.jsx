import React from 'react';
import '../styles.css';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'; // Import icons

const ContactPage = () => {
    return (
        <div>
            <div className="page-content">
                <h1>Contact Us</h1>
                <p>
                    If you have any questions or need assistance, feel free to reach out to us through the following channels:
                </p>
                <ul className="contact-list">
                    <li>
                        <FaEnvelope className="contact-icon" />
                        <a href="mailto:Bytemasters@gmail.com">Bytemasters@gmail.com</a>
                    </li>
                    <li>
                        <FaPhone className="contact-icon" />
                        <a href="tel:+254783386969">+254783386969</a>
                    </li>
                    <li>
                        <FaWhatsapp className="contact-icon" />
                        <a href="https://wa.me/+254783386969">Chat with us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;
