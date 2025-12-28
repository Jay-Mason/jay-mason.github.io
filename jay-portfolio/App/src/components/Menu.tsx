import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Menu: React.FC = () => {
    const [show, setShow] = useState(false);
    const [targetId, setTargetId] = useState<string | null>(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleExited = () => {
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            setTargetId(null);
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            setTargetId(href);
            setShow(false);
        }
    };

    return (
        <Navbar expand="md" className="pt-0">
            <Container className="portfolio-navbar py-2" fluid>
                <Navbar.Brand href="#">Jay Mason</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={handleShow} />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="end"
                    show={show}
                    onHide={handleClose}
                    onExited={handleExited}
                    restoreFocus={false}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            Quick Links
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav id="portfolio-nav" className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#overview" onClick={handleLinkClick}>Profile</Nav.Link>
                            <Nav.Link href="#about" onClick={handleLinkClick}>About</Nav.Link>
                            <Nav.Link href="#education" onClick={handleLinkClick}>Education</Nav.Link>
                            <Nav.Link href="#projects" onClick={handleLinkClick}>Projects</Nav.Link>
                            { /*<Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link> */ }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Menu;