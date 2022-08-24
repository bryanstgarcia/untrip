import React, { useContext } from "react"
import { Context } from "../../store/appContext"

export const LandingPage = () => {
	const { store, actions} = useContext(Context)
    
    return (
        <div className={`landing ${store.theme} background`}>
            <div className={`landing__bubbles-box first`}>
                <div className={`bubbles-box__bubble ${store.theme}`}></div>
            </div>
            <div className={`landing__bubbles-box second`}>
                <span className={`bubbles-box__bubble ${store.theme}`}></span>
            </div>
        </div>
    )
}