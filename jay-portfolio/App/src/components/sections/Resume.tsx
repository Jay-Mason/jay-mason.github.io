import { Button } from "react-bootstrap";

const Resume: React.FC = () => {
    const navigateInternal = (url: string) => {
        window.location.href = url;
    };
    return (
        <>
            <h2 id="resume" className="section-title">Resume</h2>
            <div className="d-flex justify-content-center">
                <Button variant="primary" size="lg" onClick={() => navigateInternal("/resumes/MasonJay2025.pdf")}>View PDF</Button>
            </div>
        </>
    );
};

export default Resume;