function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-text">&lt;MK/&gt;</span>
                        <p>Building digital solutions that make a difference.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-socials">
                        <a href="https://github.com/MKings7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/martinkimiti" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:martinkimits@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Martin Kimiti Munyua. All rights reserved.</p>
                    <p>Designed & Built with <i className="fas fa-heart"></i> in Kenya</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
