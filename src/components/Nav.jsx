import { } from 'react';
import Container from 'react-bootstrap/Container';
import NavReact from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Nav({ pagina }) {

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavReact className="me-auto">
                            <NavDropdown title={pagina ? pagina : "home"} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">home</NavDropdown.Item>
                                <NavDropdown.Item href="/proposta">proposta</NavDropdown.Item>
                                <NavDropdown.Item href="/sobre">sobre</NavDropdown.Item>
                            </NavDropdown>
                            <NavReact.Link href="/login">login</NavReact.Link>
                        </NavReact>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Nav