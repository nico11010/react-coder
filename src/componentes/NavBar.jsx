import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./cartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src="/logo-cafe-2.png" alt="logo" style={{ width: "7rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/category/Cafes'}>
                Cafe en granos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={'/category/Insumos'}>Insumos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={'/category/Cafeteras'}>Cafeteras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
