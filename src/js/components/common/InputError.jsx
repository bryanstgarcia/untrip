import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../../store/appContext"
const InputError = (props) => {
    const { store } = useContext(Context)
    return(
        <div className={`input-error__box ${store.theme}`}>
            {
                props.error && (
                    <p className={`input-error ${store.theme}`}>{props.error}</p>
                )
            }
        </div>
    )
}
InputError.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default InputError;