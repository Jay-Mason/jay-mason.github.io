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
                        <p className="small">Hey there, my name is Jay! I'm a Husband, Father, and Software Engineer. I'm pursuing a degree in Engineering Management focusing on Software Engineering at Arizona State University. I also hold an associate's degree in Software Engineering and a certification in Web Development.</p>
                        <p className="small">I'm a seasoned engineer with nearly a decade of experience across various programming languages. When I'm not working on my studies, I volunteer my time with Oakland HOPE, a non-profit organization, to design and maintain systems used for tracking volunteers and managing their Food Pantry.</p>
                        <p className="small">I'm passionate about using my skills to create efficient and user-friendly solutions, and I'm always looking for new challenges to push myself further.</p>
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