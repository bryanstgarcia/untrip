import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../../store/appContext';
import './LandingPage.scss'
const ArrowDownImage = "https://res.cloudinary.com/bryancloudinary/image/upload/v1668720779/Untrip/arrow-down_ypsjel.png"

const LandingPage = () => {
	const { store, actions} = useContext(Context)
    return (
        <div className={`landing ${store.theme} background`} id="landing-untrip">
            <div className={`landing__blur`}>
                <div className={`landing__bubbles-box first`}>
                    <div className={`bubbles-box__bubble ${store.theme}`}></div>
                </div>
                <div className={`landing__bubbles-box second`}>
                    <div className={`bubbles-box__bubble ${store.theme}`}></div>
                </div>
            </div>
            <div className="landing__content">
                <div className="landing__content--c2a">
                    <h1>Handle your projects as pro as you want</h1>
                    <Link to="/hello">Start project</Link>
                </div>
                <a href="#about-untrip" className="landing__content--swipe">
                    <p>swipe to awesomeness</p>
                    <img src={ArrowDownImage} alt="" />
                </a>
            </div>
        </div>
    )
}

export default LandingPage;