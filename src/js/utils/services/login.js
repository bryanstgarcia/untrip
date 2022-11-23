const API_URL = process.env.production ? process.env.API_URL_PROD : process.env.API_URL_DEV
const loginService = async ({ email, password  }) => {
    try {
        const response = await fetch(`${API_URL}/user/token`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok && response.status == 400) {
            const body = await response.json()
            return {
                token: null,
                refresh: null,
                status: 400,
                message: body.message
            }
        }
        if(!response.ok) {
            throw new Error("Something happened: " + response.status)
        }
        const body = await response.json()
        
        return {
            token: body.authorizathion.token,
            refresh: body.authorizathion.refresh,
            status: 201,
            message: "User logged"
        }
    } catch(error) {
        console.log(error)
    }
}

export default loginService;