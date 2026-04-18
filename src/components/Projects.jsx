function Projects() {
    const projects = [
        {
            icon: 'fas fa-school',
            title: 'School Management System',
            description: 'Comprehensive web application for managing student records, attendance tracking, academic performance analysis, and administrative workflows.',
            tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap']
        },
        {
            icon: 'fas fa-chart-bar',
            title: 'Automated Reporting Dashboard',
            description: 'Python-powered dashboard for automated data reporting, attendance tracking, and behavior monitoring with real-time analytics.',
            tech: ['Python', 'Pandas', 'Google Apps Script', 'SQL']
        },
        {
            icon: 'fas fa-users',
            title: 'Parent Portal',
            description: 'WordPress-based parent engagement platform with real-time updates and student progress tracking. Increased engagement by 45%.',
            tech: ['WordPress', 'PHP', 'MySQL', 'REST API']
        },
        {
            icon: 'fas fa-file-pdf',
            title: 'KJSEA Results Automation',
            description: 'Selenium-powered Python script for automating result slip downloads, PDF signing, and automated email distribution.',
            tech: ['Python', 'Selenium', 'PyPDF2', 'SMTP']
        },
        {
            icon: 'fas fa-boxes',
            title: 'Inventory Management System',
            description: 'Database-driven inventory and asset tracking system with usage logging, stock deduction, and reporting capabilities.',
            tech: ['PHP', 'MySQL', 'JavaScript', 'AJAX']
        },
        {
            icon: 'fas fa-ticket-alt',
            title: 'IT Support Ticketing System',
            description: 'Glassmorphism UI ticketing system with priority queues, assignment workflows, and email notifications. Reduced backlog by 60%.',
            tech: ['PHP', 'React', 'MySQL', 'Next.js']
        },
        {
            icon: 'fas fa-bullseye',
            title: 'Staff KPI Appraisal System',
            description: 'Comprehensive performance management platform with goal-setting, tracking, and multi-level approval workflows for staff evaluations.',
            tech: ['PHP', 'MySQL', 'JavaScript', 'RBAC']
        },
        {
            icon: 'fas fa-book-reader',
            title: 'Staff Learning Management System',
            description: 'Interactive training platform allowing staff to undergo internal courses, track learning progress, and earn certifications.',
            tech: ['PHP', 'React', 'MySQL', 'LMS']
        }
    ]

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title"><span className="title-number">04.</span> Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-image">
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href="https://github.com/MKings7" target="_blank" rel="noopener noreferrer" className="project-link" title="View Code">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project-icon"><i className={project.icon}></i></div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projects-cta">
                    <a href="https://github.com/MKings7" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        <i className="fab fa-github"></i> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
