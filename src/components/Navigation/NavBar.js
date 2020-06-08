import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from "./logo.png";
import logo2 from "./logo2.png";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {

	function topFunction() {
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	return (
		<Navbar className="bg" sticky="top" collapseOnSelect expand="lg" variant="dark">
			<div className="navbar-just">
				<a href="/">
					<img src={logo2} alt="JUSTDO"/>
				</a>
			</div>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
	    		<Nav className="mr-auto">
	    			<div className="sw-logo">
	    				<Nav.Link eventKey="1">
							<NavLink onClick={topFunction} className= "navbar-brand" to="/">
								<img src={logo} alt="" />
							</NavLink>
						</Nav.Link>
	    			</div>
					<Nav.Link eventKey="2">
	    				<NavLink onClick={topFunction} className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
	    			</Nav.Link>
	    			<Nav.Link eventKey="3">
			      		<NavLink onClick={topFunction} className="nav-link" to="/about" activeClassName="active">About</NavLink>
			      	</Nav.Link>
			      	<Nav.Link eventKey="4">
			      		<NavLink onClick={topFunction} className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
			      	</Nav.Link>
			      	<Nav.Link eventKey="5">
			      		<NavLink onClick={topFunction} className="nav-link" to="/gallery" activeClassName="active">Gallery</NavLink>
			      	</Nav.Link>
					<Nav.Link eventKey="6">
			      		<NavLink onClick={topFunction} className="nav-link" to="/blogs" activeClassName="active">Blogs</NavLink>
			      	</Nav.Link>
					     {/* <NavDropdown className= "Drop" title="Services" id="collasible-nav-dropdown ">
					        <NavDropdown.Item href="#action/3.1">Meal and Diet Planning</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Blogs</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.3">Fit Tech</NavDropdown.Item>
					        <NavDropdown.Divider />
					        <NavDropdown.Item href="#action/3.4">Trainer Outsourcing</NavDropdown.Item>
					    </NavDropdown> */}
		    	</Nav>
		    	<Nav>
		    		<div className="join_us">
				    	<a href="http://eepurl.com/gTDPjH">Join Us</a>
				    </div>
		    	</Nav>
		  	</Navbar.Collapse>
		</Navbar>
	)
}







export default NavBar;
