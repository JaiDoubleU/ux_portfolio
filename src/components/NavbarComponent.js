import React, { useState, useEffect, useRef } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink, Link } from 'react-router-dom';
import '../css/navbarComponent.css'

function NavbarComp() {

	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggle = () => setIsNavOpen(!isNavOpen);
	const navRef = useRef();

	useEffect(() => {
		console.dir(navRef.current);
		var top = 700;
		window.addEventListener("scroll", () => {
			if (window.scrollY >= top) {
				navRef.current.classList.add("navbar-fixed");
			}
			if (window.scrollY <= (top)) {
				navRef.current.classList.remove("navbar-fixed");
			}
		})
	}, []);

	return (
		<div ref={navRef} className="navbar-container">
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
								<NavHashLink className="nav-link" smooth to="/home#portfolio" activeClassName="selected">Portfolio</NavHashLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/about" activeClassName="selected">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/resume" activeClassName="selected">Resume</NavLink>
							</NavItem>
							<NavItem>
								<NavHashLink className="nav-link" smooth to="#contact" activeClassName="selected">Contact</NavHashLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	)
}

export default NavbarComp
