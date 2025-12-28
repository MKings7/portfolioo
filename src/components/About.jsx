import { useEffect, useRef } from 'react'

function About() {
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number')
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.count)
                        let current = 0
                        const increment = target / 50
                        const timer = setInterval(() => {
                            current += increment
                            if (current >= target) {
                                counter.textContent = target + '+'
                                clearInterval(timer)
                            } else {
                                counter.textContent = Math.floor(current)
                            }
                        }, 30)
                    })
                    observer.disconnect()
                }
            })
        }, { threshold: 0.5 })

        if (statsRef.current) observer.observe(statsRef.current)
        return () => observer.disconnect()
    }, [])

    const stats = [
        { icon: 'fas fa-code', count: 10, label: 'Projects' },
        { icon: 'fas fa-users', count: 300, label: 'Users Served' },
        { icon: 'fas fa-chalkboard-teacher', count: 100, label: 'Students Trained' },
        { icon: 'fas fa-shield-alt', count: 0, label: 'Security Incidents' },
    ]

    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title"><span className="title-number">01.</span> About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a passionate <strong>Full-Stack Developer</strong> and <strong>ICT Coordinator</strong>
                            based in <span className="highlight-text">Nairobi, Kenya</span>.
                        </p>
                        <p>
                            At <strong>Chantilly Schools</strong>, I've built custom web applications serving 300+ students,
                            implemented network upgrades improving speeds by 3000%, and led digital transformation initiatives
                            reducing paper-based processes by 40%.
                        </p>
                        <p>
                            Currently diving deep into <strong>Data Science</strong>, <strong>Machine Learning</strong>,
                            and <strong>Cloud Computing</strong> to stay at the forefront of technology.
                        </p>
                        <div className="about-details">
                            <div className="detail-item"><i className="fas fa-map-marker-alt"></i><span>Nairobi, Kenya</span></div>
                            <div className="detail-item"><i className="fas fa-briefcase"></i><span>Available for Projects</span></div>
                            <div className="detail-item"><i className="fas fa-graduation-cap"></i><span>Continuous Learner</span></div>
                        </div>
                    </div>
                    <div className="about-stats" ref={statsRef}>
                        {stats.map((stat, index) => (
                            <div className="stat-card" key={index}>
                                <div className="stat-icon"><i className={stat.icon}></i></div>
                                <div className="stat-number" data-count={stat.count}>0</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
