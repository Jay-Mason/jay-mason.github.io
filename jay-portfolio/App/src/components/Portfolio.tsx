import { Col, Container, Image, Row } from "react-bootstrap";
import About from "./sections/About";
import Education from "./sections/Education";
import Resume from "./sections/Resume";

const Portfolio: React.FC = () => {

    return (
        <div data-bs-spy="scroll" data-bs-target="#portfolio-nav" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
            <Container fluid>
                <Row className="portfolio-section">
                    <Col className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div className="portfolio-img-border">
                            <Image className="portfolio-img" src="/assets/jpeg/portfolio.jpeg" roundedCircle />
                        </div>
                        <h1>Hi, I'm Jay Mason!</h1>
                        <p className="text-muted">FULL-STACK SOFTWARE ENGINEER & TECHNICAL LEAD</p>
                    </Col>
                </Row>
                <Row className="portfolio-section">
                    <Col>
                        <About />
                    </Col>
                </Row>
                <Row className="portfolio-section">
                    <Col>
                        <Resume />
                    </Col>
                </Row>
                <Row className="portfolio-section">
                    <Col>
                        <Education />
                    </Col>
                </Row>
                {/*<Row className="portfolio-section">
                    <Col>
                        <Skills />
                    </Col>
                </Row>
                <Row className="portfolio-section">
                    <Col>
                        <Projects />
                    </Col>
                </Row>
                <Row className="portfolio-section">
                    <Col>
                        <Contact />
                    </Col>
                </Row>*/}
            </Container>
        </div>
    );
};

export default Portfolio;