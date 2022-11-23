import React, { useContext } from "react";
import { UserLogged } from "../../context/UserLogged";
import { Context } from "../../store/appContext";
import Favorites from "./components/Favorites";

const HomeAuth = () => {
	const { store } = useContext(Context);
	const { user } = useContext(UserLogged);

	return (
		<main className={`untrip ${store.theme} background-contrast`}>
			<Favorites />
		</main>
	);
}

export default HomeAuth;