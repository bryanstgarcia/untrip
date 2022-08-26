import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "./../../store/appContext"

export const InputField = (props) => {
    const { store, actions } = useContext(Context)
    return (
        <div className={`input-field ${store.theme}`}>
            <label className="input-field__label" htmlFor={props.inputId}>{props.labelText}</label>
            <input 
                className={`input-field__input ${store.theme}`}
                id={props.inputId} 
                type={props.inputType}
                value={props.stateValue}
                onChange={(event)=> {
                    props.setStateValue(event.target.value)
                    return
                }}
            />
        </div>
    )
}

InputField.propTypes = {
    inputType: PropTypes.string,
    inputId : PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    stateValue: PropTypes.string.isRequired,
    setStateValue: PropTypes.func.isRequired

}
InputField.defaultProps = {
    inputType: "text",
}