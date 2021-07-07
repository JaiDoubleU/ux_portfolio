import React, { useState } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

import '../css/navbarComponent.css'


function NavbarComp() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggle = () => setIsNavOpen(!isNavOpen);


	return (
		<div className="navbar-container">
			<Navbar expand="sm">
				<div className="container">
					<NavbarBrand href="/">
						<img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isNavOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Portfolio</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/components/">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/components/">Resume</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/components/">Contact</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	)
}

export default NavbarComp
