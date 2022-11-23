import React, { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Context } from "../../store/appContext.js"
import { InputError, InputField, Loading, SubmitButton } from "../../components/common";


export const Signup = props => {
    const { store, actions} = useContext(Context)
    const [ name, setName ] = useState({ value: "", error: false  })
    const [ email, setEmail ] = useState({ value: "", error: false  })
    const [ password, setPassword ] = useState({ value: "", error: false  })
    const [ confirmPassword, setConfirmPassword ] = useState({ value: "", error: false })
    const [ loading, setLoading ] = useState(false)
    const [location, navigate ] = [useLocation(), useNavigate()]
    
    function handleError(name, email, password, confirmPassword) {
        let ready = true;
        if (password.value != confirmPassword.value) {
            setConfirmPassword({value: "", error: "Passwords must match"})
            ready = false;
        }
        if (name.value == "") {
            setName(prev => {
                return {...prev, error: "The name should be longer than 2 characters and not contain numbers or special characters"}
            })
            ready = false;
        }
        return ready;

    }
    async function handleUserSubmit () {
        try {
            const response = await fetch(`${store.API_URL}/signup`, {
                method: "POST",
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    password: password.value
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) throw new Error(`Something happend fetching. Status code: ${response.status}`)
            setTimeout(() => {
                setLoading(false)
                navigate("/login")

            }, 2000)
        } catch(error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const ready = handleError(name, email, password, confirmPassword)
        if (ready) {
            handleUserSubmit()
            setLoading(true)
            return;
        }
        return;
    }
    return (
        <main className={`signup-box ${store.theme} background-contrast`}>
            <div className={`signup-box__content ${store.theme}`}>
                <h1 className={`signup__title ${store.theme} text`}>
                    You are one step away <br /> from an awesome <br /> project management tool
                </h1>
                {loading ? (
                    <Loading />
                ) : (
                    <form className={`signup___form`} onSubmit={handleSubmit}>
                        <InputField 
                            inputType="text"
                            inputId="user-name"
                            labelText="Name"
                            stateValue={name.value}
                            setStateValue={setName}
                        />
                        <InputError error={name.error} />
                        <InputField 
                            inputType="email"
                            inputId="user-email"
                            labelText="Email"
                            stateValue={email.value}
                            setStateValue={setEmail}
                        />
                        <InputError error={email.error} />
                        <InputField 
                            inputType="password"
                            inputId="user-pass"
                            labelText="Password"
                            stateValue={password.value}
                            setStateValue={setPassword}
                        />
                        <InputError error={password.error} />
                        <InputField 
                            inputType="password"
                            inputId="user-confirm-pass"
                            labelText="Confirm password"
                            stateValue={confirmPassword.value}
                            setStateValue={setConfirmPassword}
                        />
                        <InputError error={confirmPassword.error} />
                        <SubmitButton 
                            text={"Sign Up"}
                            witdh={"100"}
                        />
                    </form>
                )}
            </div>
        </main>
    )
}

export default Signup;