import Stars from "./components/Stars";

import "./App.css";

const planetsInSolarSystem = [
	{
		name: "Mercury",
		mass: 0.000174,
		radius: 0.0341,
		period: 88,
		semi_major_axis: 0.387098,
		temperature: 400,
		distance_light_year: 0.000011,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Venus",
		mass: 0.00257,
		radius: 0.0847,
		period: 224.7,
		semi_major_axis: 0.723332,
		temperature: 737,
		distance_light_year: 0.000004,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Earth",
		mass: 0.00315,
		radius: 0.0892,
		period: 365.2,
		semi_major_axis: 1,
		temperature: 288,
		distance_light_year: 0,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Mars",
		mass: 0.000338,
		radius: 0.0488,
		period: 687,
		semi_major_axis: 1.542,
		temperature: 210,
		distance_light_year: 0.000037,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Jupiter",
		mass: 1,
		radius: 1,
		period: 4331,
		semi_major_axis: 5.204,
		temperature: 165,
		distance_light_year: 0.000088,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Saturn",
		mass: 0.299,
		radius: 0.843,
		period: 10747,
		semi_major_axis: 9.537,
		temperature: 134,
		distance_light_year: 0.00017,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Uranus",
		mass: 0.0457,
		radius: 0.358,
		period: 30589,
		semi_major_axis: 19.191,
		temperature: 76,
		distance_light_year: 0.000304,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
	{
		name: "Neptune",
		mass: 0.0537,
		radius: 0.346,
		period: 59800,
		semi_major_axis: 30.07,
		temperature: 72,
		Sedistance_light_year: 0.000478,
		host_star_mass: 1,
		host_star_temperature: 6000,
	},
];

const limit = 30;

function App() {
	return (
		<div className="universe">
			<div className="stars">
				<Stars />
			</div>
			<h1 className="title">Explore the Universe</h1>
			<p className="subheading">Journey through the cosmos</p>
		</div>
	);
}

export default App;
