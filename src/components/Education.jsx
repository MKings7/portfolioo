function Education() {
    const educationData = [
        {
            icon: 'fas fa-user-graduate',
            title: 'Bachelor of Science in Information Technology',
            institution: 'University',
            date: '2019 – 2023',
            description: 'Software Development, Database Systems, Network Security, Project Management'
        },
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
        }
    ]

    const programmingSkills = [
        { icon: 'fab fa-react', name: 'React', color: '#61dafb' },
        { icon: 'fab fa-php', name: 'PHP', color: '#777bb4' },
        { icon: 'fab fa-js-square', name: 'JavaScript', color: '#f7df1e' },
        { icon: 'fab fa-python', name: 'Python', color: '#3776ab' },
        { icon: 'fab fa-java', name: 'Java', color: '#ed8b00' },
        { icon: 'fab fa-html5', name: 'HTML5', color: '#e34f26' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', color: '#1572b6' },
        { icon: 'fas fa-database', name: 'MySQL', color: '#4479a1' },
        { icon: 'fab fa-node-js', name: 'Node.js', color: '#339933' },
        { icon: 'fab fa-git-alt', name: 'Git', color: '#f05032' },
        { icon: 'fab fa-wordpress', name: 'WordPress', color: '#21759b' },
        { icon: 'fab fa-bootstrap', name: 'Bootstrap', color: '#7952b3' },
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
                    <h3 className="subsection-title">Programming Skills & Technologies</h3>
                    <div className="programming-badges">
                        {programmingSkills.map((skill, idx) => (
                            <div className="prog-badge" key={idx} style={{ '--badge-color': skill.color }}>
                                <i className={skill.icon}></i>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="certifications">
                    <h3 className="subsection-title">Certifications & Badges</h3>
                    <div className="cert-grid">
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}martin-munyua-canva-essentials-badge.png`} alt="Canva Essentials Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Canva Essentials</h4>
                                <p>Digital Design Fundamentals</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}martin-munyua-graphic-design-essentials-badge.png`} alt="Graphic Design Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Graphic Design Essentials</h4>
                                <p>Canva Design Certification</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}martin-munyua-ai-in-the-classroom-badge.png`} alt="AI in the Classroom Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>AI in the Classroom</h4>
                                <p>AI in Education Certification</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}martin-munyua-teacher-essentials-badge.png`} alt="Teacher Essentials Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Teacher Essentials</h4>
                                <p>Teaching Excellence Certification</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}GEMINI CERTIFIED EDUCATOR.png`} alt="Gemini Certified Educator Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Gemini Certified Educator</h4>
                                <p>Gemini AI Education Certification</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}GEMINI CERTIFIED FOR FACULTY.png`} alt="Gemini Certified for Faculty Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Gemini Certified for Faculty</h4>
                                <p>Gemini AI Higher Education</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}GOOGLE LEVEL ONE EDUCATOR.png`} alt="Google Certified Educator Level 1 Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Google Certified Educator L1</h4>
                                <p>Google Tools Integration</p>
                            </div>
                        </div>
                        <div className="cert-card">
                            <img src={`${import.meta.env.BASE_URL}gemini badge.png`} alt="Gemini Certified Student Badge" className="cert-badge" />
                            <div className="cert-info">
                                <h4>Gemini Certified Student</h4>
                                <p>Gemini AI Student Certification</p>
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
