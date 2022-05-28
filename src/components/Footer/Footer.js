import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" className="footer-elem">
        <Container className='justify-content-center'>
            <i>~ Everything begins with an idea!</i>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer