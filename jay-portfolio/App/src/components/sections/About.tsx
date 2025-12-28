import { Button, Card } from "react-bootstrap";

const About: React.FC = () => {

    return (
        <>
            <h2 id="about" className="section-title">About Me</h2>
            <Card>
                <Card.Body className="px-4">
                    <Card.Title>Who I Am</Card.Title>
                    <hr />
                    <div>
                        <p className="small">Hey there, I'm Jay! I'm a husband, father, and software engineer with a strong interest in building technology that supports real people and real-world experiences. I've earned my Bachelor's degree in Engineering Management with a focus on Software Engineering, along with an Associate's degree in Software Engineering and a certification in Web Development.</p>
                        <p className="small">With nearly a decade of hands-on experience, I've worked across a wide range of programming languages and environments, from modern web applications to performance-critical systems. Outside of my professional work, I volunteer as a software engineer for Oakland HOPE, a nonprofit organization where I design and maintain systems used to manage volunteers and support food pantry operations.</p>
                        <p className="small">I'm passionate about creating efficient, well-designed, and user-friendly solutions, whether they're customer-facing applications or the internal systems that keep operations running smoothly. I enjoy learning new technologies, collaborating with others, and taking on challenges that push me to grow.</p>
                    </div>
                    <div className="d-flex gap-2 flex-grow-1 mt-4">
                        <div className="d-flex flex-column w-50 small px-2 text-nowrap">
                            <span className="fw-bold border-bottom">EMAIL</span>
                            <span>masonpjay@gmail.com</span>
                        </div>
                        <div className="d-flex flex-column w-50 small px-2 text-nowrap">
                            <span className="fw-bold border-bottom">PHONE</span>
                            <span>(586) 707-2807</span>
                        </div>
                    </div>
                    <div className="d-flex gap-2 flex-grow-1 mt-4">
                        <div className="d-flex flex-column w-50 small px-2 text-nowrap">
                            <span className="fw-bold border-bottom">LINKS</span>
                            <div className="d-flex flex-row gap-2 mt-2">
                                <a href="https://www.linkedin.com/in/jay-masonii/" target="_blank"><Button variant="primary" className="portfolio-link-btn"><i className="fa-brands fa-linkedin-in"></i></Button></a>
                                <a href="https://github.com/Jay-Mason" target="_blank"><Button variant="primary" className="portfolio-link-btn"><i className="fa-brands fa-github"></i></Button></a>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default About;