import './NavMovies.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../Redux/Actions/UserActions"

const NavUsers = () => {
  const token= localStorage.getItem('token')
  const user = useSelector(state=>state.UserReducer.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
      <Navbar className="custom-navbar" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand >NavMovies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListMovies'>List of Movies</Nav.Link>
            {
              token && user ?
              <>
        
            <Nav.Link as={Link} to='/Profil'>Profil</Nav.Link>
            <Nav.Link as={Link} to='/AddMovie'>Add Movie</Nav.Link>
                  {
                user.role == 'admin' && <Nav.Link as={Link} to='/ListUsers'>List of Users</Nav.Link>
              }

              </>
               :
              <>
            <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
              </>
            }

          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavUsers
