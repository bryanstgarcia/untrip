const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: process.env.production ? process.env.API_URL_PROD : process.env.API_URL_DEV,
			theme: "light",
		},
		actions: {
			handleTheme: () => {
				const store = getStore()
				if (store.theme == "light") {
					setStore({ theme: "dark"})
					return;
				}
				if (store.theme == "dark") {
					setStore({ theme: "light"})
					return;
				}
				alert("Existe un error con el tema")
			},
			loginUser: async (email, password) => {
				const store = getStore()
				try {
					const response = await fetch(store.API_URL + "/user/token", {
						method: "POST",
						headers: {
							"Content-Type": "Application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					})
				} catch(error) {
					console.log(error)
				}
			},
		}
	};	
};

export default getState;
