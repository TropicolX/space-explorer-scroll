import React, { useState } from "react";
import PropTypes from "prop-types";

import Mercury from "./PlanetImages/Mercury";
import Venus from "./PlanetImages/Venus";
import Earth from "./PlanetImages/Earth";
import Mars from "./PlanetImages/Mars";
import Jupiter from "./PlanetImages/Jupiter";
import Saturn from "./PlanetImages/Saturn";
import Uranus from "./PlanetImages/Uranus";
import Neptune from "./PlanetImages/Neptune";
import Pluto from "./PlanetImages/Pluto";
import RandomPlanetImage from "./PlanetImages/RandomPlanetImage";
import {
	generateRandomColor,
	getMass,
	getOrbitalPeriodInYears,
	getRadiusInKilometers,
	getTemperature,
} from "../utils";

const Planet = React.memo(function Planet({ data }) {
	const [randomColor] = useState(generateRandomColor());

	const planetNameInLowerCase = data.name.toLowerCase();
	const notAvailable = "N/A";

	const getImage = (name) => {
		switch (name) {
			case "mercury":
				return <Mercury />;
			case "venus":
				return <Venus />;
			case "earth":
				return <Earth />;
			case "mars":
				return <Mars />;
			case "jupiter":
				return <Jupiter />;
			case "saturn":
				return <Saturn />;
			case "uranus":
				return <Uranus />;
			case "neptune":
				return <Neptune />;
			case "pluto":
				return <Pluto />;
			default:
				return <RandomPlanetImage />;
		}
	};

	const getBgColor = (name) => {
		switch (name) {
			case "mercury":
				return "#c99090";
			case "venus":
				return "#FFB266";
			case "earth":
				return "#A1D2FF";
			case "mars":
				return "#FF6666";
			case "jupiter":
				return "#FFCC99";
			case "saturn":
				return "#FFCC66";
			case "uranus":
				return "#66b0ff";
			case "neptune":
				return "#66CCFF";
			case "pluto":
				return "#9c95b0";
			default:
				return randomColor;
		}
	};

	return (
		<div className="planet planet-entering">
			<div
				style={{
					backgroundColor: getBgColor(planetNameInLowerCase),
				}}
				className="planet-image"
			>
				{getImage(planetNameInLowerCase)}
			</div>
			<div className="planet-content">
				<h2 className="planet-name">{data.name}</h2>
				<p className="planet-fact">
					<span className="planet-fact-title">Mass:</span>{" "}
					{data.mass ? `${getMass(data.mass)} kg` : notAvailable}
				</p>
				<p className="planet-fact">
					<span className="planet-fact-title">Radius:</span>{" "}
					{data.radius
						? `${getRadiusInKilometers(data.radius)} km`
						: notAvailable}
				</p>
				<p className="planet-fact">
					<span className="planet-fact-title">Orbital Period:</span>{" "}
					{data.orbitalPeriod
						? `${getOrbitalPeriodInYears(data.orbitalPeriod)} year${
								data.period === 365.2 ? "" : "s"
						  }`
						: notAvailable}
				</p>
				<p className="planet-fact">
					<span className="planet-fact-title">Temperature:</span>{" "}
					{data.temperature
						? `${getTemperature(data.temperature)}°C`
						: notAvailable}
				</p>
			</div>
		</div>
	);
});

Planet.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Planet;
