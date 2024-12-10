import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <h2>UW Wrapped</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to='/allsongs' className="nav_item">All Music</Nav.Link>
            <Nav.Link as={NavLink} to='/add' className="nav_item">Add a Song</Nav.Link>
            <Nav.Link as={NavLink} to='/vote' className="nav_item">Vote</Nav.Link>
            <Nav.Link as={NavLink} to='/archive' className="nav_item">Archive</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}