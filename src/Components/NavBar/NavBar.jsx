import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';




const NavBar = () => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Link to='/' ><img src="../pngs/favicon-32x32.png" alt="logo"/></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/Categoria/A" className={({ isActive }) => isActive ? 'btn btn-light':'btn btn-outline-light' }style={{ margin: 10}}>A</NavLink>
            <NavLink to="/Categoria/B" className={({ isActive }) => isActive ? 'btn btn-light':'btn btn-outline-light' }style={{ margin: 10}}>B</NavLink>
            <NavLink to="/Categoria/C" className={({ isActive }) => isActive ? 'btn btn-light':'btn btn-outline-light' }style={{ margin: 10}}>C</NavLink>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;