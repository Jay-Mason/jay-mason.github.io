import { Button, Card } from "react-bootstrap";

const Education: React.FC = () => {
    const navigateInternal = (url: string) => {
        window.location.href = url;
    };

    return (
        <>
            <h2 id="education" className="section-title">Education</h2>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <Card className="education-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap education-card-title">Bachelor's in Engineering Management (S.E Focus)</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">Arizona State University</span>
                            <span>Graduated 2025</span>
                            <span>Honors: Summa Cum Laude (4.0)</span>
                        </div>
                        <Button variant="primary" className="mt-auto" onClick={() => navigateInternal("/transcripts/Mason_Jay_ASU_Transcript.pdf")}>Transcript</Button>
                    </Card.Body>
                </Card>
                <Card className="education-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap education-card-title">Associate's in Software Engineering</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">Oakland Community College</span>
                            <span>Graduated 2019</span>
                            <span>Honors: Summa Cum Laude (3.9)</span>
                        </div>
                        <Button variant="primary" className="mt-auto" onClick={() => navigateInternal("/transcripts/Mason_Jay_OCC_Transcript.pdf")}>Transcript</Button>
                    </Card.Body>
                </Card>
                <Card className="education-card">
                    <Card.Body className="d-flex flex-column text-center">
                        <p className="fw-bold text-wrap education-card-title">Web Developer Certificate</p>
                        <div className="d-flex flex-column align-items-center gap-2 text-center small py-2">
                            <span className="fst-italic">Oakland Community College</span>
                            <span>Received 2017</span>
                            <span>Honors: Summa Cum Laude</span>
                        </div>
                        <Button variant="primary" className="mt-auto" onClick={() => navigateInternal("/transcripts/Mason_Jay_OCC_Transcript.pdf")}>Transcript</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Education;