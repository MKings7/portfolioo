function Downloads() {
    const documents = [
        {
            icon: 'fas fa-file-pdf',
            title: 'Curriculum Vitae',
            description: 'My complete professional resume with detailed work experience and skills',
            file: '/CURRICULUM VITAE.pdf',
            color: '#e74c3c'
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'Diploma Certificate',
            description: 'Diploma in Information Technology from Kisii University',
            file: '/DIPLOMA CERTIFICATE.pdf',
            color: '#3498db'
        },
        {
            icon: 'fas fa-user-graduate',
            title: 'BSc Degree Certificate',
            description: 'Bachelor of Science in Information Technology',
            file: '/DEGREE CERTFICATE.pdf',
            color: '#1e40af'
        },
        {
            icon: 'fas fa-code',
            title: 'Programmer Certificate',
            description: 'Certificate in Web Design from Zalego Institute of Technology',
            file: '/PROGRAMMER CERTIFICATE.pdf',
            color: '#9b59b6'
        },
        {
            icon: 'fab fa-canva',
            title: 'Canva Essentials Certificate',
            description: 'Digital Design Fundamentals certification from Canva',
            file: '/martin-munyua-canva-essentials-certificate.pdf',
            color: '#00c4cc'
        },
        {
            icon: 'fas fa-palette',
            title: 'Graphic Design Certificate',
            description: 'Graphic Design Essentials certification from Canva',
            file: '/martin-munyua-graphic-design-essentials-certificate.pdf',
            color: '#e91e63'
        },
        {
            icon: 'fas fa-robot',
            title: 'AI in the Classroom Certificate',
            description: 'AI in Education certification from Canva',
            file: '/martin-munyua-ai-in-the-classroom-certificate.pdf',
            color: '#7c3aed'
        },
        {
            icon: 'fas fa-chalkboard-teacher',
            title: 'Teacher Essentials Certificate',
            description: 'Teacher Essentials certification from Canva',
            file: '/martin-munyua-teacher-essentials-certificate.pdf',
            color: '#059669'
        }
    ]

    const handleDownload = (file, title) => {
        const link = document.createElement('a')
        link.href = file
        link.download = title + '.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="downloads section" id="downloads">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number">07.</span> Download Documents
                </h2>
                <p className="downloads-intro">
                    Access my professional documents, certifications, and credentials. Click on any card to download.
                </p>
                <div className="downloads-grid">
                    {documents.map((doc, idx) => (
                        <div
                            className="download-card"
                            key={idx}
                            onClick={() => handleDownload(doc.file, doc.title)}
                            style={{ '--accent-color': doc.color }}
                        >
                            <div className="download-icon" style={{ background: doc.color }}>
                                <i className={doc.icon}></i>
                            </div>
                            <div className="download-content">
                                <h3>{doc.title}</h3>
                                <p>{doc.description}</p>
                            </div>
                            <div className="download-action">
                                <i className="fas fa-download"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads
