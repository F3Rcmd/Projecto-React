import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../CartWidget/Carrito';

const Barra = () => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Tandil Mimbres</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Información">Información</Nav.Link>
            <Nav.Link href="#Pedidos">Pedidos</Nav.Link>
          </Nav>
          <Nav>
            <Carrito />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Barra;