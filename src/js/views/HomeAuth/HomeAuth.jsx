import React, { useContext } from "react";
import { Context } from "../../store/appContext";

const HomeAuth = () => {
	const { store, actions} = useContext(Context)

	return (
		<div className={`untrip ${store.theme} background-contrast`}>
			<h1>Hola protected</h1>
		</div>
	);
}

export default HomeAuth;