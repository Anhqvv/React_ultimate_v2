import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <NavLink to='/' className='navbar-brand'>
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/users' className='nav-link'>
              User
            </NavLink>
            <NavLink to='/admins' className='nav-link'>
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className='btn-login'>Log in</button>
            <button className='btn-logout'>Log out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
