import React, { Component, useContext } from "react";
import { Context } from "../../store/appContext";
 
export const Footer = () => {
	const { store, actions} = useContext(Context)
	return (
		<footer className={`footer-untrip ${store.theme} background-gray-scale`}>
			<div className="footer-untrip__box">
				<a className={`footer-untrip__box--title  ${store.theme} text-gray-scale`}>Untrip</a>
				<ul className="footer-untrip__box--nav">
					<li>
						<a className={` ${store.theme} text-gray-scale`} href="">
							Start Project
						</a>
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

