import React, { useContext } from "react";
import { LandingPage } from "../components/home/LandingPage.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions} = useContext(Context)

	return (
		<div className={`untrip ${store.theme} background-contrast`}>
			<LandingPage />
		</div>
	);
}
