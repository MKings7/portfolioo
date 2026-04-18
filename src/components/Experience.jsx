function Experience() {
    const experiences = [
        {
            title: 'ICT Coordinator & Software Developer',
            company: 'Chantilly Schools, Nairobi',
            date: 'March 2019 – Present',
            icon: 'fas fa-briefcase',
            achievements: [
                {
                    category: 'Software Development',
                    icon: 'fas fa-code',
                    items: [
                        'Built web applications using PHP, JavaScript serving 300+ students',
                        'Created automated dashboards with Python & Google Apps Script',
                        'Deployed parent portal increasing engagement by 45%',
                        'Completed 10+ paid development projects'
                    ]
                },
                {
                    category: 'Infrastructure',
                    icon: 'fas fa-network-wired',
                    items: [
                        'Upgraded network from 10Mbps to 300Mbps (3000% improvement)',
                        'Managed Starlink with 99.2% uptime across 3 buildings',
                        'Administered Active Directory & Google Workspace'
                    ]
                },
                {
                    category: 'Key Achievements',
                    icon: 'fas fa-chart-line',
                    items: [
                        'Managed KES 1.2M+ ICT modernization project',
                        'Conducted data analysis and provided comprehensive reports for stakeholders',
                        'Reduced IT ticket backlog by 60%',
                        'Zero cybersecurity incidents in 5 years'
                    ]
                }
            ],
            tags: ['PHP', 'Python', 'JavaScript', 'MySQL', 'WordPress', 'React', 'Selenium']
        },
        {
            title: 'Freelance Programmer & Coding Instructor',
            company: 'Independent / Freelance',
            date: 'March 2017 – Present',
            icon: 'fas fa-laptop-code',
            achievements: [
                {
                    category: 'Freelance IT Projects',
                    icon: 'fas fa-globe',
                    items: [
                        'Developed custom web solutions including "MMS Solutions", "Drink Water" systems, and more (view GitHub for full portfolio)',
                        'Engineered full-stack applications tailored to direct client specifications and performance needs',
                        'Delivered high-quality student projects to aid academic coursework and practical understanding'
                    ]
                },
                {
                    category: 'Tech Education & Mentorship',
                    icon: 'fas fa-chalkboard-teacher',
                    items: [
                        'Taught fundamental and advanced coding concepts to students and aspiring developers',
                        'Mentored students on best practices, code architecture, and modern tech stacks',
                        'Reviewed code, explained debugging techniques, and guided students from zero to deployment'
                    ]
                }
            ],
            tags: ['Web Development', 'Teaching', 'Mentoring', 'Open Source', 'Full-Stack', 'GitHub']
        }
    ]

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <h2 className="section-title"><span className="title-number">03.</span> Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker"><i className={exp.icon}></i></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.title}</h3>
                                    <span className="timeline-company">{exp.company}</span>
                                    <span className="timeline-date">{exp.date}</span>
                                </div>
                                <div className="timeline-body">
                                    {exp.achievements.map((section, idx) => (
                                        <div key={idx}>
                                            <h4><i className={section.icon}></i> {section.category}</h4>
                                            <ul>
                                                {section.items.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="timeline-tags">
                                    {exp.tags.map((tag, idx) => <span className="tag" key={idx}>{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
