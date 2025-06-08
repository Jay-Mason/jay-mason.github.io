import { Image, Card, Button } from "react-bootstrap";

const Profile: React.FC = () => {
    return (
        <>
            <div className="portfolio-img-border">
                <Image className="portfolio-img" src="/assets/jpeg/portfolio.jpeg" roundedCircle />
            </div>
            <h1 id="profile">Hi, I'm Jay Mason!</h1>
            <p className="text-muted">FULL-STACK SOFTWARE ENGINEER & TECHNICAL LEAD</p>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <Card className="overview-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <i className="overview-card-icon fa-solid fa-code"></i>
                        <p className="overview-card-title fw-bold text-wrap">Frontend</p>
                        <div className="d-flex flex-column gap-2 text-start small px-4 py-2">
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> React / Angular</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Javascript / Typescript</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Bootstrap 3+</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> HTML5 / CSS3 / SASS</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Webpack / Vite</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Jest / Vitest</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Figma / Miro</span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="overview-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <i className="overview-card-icon fa-solid fa-server"></i>
                        <p className="overview-card-title fw-bold text-wrap">Backend</p>
                        <div className="d-flex flex-column gap-2 text-start small px-4 py-2">
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> C# / .NET / ASP.NET Core</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Java</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> PHP</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> C++</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> JWT / OAuth / OpenID</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Terraform</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> REST API Design</span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="overview-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <i className="overview-card-icon fa-solid fa-database"></i>
                        <p className="overview-card-title fw-bold text-wrap">Database</p>
                        <div className="d-flex flex-column gap-2 text-start small px-4 py-2">
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> MySQL / MariaDB</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Microsoft SQL Server</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> NoSQL</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Entity Framework (C#)</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Hibernate (Java)</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> MySQL Workbench / SSMS</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> phpMyAdmin</span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="overview-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <i className="overview-card-icon fa-solid fa-toolbox"></i>
                        <p className="overview-card-title fw-bold text-wrap">Tools</p>
                        <div className="d-flex flex-column gap-2 text-start small px-4 py-2">
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Visual Studio</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> VS Code</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> JetBrains IDEA</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Git / GitHub</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> npm / yarn</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Maven / Gradle</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Azure DevOps</span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="overview-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <i className="overview-card-icon fa-solid fa-comment"></i>
                        <p className="overview-card-title fw-bold text-wrap">Soft Skills</p>
                        <div className="d-flex flex-column gap-2 text-start small px-4 py-2">
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Effective Communicator</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Active Listener</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Team-Oriented</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Proactive</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Adaptable</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Self-Managed</span>
                            <span className="overview-card-item"><i className="fa-solid fa-check me-1"></i> Quick Learner</span>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <a href="/resumes/MasonJay2025.pdf" target="_blank"><Button variant="primary" size="lg">View Full Resume</Button></a>
        </>
    );
};

export default Profile;