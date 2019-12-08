import React, { useState }  from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Button,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { getTokensFromLocalStorage } from '../../utils/tokenManagement'

const Header  = ({ handleLogout, authorizedUsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getRole = () => {
    return (authorizedUsed && authorizedUsed.isAdmin) ? 'admin' : 'user'
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar />
          {
            (getTokensFromLocalStorage())
              ? (
                <React.Fragment>
                  <NavbarText>You are logged as {authorizedUsed.fullName}, {getRole()}</NavbarText>
                  {
                    (authorizedUsed && authorizedUsed.isAdmin)
                      ? <Link to="/create-user">Create user</Link>
                      : null
                  }
                  <Button color="link" onClick={handleLogout}>Logout</Button>
                </React.Fragment>
              )
              : <p>Please login</p>
          }
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header