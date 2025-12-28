import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface BootstrapWindow extends Window {
    bootstrap?: {
        ScrollSpy: new (element: Element, options: { target: string; offset: number }) => void;
    };
}

const Menu: React.FC = () => {
    const [show, setShow] = useState(false);
    const [targetId, setTargetId] = useState<string | null>(null);

    useEffect(() => {
        const initScrollspy = () => {
            const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
            if (scrollSpyElement && typeof window !== 'undefined') {
                const bootstrap = (window as BootstrapWindow).bootstrap;
                if (bootstrap?.ScrollSpy) {
                    new bootstrap.ScrollSpy(scrollSpyElement, {
                        target: '#portfolio-nav',
                        offset: 0
                    });
                }
            }
        };

        if (typeof window !== 'undefined') {
            const bootstrap = (window as BootstrapWindow).bootstrap;
            if (bootstrap) {
                initScrollspy();
            } else {
                const timer = setTimeout(initScrollspy, 100);
                return () => clearTimeout(timer);
            }
        }
    }, []);

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

    const scrollToSection = (href: string) => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            if (show) {
                setTargetId(href);
                setShow(false);
            } else {
                scrollToSection(href);
            }
        }
    };

    return (
        <Navbar expand="md" className="pt-0 sticky-top">
            <Container className="portfolio-navbar py-2" fluid>
                <Navbar.Brand href="#">Jay Mason</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={handleShow} className="d-md-none" />
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
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#profile" onClick={handleLinkClick}>Skills</Nav.Link>
                            <Nav.Link href="#about" onClick={handleLinkClick}>About</Nav.Link>
                            <Nav.Link href="#education" onClick={handleLinkClick}>Education</Nav.Link>
                            <Nav.Link href="#projects" onClick={handleLinkClick}>Projects</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Menu;