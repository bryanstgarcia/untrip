import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Footer = () => {
	const { store, actions} = useContext(Context)
	return (
		<footer className={`footer-untrip ${store.theme} background-gray-scale`}>
			<div className="footer-untrip__box">
				<Link to="/" className={`footer-untrip__box--title  ${store.theme} text-gray-scale`}>Untrip</Link>
				<ul className="footer-untrip__box--nav">
					<li>
						<Link className={` ${store.theme} text-gray-scale`} to="/hello">
							Start Project
						</Link>
					</li>
					<li>
						<a className={` ${store.theme} text-gray-scale`} href="">
							About Untrip
						</a>
					</li>
					<li>
						<a className={` ${store.theme} text-gray-scale`} href="">
							About us
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
