import { useState } from "react";
import Planet1 from "./Planet1";
import Planet2 from "./Planet2";
import Planet3 from "./Planet3";
import Planet4 from "./Planet4";
import Planet5 from "./Planet5";
import Planet6 from "./Planet6";
import Planet7 from "./Planet7";
import Planet8 from "./Planet8";
import Planet9 from "./Planet9";
import Planet10 from "./Planet10";

const RandomPlanetImage = () => {
	// random number between 1 and 10
	const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);

	const getRandomPlanetImage = (randomNumber) => {
		switch (randomNumber) {
			case 1:
				return <Planet1 />;
			case 2:
				return <Planet2 />;
			case 3:
				return <Planet3 />;
			case 4:
				return <Planet4 />;
			case 5:
				return <Planet5 />;
			case 6:
				return <Planet6 />;
			case 7:
				return <Planet7 />;
			case 8:
				return <Planet8 />;
			case 9:
				return <Planet9 />;
			case 10:
				return <Planet10 />;
			default:
				return <Planet1 />;
		}
	};

	return getRandomPlanetImage(randomNumber);
};

export default RandomPlanetImage;
