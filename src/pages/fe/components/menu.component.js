//import { toHaveAttribute } from "@testing-library/jest-dom/matchers"
import { Navbar, Container,Nav } from "react-bootstrap"
import {NavLink} from "react-router-dom"
//import {FaGoodreadsG, FaJournalWhills, FaRegWindowClose, FaUser} from "react-icons/fa"
export const HomeMenu = ({data}) =>{
    return(<>
     <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Logo Here</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent1">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent1">
            <Nav className="me-auto">
              <Nav.Item>
                <NavLink to="/" className="nav-link" >Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/categories" className="nav-link">Categories</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/brands" className="nav-link">Brands</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/products" className="nav-link">Products</NavLink>
              </Nav.Item>
              
            </Nav>
            <Nav>


              {
                data && data.name? <> 
                <Nav.Item>
                <NavLink to="/login" className="nav-link"> 
                  
                  {data.name}
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/register" className="nav-link">
                 Logout
                </NavLink>
              </Nav.Item>
              </> :<>
              
              <Nav.Item>
                <NavLink to="/login" className="nav-link"> 
                  Login 
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/register" className="nav-link">
                  Register 
                </NavLink>
              </Nav.Item>
              </>
              }
            

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
}



