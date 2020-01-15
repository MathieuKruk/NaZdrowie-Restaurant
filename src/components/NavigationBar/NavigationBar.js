import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => {
    return (
            <Navbar sticky="top" className={'navbar-dark componentNavigationBar shadow'} expand="lg" fluid={true}>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={process.env.PUBLIC_URL + '/assets/img/logo/logowhite.png'}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    NaZdrowie
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-around text-right"}>
                    <Nav className={"mr-auto"}>
                        <NavLink onClick={()=>props.changeRoute('Menus')} className={"nav-link"} to="/menus">Menus  </NavLink>
                        <NavLink onClick={()=>props.changeRoute('Gallery')} className={"nav-link"} to="/gallery">Gallery  </NavLink>
                        <NavLink onClick={()=>props.changeRoute('About')} className={"nav-link"} to="/about">About  </NavLink>
                        <NavLink onClick={()=>props.changeRoute('Contact')} className={"nav-link"} to="/contact">Contact  </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
    );
}
 
export default NavigationBar;