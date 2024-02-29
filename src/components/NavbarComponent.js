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

	const addNavbarFixed = () => {
		var top = 50;
		if (window.scrollY >= top && window.innerWidth>576) {
			navRef.current?.classList.add("navbar-fixed");
		}
		if (window.scrollY < top && window.innerWidth>576) {
			navRef?.current?.classList.remove("navbar-fixed");
		}
	}

	useEffect(() => {
		if (navRef ) {
			window.addEventListener("scroll", addNavbarFixed)
		}
		return () => {
			window.removeEventListener("scroll", addNavbarFixed)
		}
	}, []);

	const hideCollapse = () => {
		if(window.innerWidth<576){
			setIsNavOpen(false);
		}
	}

	return (
		<div ref={navRef} className="navbar-container navbar-fixed">
			<Navbar light expand="sm">
				<div className="container ">
					<NavbarBrand >
						<Link to="/" >
							<img className="hover_img" height="40" src={process.env.PUBLIC_URL + '/jw-logo-red.svg'} alt="my logo" />
							{/* <span class="small">https://jasonshannon.design</span> */}
						</Link>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isNavOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavHashLink onClick={hideCollapse} className="nav-link" smooth to="/home" >Home</NavHashLink>
							</NavItem>
							{/* <NavItem>
								<NavHashLink onClick={hideCollapse} className="nav-link" smooth to="/home#portfolio" >Portfolio</NavHashLink>
							</NavItem> */}
							<NavItem>
								<NavLink onClick={hideCollapse} className="nav-link" to="/portfolio">Portfolio</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={hideCollapse} className="nav-link" to="/about">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={hideCollapse} className="nav-link" to="/JasonShannonResume.pdf" target='_blank'>Resume</NavLink>
							</NavItem>
							{/* <NavItem>
								<NavHashLink onClick={hideCollapse} className="nav-link" smooth to="#contact" >Contact</NavHashLink>
							</NavItem> */}
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	)
}

export default NavbarComp
