import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, InputError, InputField, Loading, SubmitButton } from "../../components/common";
import { UserLogged } from "../../context/UserLogged.jsx";
import { Context } from "../../store/appContext";
import { loginService } from "../../utils";

const Login = () => {
    const { store, actions} = useContext(Context)
    const { setUser } = useContext(UserLogged)

    const [ email, setEmail ] = useState({ value: "", error: false  })
    const [ password, setPassword ] = useState({ value: "", error: false  })
    const [ loading, setLoading ] = useState(false)
    const [ loggedError, setLoggedError ] = useState(false)
    const navigate = useNavigate()

        
    function handleError( email, password ) {
        let ready = true;
        if (password.value == "") {
            setPassword({value: "", error: "Enter a password"})
            ready = false;
        }
        if (email.value == "") {
            setEmail(prev => {
                return {...prev, error: "Please, enter a correct email"}
            })
            ready = false;
        }
        return ready;
    }
    async function handleUserSubmit (email, password) {
        try {
            const login = await loginService({email, password })
            if (login.token == null && login.status == 400) {
                setLoading(false)
                setLoggedError(login.message)
                return
            }
            
            setUser(prev => {
                return {
                    ...prev,
                    token: login.token,
                    refresh: login.refresh
                }
            })
            setTimeout(() => {
                setLoading(false)
                navigate("/home")

            }, 2000)
        } catch(error) {
            console.log(error)
        }
    }
    function handleSubmit(event) {
        event.preventDefault()
        setLoggedError(false)
        const ready = handleError(email, password)
        if (ready) {
            handleUserSubmit(email.value, password.value )
            setLoading(true)
            return;
        }
        return;
    }
    return (
        <main className={`signup-box ${store.theme} background-contrast`}>
            <div className={`signup-box__content ${store.theme}`}>
                { loggedError && <Alert time={"hola"} title={loggedError}/>}
                <h1 className={`signup__title ${store.theme} text`}>
                    Untrip login
                </h1>
                {loading ? (
                    <Loading />
                ) : (
                    <form className={`signup___form`} onSubmit={handleSubmit}>
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
                        <SubmitButton 
                            text={"Login"}
                            witdh={"100"}
                        />
                    </form>
                )}
            </div>
     </main>
    )
}

export default Login;