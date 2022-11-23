import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import './AboutUntrip.scss';

const AboutUntrip = (props) => {
	const { store, actions} = useContext(Context)

    return (
        <div className={`about-untrip  ${store.theme}`} id="about-untrip">
            <div className="about-untrip__card">
                <img src={'https://res.cloudinary.com/bryancloudinary/image/upload/v1668720194/Untrip/human_od7hl3.png'} alt="" />
                <h2 className={`${store.theme} text`}>Controll your projects flow with drag an drop</h2>
            </div>
        </div>
    )
}

export default AboutUntrip;