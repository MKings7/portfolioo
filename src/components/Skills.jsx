import { useEffect, useRef } from 'react'

function Skills() {
    const skillsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.skill-progress')
                    bars.forEach(bar => {
                        bar.style.width = bar.dataset.progress + '%'
                    })
                }
            })
        }, { threshold: 0.3 })

        if (skillsRef.current) observer.observe(skillsRef.current)
        return () => observer.disconnect()
    }, [])

    const skillCategories = [
        {
            icon: 'fas fa-code',
            title: 'Programming',
            skills: [
                { name: 'PHP', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'Java', level: 75 },
                { name: 'SQL', level: 88 },
            ]
        },
        {
            icon: 'fas fa-globe',
            title: 'Web Development',
            skills: [
                { name: 'HTML5/CSS3', level: 95 },
                { name: 'React.js', level: 70 },
                { name: 'WordPress', level: 85 },
                { name: 'Laravel', level: 65 },
            ]
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Data Analysis',
            skills: [
                { name: 'Pandas/NumPy', level: 75 },
                { name: 'Matplotlib', level: 70 },
                { name: 'Excel Advanced', level: 90 },
            ]
        },
        {
            icon: 'fas fa-server',
            title: 'Infrastructure',
            skills: [
                { name: 'Windows Server', level: 85 },
                { name: 'Linux', level: 70 },
                { name: 'Networking', level: 88 },
            ]
        }
    ]

    const techIcons = [
        { icon: 'fab fa-php', title: 'PHP' },
        { icon: 'fab fa-js-square', title: 'JavaScript' },
        { icon: 'fab fa-python', title: 'Python' },
        { icon: 'fab fa-java', title: 'Java' },
        { icon: 'fab fa-react', title: 'React' },
        { icon: 'fab fa-html5', title: 'HTML5' },
        { icon: 'fab fa-css3-alt', title: 'CSS3' },
        { icon: 'fab fa-wordpress', title: 'WordPress' },
        { icon: 'fab fa-git-alt', title: 'Git' },
        { icon: 'fab fa-github', title: 'GitHub' },
        { icon: 'fas fa-database', title: 'Database' },
        { icon: 'fab fa-linux', title: 'Linux' },
    ]

    return (
        <section className="skills section" id="skills" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title"><span className="title-number">02.</span> Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div className="skill-category" key={idx}>
                            <div className="category-header">
                                <i className={category.icon}></i>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-items">
                                {category.skills.map((skill, i) => (
                                    <div className="skill-item" key={i}>
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="skill-progress" data-progress={skill.level}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tech-stack">
                    <h3>Technologies I Work With</h3>
                    <div className="tech-icons">
                        {techIcons.map((tech, idx) => (
                            <div className="tech-icon" title={tech.title} key={idx}>
                                <i className={tech.icon}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
