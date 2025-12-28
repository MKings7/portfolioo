import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#downloads', label: 'Downloads' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <span className="logo-text">&lt;MK/&gt;</span>
                </a>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="nav-actions">
                    <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
