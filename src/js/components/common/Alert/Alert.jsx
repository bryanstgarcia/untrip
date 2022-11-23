import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import './Alert.scss';

const Alert = (props) => {
    const { store } = useContext(Context)
    return (
        <aside className="alert-box">
            <div className={`alert ${store.theme} background`}>
                <div className={`alert__title ${store.theme} text`}>
                    <h3 className={`${store.theme} text`}>{props.title}</h3>
                    <span className={`${store.theme} text`}>x</span>
                </div>
                <div className="alert__body">
                    <p className={`${store.theme} text`}>
                        {props.body}
                    </p>
                    <p className={`${store.theme} text`}>
                        {props.secundaryBody ? props.secundaryBody : ""}
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default Alert;