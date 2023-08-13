export function generateRandomColor() {
	const minBrightness = 40; // Minimum brightness value (0 to 100)
	const maxBrightness = 90; // Maximum brightness value (0 to 100)
	const minSaturation = 40; // Minimum saturation value (0 to 100)
	const maxSaturation = 80; // Maximum saturation value (0 to 100)

	const randomHue = Math.floor(Math.random() * 360); // Random hue value (0 to 360)
	const randomSaturation = Math.floor(
		Math.random() * (maxSaturation - minSaturation + 1) + minSaturation
	);
	const randomBrightness = Math.floor(
		Math.random() * (maxBrightness - minBrightness + 1) + minBrightness
	);

	// return in hsl string format
	return `hsl(${randomHue}, ${randomSaturation}%, ${randomBrightness}%)`;
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

	console.log(planetType);

	return getPlanetColors(planetType);
}