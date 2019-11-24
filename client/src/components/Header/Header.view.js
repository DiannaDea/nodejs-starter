import React, { useState }  from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Button
} from 'reactstrap';
import { getTokensFromLocalStorage } from '../../utils/tokenManagement'

const Header  = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar />
          {
            (getTokensFromLocalStorage())
              ? <Button color="link" onClick={handleLogout}>Logout</Button>
              : <p>Please login</p>
          }
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header