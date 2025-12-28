import { useState, useEffect } from 'react'

function Hero() {
    const [typedText, setTypedText] = useState('')
    const titles = ['Full-Stack Developer', 'ICT Professional', 'Software Engineer', 'Data Analyst']
    const [titleIndex, setTitleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentTitle = titles[titleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setTypedText(currentTitle.slice(0, charIndex + 1))
                setCharIndex(prev => prev + 1)
                if (charIndex + 1 === currentTitle.length) {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                setTypedText(currentTitle.slice(0, charIndex - 1))
                setCharIndex(prev => prev - 1)
                if (charIndex === 0) {
                    setIsDeleting(false)
                    setTitleIndex(prev => (prev + 1) % titles.length)
                }
            }
        }, isDeleting ? 50 : 100)
        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, titleIndex, titles])

    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="floating-shapes">
                    <div className="shape shape-1"><i className="fab fa-php"></i></div>
                    <div className="shape shape-2"><i className="fab fa-python"></i></div>
                    <div className="shape shape-3"><i className="fab fa-js-square"></i></div>
                    <div className="shape shape-4"><i className="fab fa-react"></i></div>
                    <div className="shape shape-5"><i className="fas fa-database"></i></div>
                    <div className="shape shape-6"><i className="fab fa-java"></i></div>
                </div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Martin Kimiti <span className="highlight">Munyua</span></h1>
                    <div className="hero-title-wrapper">
                        <span className="hero-title-static">I'm a</span>
                        <span className="hero-title">{typedText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Versatile ICT professional with 5+ years of experience spanning systems administration,
                        software development, and digital transformation. Building innovative solutions that drive
                        operational excellence.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            <i className="fas fa-code"></i> View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <i className="fas fa-envelope"></i> Contact Me
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/MKings7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/martinkimiti" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:martinkimits@gmail.com"><i className="fas fa-envelope"></i></a>
                        <a href="tel:+254713519832"><i className="fas fa-phone"></i></a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <img src={`${import.meta.env.BASE_URL}martins image.JPG`} alt="Martin Kimiti Munyua" className="profile-image" />
                        <div className="image-border"></div>
                    </div>
                    <div className="experience-badge">
                        <span className="badge-number">5+</span>
                        <span className="badge-text">Years<br />Experience</span>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-indicator">
                <span>Scroll Down</span>
                <i className="fas fa-chevron-down"></i>
            </a>
        </section>
    )
}

export default Hero
