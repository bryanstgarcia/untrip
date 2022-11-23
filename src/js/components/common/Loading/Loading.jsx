import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import './Loading.scss';
const Loading = () => {
    const { store } = useContext(Context);
    return (
        <div className={`${store.theme} loading`}>
            <div className={`${store.theme} background spinner-grow`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;