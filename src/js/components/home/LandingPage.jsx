import React, { useContext } from "react"
import { Context } from "../../store/appContext"
import ArrowDown from "./../../../img/arrow-down.png"

export const LandingPage = () => {
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
                    <button>Start project</button>
                </div>
                <a href="#about-untrip" className="landing__content--swipe">
                    <p>swipe to the awesomeness</p>
                    <img src={ArrowDown} alt="" />
                </a>
            </div>
        </div>
    )
}