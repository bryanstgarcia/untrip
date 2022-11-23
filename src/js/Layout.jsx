import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

import injectContext from "./store/appContext";

import { NotFound } from "./views/NotFound.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import UserLoggedProvider from "./context/UserLogged.jsx";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import { HomeAuthView, HomeView, LoginView, SignupView } from "./views/index.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<UserLoggedProvider>
						<Navbar />
						<Routes>
							<Route path="/" element={<HomeView />} />
							<Route path="/login" element={<LoginView />} />
							<Route path="/signup" element={<SignupView />} />
							<Route element={<ProtectedRoutes />}>
								<Route path="/home" element={<HomeAuthView />}/>
								<Route path="/hello" element={<HomeAuthView />}/>
							</Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</UserLoggedProvider>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
