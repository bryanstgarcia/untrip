import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Human from "./../../../img/human.png"

export const AboutUntrip = (props) => {
	const { store, actions} = useContext(Context)

    return (
        <div className={`about-untrip  ${store.theme}`} id="about-untrip">
            <div className="about-untrip__card">
                <img src={Human} alt="" />
                <h2>Controll your projects flow with drag an drop</h2>
            </div>
        </div>
    )
}