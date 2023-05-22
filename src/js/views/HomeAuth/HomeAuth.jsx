import React, { useContext } from "react";
import { UserLogged } from "../../context/UserLogged.jsx";
import { Context } from "../../store/appContext";
import Carousel from "./components/Carousel";
import ProjectCard from "./components/ProjectCard";

const HomeAuth = () => {
	const { store } = useContext(Context);
	const { user } = useContext(UserLogged);

	return (
		<main className={`untrip ${store.theme} background-contrast container-fluid`}>
			<div className="container">
				<Carousel
					title={"Favorites"}
				>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</Carousel>
				<Carousel
					title={"Categories"}
				>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</Carousel>
				<Carousel
					title={"Categories"}
				>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</Carousel>
			</div>
		</main>
	);
}

export default HomeAuth;