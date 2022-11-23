import React from "react"
import { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../../../store/appContext";

import './SubmitButton.scss';

const SubmitButton = (props) => {
    const { store } = useContext(Context)
    return (
        <div className={`submit-button__box ${props.size}`}>
            <button type="submit" className={`submit-button ${store.theme} background-contrast text`}>{props.text}</button>
        </div>
    )
}

SubmitButton.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string
}

export default SubmitButton;