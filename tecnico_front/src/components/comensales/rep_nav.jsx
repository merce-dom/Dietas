import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logout from '../logout';  // Ajusta la ruta según tu estructura

const RepNavBar = () => {
    const [user] = useCookies(['tec-user']);
    
    return (
        <React.Fragment>
            <Navbar bg="light" fixed='top' expand="lg">
                <Navbar.Brand as={Link} to="/comensales">Dep.Técnico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/comensales">Página</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Navbar.Text className="mr-3">
                            Usuario: <strong>{user['tec-user']}</strong>
                        </Navbar.Text>
                        <Logout />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default RepNavBar;