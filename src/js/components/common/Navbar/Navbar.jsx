import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../store/appContext";
import './Navbar.scss';
const moonImg = 'https://res.cloudinary.com/bryancloudinary/image/upload/v1669169910/Untrip/white-moon_hgfppq.png';
const sunImg = 'https://res.cloudinary.com/bryancloudinary/image/upload/v1669169926/Untrip/white-sun_xjvvjg.png';

const Navbar = () => {
	const { store, actions} = useContext(Context);
	const [ hamburgerOpen, setHamburgerOpen ] = useState(false)
	const [ hamburgerAnimation, setHamburgerAnimation ] = useState(false)

	return (
		<header className={` ${store.theme} background`}>
			<nav className={`nav ${store.theme} background container`}>
				<Link to="/" className="nav__logo">
					<span className={`${store.theme} text`}>Untrip</span>
				</Link>
				<ul className={`nav__list ${hamburgerOpen ? "open" : "close"} background-contrast`}>
					<li>
						<Link to="/home"  
							className=""
							onClick={()=> {
								if (hamburgerOpen) {
									setHamburgerOpen(prev => !prev)
								}
							}}
							>
							Home
						</Link>
					</li>
					<li>
						<Link to="/places"  
							className=""
							onClick={()=> {
								if (hamburgerOpen) {
									setHamburgerOpen(prev => !prev)
								}
							}}
							>
							Atracciones
						</Link>
					</li>
					<li>
						<Link to="/places"  
							className=""
							onClick={()=> {
								if (hamburgerOpen) {
									setHamburgerOpen(prev => !prev)
								}
							}}
							>
							Servicios
						</Link>
					</li>
					<li>
						<Link to="/login"  
							className=""
							onClick={()=> {
								if (hamburgerOpen) {
									setHamburgerOpen(prev => !prev)
								}
							}}
							>
							Inicia sesión
						</Link>
					</li>
					<li>
						<Link to="/signup"  
							className=""
							onClick={()=> {
								if (hamburgerOpen) {
									setHamburgerOpen(prev => !prev)
								}
							}}
							>
							Unirse ahora
						</Link>
					</li>
					<li>
						<button 
							onClick={(e) => {
								actions.handleTheme()
								setHamburgerOpen(prev => !prev)
							}}  
							className="nav__list--theme"
						>
							{ (store.theme == "light")
								? <img className="" src={moonImg} />
								: <img className="" src={sunImg}/>
							}
						</button>
					</li>
				</ul>
				<button 
					className={`hamburger ${hamburgerAnimation ? "" : "h-close"}`} 
					onClick={(e) =>{ 
						setHamburgerOpen(prev => !prev)
						setHamburgerAnimation(true)
					}
				}>
					<div className={`nav__hamburger hamburger__one   ${hamburgerOpen ? "hamburger__open" : "hamburger__close"} ${hamburgerAnimation ? "" : "h-close"}`}></div>
					<div className={`nav__hamburger hamburger__two   ${hamburgerOpen ? "hamburger__open" : "hamburger__close"} ${hamburgerAnimation ? "" : "h-close"}`}></div>
					<div className={`nav__hamburger hamburger__three ${hamburgerOpen ? "hamburger__open" : "hamburger__close"} ${hamburgerAnimation ? "" : "h-close"}`}></div>
				</button>
			</nav>
		</header>
	);
};

export default Navbar;