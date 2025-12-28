import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:martinkimits@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
        window.location.href = mailtoLink
        setStatus('Opening email client...')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title"><span className="title-number">06.</span> Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Work Together</h3>
                        <p>I'm currently available for freelance projects, full-time opportunities, or just a friendly chat about technology. Feel free to reach out!</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <div className="contact-text">
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:martinkimits@gmail.com">martinkimits@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                                <div className="contact-text">
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:+254713519832">+254 713 519 832</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="contact-text">
                                    <span className="contact-label">Location</span>
                                    <span>Nairobi, Kenya</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-socials">
                            <a href="https://github.com/MKings7" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/martinkimiti" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:martinkimits@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Discussion" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                <i className="fas fa-paper-plane"></i> Send Message
                            </button>
                            {status && <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--accent)' }}>{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
