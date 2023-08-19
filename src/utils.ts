export function generateRandomColor() {
	const colors = [
		"#c99090",
		"#FFB266",
		"#A1D2FF",
		"#FF6666",
		"#FFCC99",
		"#FFCC66",
		"#66b0ff",
		"#66CCFF",
		"#9c95b0",
	];
	return colors[Math.floor(Math.random() * colors.length)];
}

function getPlanetColors(planetType) {
	let baseHue;
	let saturation = 60; // Keeping a fixed saturation for simplicity
	const baseLightness = 50; // Middle value for lightness

	// Define base hue for each planet type
	switch (planetType.toLowerCase()) {
		case "rocky":
			baseHue = 25; // Brown-ish hue
			break;
		case "gas":
			baseHue = 240; // Blue-ish hue
			break;
		case "water":
			baseHue = 195; // Light blue hue
			break;
		case "ice":
			baseHue = 210; // Pale blue hue
			break;
		case "lava":
			baseHue = 15; // Fiery red hue
			break;
		case "forest":
			baseHue = 110; // Green hue
			break;
		case "desert":
			baseHue = 45; // Golden yellow hue
			break;
		case "earth":
			baseHue = 170; // Mix of blue and green
			break;
		case "volcanic":
			baseHue = 5; // Dark gray with hint of red
			break;
		case "storm":
			baseHue = 265; // Dark purple hue
			break;
		case "metallic":
			baseHue = 220; // Silvery gray hue
			break;
		case "mystical":
			baseHue = 250; // Enigmatic purples and blues
			break;
		case "toxic":
			baseHue = 85; // Bright greens and yellows
			break;
		case "frozen":
			baseHue = 235; // Deep blues and purples
			break;
		case "golden":
			baseHue = 50; // Lustrous golds and yellows
			break;
		case "magma":
			baseHue = 5; // Deep red hue
			break;
		case "nebula":
			baseHue = 290; // Misty pinks and violets
			break;
		case "coral":
			baseHue = 16; // Bright pinkish-orange
			break;
		case "tempest":
			baseHue = 190; // Stormy teal-like colors
			break;
		case "radiant":
			baseHue = 0; // Luminescent white
			saturation = 0; // Adjusting saturation to get white
			break;
		case "shadow":
			baseHue = 280; // Deep purples and blacks
			break;
		case "aurora":
			baseHue = 140; // Light greens and pinks
			break;
		case "terra":
			baseHue = 120; // Earthy greens and browns
			break;
		case "crystal":
			baseHue = 255; // Transparent blues and purples
			break;
		case "inferno":
			baseHue = 10; // Fiery oranges and reds
			break;
		default:
			throw new Error("Unknown planet type");
	}

	// Calculate 3 shades by varying lightness
	const shades = [
		`hsl(${baseHue}, ${saturation}%, ${baseLightness - 10}%)`, // Darker shade
		`hsl(${baseHue}, ${saturation}%, ${baseLightness}%)`, // Base shade
		`hsl(${baseHue}, ${saturation}%, ${baseLightness + 10}%)`, // Lighter shade
	];

	return shades;
}

export function generateComplementaryColors() {
	const planetTypes = [
		"rocky",
		"gas",
		"water",
		"ice",
		"lava",
		"forest",
		"desert",
		"earth",
		"volcanic",
		"storm",
		"metallic",
		"mystical",
		"toxic",
		"frozen",
		"golden",
		"magma",
		"nebula",
		"coral",
		"tempest",
		"radiant",
		"shadow",
		"aurora",
		"terra",
		"crystal",
		"inferno",
	];
	const planetType =
		planetTypes[Math.floor(Math.random() * planetTypes.length)];

	return getPlanetColors(planetType);
}

export const getMass = (mass) => {
	const earthMassInKg = 1.898e27;
	const massInKg = mass * earthMassInKg;

	const [coefficient, exponent] = massInKg.toExponential().split("e");
	const formattedResult = `${parseFloat(coefficient)
		.toFixed(3)
		.slice(0, 4)} x 10^${parseInt(exponent)}`;

	return formattedResult;
};

export const getRadiusInKilometers = (radius) => {
	const earthRadiusInKm = 6371;
	const radiusInKm = radius * earthRadiusInKm;
	return radiusInKm.toFixed(1);
};

export const getOrbitalPeriodInYears = (orbitalPeriod) => {
	const earthDaysInYear = 365.2;
	const orbitalPeriodInYears = orbitalPeriod / earthDaysInYear;
	return orbitalPeriodInYears.toFixed(orbitalPeriodInYears === 1 ? 0 : 1);
};

export const getTemperature = (temperature) => {
	const temperatureInCelcius = (temperature - 273.15).toFixed(0);
	return temperatureInCelcius;
};
