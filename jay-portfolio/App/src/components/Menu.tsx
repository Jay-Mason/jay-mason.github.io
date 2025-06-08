import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Menu: React.FC = () => {
    return (
        <Navbar expand="md" className="pt-0">
            <Container className="portfolio-navbar py-2" fluid>
                <Navbar.Brand href="#">Jay Mason</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            Quick Links
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav id="portfolio-nav" className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#overview">Profile</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            { /*<Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link> */ }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Menu;