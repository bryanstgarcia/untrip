import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions} = useContext(Context);
	const [ hamburgerOpen, setHamburgerOpen ] = useState(false)

	return (
		<nav className={`nav ${store.theme}`}>
			<Link to="/" className="nav__logo">
				<span className={`${store.theme}`}>Untrip</span>
			</Link>
			<ul className={`nav__list ${hamburgerOpen ? "open" : ""}`}>
				<li>
					<Link to="/home"  className="">
						Home
					</Link>
				</li>
				<li>
					<Link to="/places"  className="">
						Atracciones
					</Link>
				</li>
				<li>
					<Link to="/places"  className="">
						Servicios
					</Link>
				</li>
				<li>
					<Link to="/login"  className="">
						Inicia sesión
					</Link>
				</li>
				<li>
					<Link to="/signup"  className="">
						Unirse ahora
					</Link>
				</li>
				<li>
					<button onClick={actions.handleTheme}  className="">
						{ (store.theme == "light")
							? <i className="fa-solid fa-moon"></i>
							: <i className="fa-solid fa-sun"></i>
						}
					</button>
				</li>
			</ul>
			<button className={`hamburger`} onClick={(e) => setHamburgerOpen(prev => !prev)}>
				<div className={`nav__hamburger hamburger__one`}></div>
				<div className={`nav__hamburger hamburger__two`}></div>
				<div className={`nav__hamburger hamburger__three`}></div>
			</button>
		</nav>
	);
};
