import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function SimpleBottomNavigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">{<GitHubIcon/>}</Nav.Link>
        <Nav.Link href="#features">{<LinkedInIcon/>}</Nav.Link>
        <Nav.Link href="#pricing">{<AlternateEmailIcon/>}</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

