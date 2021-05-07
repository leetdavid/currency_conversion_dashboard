import React from 'react'
import { Navbar } from 'react-bootstrap'

class Nav extends React.Component {
  render() {
    return (<>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />{ ' ' }

        Currency Dashboard
        </Navbar.Brand>
      </Navbar>
    </>);
  }
}

export default Nav;