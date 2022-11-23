import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { AboutUntrip, LandingPage } from "./components";
import './Home.scss'

const Home = () => {
	const { store, actions} = useContext(Context)

	return (
		<div className={`untrip ${store.theme} background-contrast`}>
			<LandingPage />
			<AboutUntrip />
		</div>
	);
}

export default Home;