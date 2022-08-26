import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


import Luna from "../../../img/luna.png"
import Sol from "../../../img/sun.png"

export const Navbar = () => {
	const { store, actions} = useContext(Context);
	const [ hamburgerOpen, setHamburgerOpen ] = useState(false)
	const [ hamburgerAnimation, setHamburgerAnimation ] = useState(false)

	return (
		<nav className={`nav ${store.theme} background`}>
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
							? <img className="" src={Luna} />
							: <img className="" src={Sol}/>
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
	);
};
