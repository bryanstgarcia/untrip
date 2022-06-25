import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";

export const Home = () => {
	const { store, actions} = useContext(Context)

	return (
		<div className={`untrip ${store.theme}`}>
			Home 
		</div>
	);
}
