import { Button, Card } from "react-bootstrap";

const Projects: React.FC = () => {
    const openLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <h2 id="projects" className="section-title">Projects</h2>
            <div className="projects-grid">
                <Card className="project-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap project-card-title">Portfolio Website</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">React + TypeScript + Bootstrap</span>
                            <span>Personal portfolio showcasing my skills, education, and projects</span>
                        </div>
                        <div className="d-flex gap-2 justify-content-center mt-3">
                            <Button variant="primary" onClick={() => openLink("https://github.com/Jay-Mason/jay-mason.github.io")}>
                                <i className="fa-brands fa-github me-1"></i> GitHub
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="project-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap project-card-title">Oakland HOPE</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">Full-Stack Web Application</span>
                            <span>Nonprofit volunteer and food pantry management system</span>
                        </div>
                        <div className="d-flex gap-2 justify-content-center mt-3">
                            <Button variant="primary" disabled>
                                <i className="fa-solid fa-lock me-1"></i> Private Repo
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="project-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap project-card-title">US Drivers License Parser</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">TypeScript (NPM Package)</span>
                            <span>Parse barcodes for U.S. Drivers Licenses using AAMVA standards</span>
                        </div>
                        <div className="d-flex gap-2 justify-content-center mt-3">
                            <Button variant="primary" onClick={() => openLink("https://github.com/Jay-Mason/USDriversLicenseParser")}>
                                <i className="fa-brands fa-github me-1"></i> GitHub
                            </Button>
                            <Button variant="primary" onClick={() => openLink("https://www.npmjs.com/package/usdriverslicenseparser")}>
                                <i className="fa-brands fa-npm me-1"></i> NPM
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="project-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap project-card-title">Pet Parlor Tycoon</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">Roblox Experience</span>
                            <span>Built using RobloxTS, a TypeScript framework for Roblox.</span>
                        </div>
                        <div className="d-flex gap-2 justify-content-center mt-3">
                            <Button variant="primary" onClick={() => openLink("https://www.roblox.com/games/83130155748704/Pet-Parlor-Tycoon")}>
                                <i className="fa-solid fa-gamepad me-1"></i> Play on Roblox
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Projects;