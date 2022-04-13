import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = ()=>{
    signOut(auth);
  }

    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className='text-primary h1' href="#home">Car Service System</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        {
          user ?
          <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign out</button>
          :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;