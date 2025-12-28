function Education() {
    const educationData = [
        {
            icon: 'fas fa-graduation-cap',
            title: 'Diploma in Information Technology',
            institution: 'Kisii University',
            date: '2018 – 2019',
            description: 'Network Administration, Database Management, Web Development, System Analysis & Design'
        },
        {
            icon: 'fas fa-certificate',
            title: 'Certificate in Web Design',
            institution: 'Zalego Institute of Technology and Innovation',
            date: 'Dec 2016 – Jan 2018',
            description: 'HTML, CSS, JavaScript, PHP, MySQL, Responsive Web Design, UI Design'
        },
        {
            icon: 'fas fa-school',
            title: 'Kenya Certificate of Secondary Education',
            institution: 'J.G. Kiereini Secondary School',
            date: '2014 – 2017',
            description: 'Mean Grade: C (Plain)'
        }
    ]

    const learningItems = [
        { icon: 'fab fa-python', text: 'Python for Data Science & Machine Learning' },
        { icon: 'fas fa-chart-pie', text: 'Data Analysis & Visualization (Pandas, NumPy)' },
        { icon: 'fas fa-cloud', text: 'Cloud Computing Fundamentals (AWS/Azure)' },
        { icon: 'fas fa-database', text: 'Advanced Database Optimization' }
    ]

    return (
        <section className="education section" id="education">
            <div className="container">
                <h2 className="section-title"><span className="title-number">05.</span> Education & Certifications</h2>
                <div className="education-grid">
                    {educationData.map((edu, idx) => (
                        <div className="education-card" key={idx}>
                            <div className="education-icon"><i className={edu.icon}></i></div>
                            <div className="education-content">
                                <h3>{edu.title}</h3>
                                <span className="education-institution">{edu.institution}</span>
                                <span className="education-date">{edu.date}</span>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="certifications">
                    <h3 className="subsection-title">Certifications & Badges</h3>
                    <div className="cert-grid">
                        <div className="cert-card">
                            <img src="/martin-munyua-canva-essentials-badge.png" alt="Canva Essentials Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Canva Essentials</h4>
                                <p>Digital Design Fundamentals</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src="/martin-munyua-graphic-design-essentials-badge.png" alt="Graphic Design Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Graphic Design Essentials</h4>
                                <p>Canva Design Certification</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src="/martin-munyua-ai-in-the-classroom-badge.png" alt="AI in the Classroom Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>AI in the Classroom</h4>
                                <p>AI in Education Certification</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src="/martin-munyua-teacher-essentials-badge.png" alt="Teacher Essentials Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Teacher Essentials</h4>
                                <p>Teaching Excellence Certification</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="learning">
                    <h3 className="subsection-title">Currently Learning</h3>
                    <div className="learning-items">
                        {learningItems.map((item, idx) => (
                            <div className="learning-item" key={idx}>
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
