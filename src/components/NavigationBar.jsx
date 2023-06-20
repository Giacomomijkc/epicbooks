import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLinks } from '../data/NavLink';

class NavigationBar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">History Books Marketplace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {NavLinks.map((link) => {
                            return(
                            <Nav.Link kye={link} href={link.href}>{link.title}</Nav.Link>
                            )
                        })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;