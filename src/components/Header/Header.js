import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'
import { useSelector } from 'react-redux'
import { NavDropdown } from 'react-bootstrap'

const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  console.log('isAuthenticated', isAuthenticated)
  const account = useSelector(state => state.user.account)
  const navigate = useNavigate()
  const hanldeLogin = () => {
    navigate('/login')
  }

  const handleSignUp = () => {
    navigate('/register')
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <NavLink to='/' className='navbar-brand'>
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='header-collapse'>
          <Nav>
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
          {isAuthenticated ? (
            <NavDropdown title='Settings'>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav>
              <button className='btn-login' onClick={() => hanldeLogin()}>
                Log in
              </button>
              <button className='btn-logout' onClick={() => handleSignUp()}>
                Sign Up
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
