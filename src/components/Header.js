import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="seconday" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.logolynx.com/images/logolynx/30/30c8c26a4d17eb5e279673bc3157ce3e.png"
              width="150"
              height="70"
              className="d-inline-block align-top "
              
            />{' '}
            &nbsp; 
          </Navbar.Brand>
    </Container>
</Navbar>
  )
}

export default Header