const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
		}
	};
};

export default getState;
