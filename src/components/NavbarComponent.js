import React, { useState } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';
import '../css/navbarComponent.css'


function NavbarComp() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggle = () => setIsNavOpen(!isNavOpen);


	return (
		<div className="navbar-container">
			<Navbar light expand="sm">
				<div className="container">
					<NavbarBrand >
						<Link to="/home" >
							<img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
						</Link>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isNavOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink className="nav-link" to="/portfolio" activeClassName="selected">Portfolio</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/about" activeClassName="selected">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/resume" activeClassName="selected">Resume</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/contact" activeClassName="selected">Contact</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	)
}

export default NavbarComp
