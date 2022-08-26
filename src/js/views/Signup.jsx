import React, { useContext, useState } from "react"
import { InputField } from "../components/common/InputField.jsx"
import { Context } from "../store/appContext"

export const Signup = props => {
    const { store, actions} = useContext(Context)
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    return (
        <div className={`signup-box`}>
            <h1 className={`signup__title ${store.theme}`}>
                You are one step away <br /> from an awesome <br /> project management tool
            </h1>
            <div className={`signup___form`}>
                <InputField 
                    inputType="text"
                    inputId="user-name"
                    labelText="name"
                    stateValue={name}
                    setStateValue={setName}
                />
                <InputField 
                    inputType="email"
                    inputId="user-email"
                    labelText="email"
                    stateValue={email}
                    setStateValue={setEmail}
                />
                <InputField 
                    inputType="password"
                    inputId="user-pass"
                    labelText="password"
                    stateValue={password}
                    setStateValue={setPassword}
                />
            </div>
        </div>
    )
}