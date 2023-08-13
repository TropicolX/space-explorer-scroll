import { generateComplementaryColors } from "../../utils";

const Planet7 = () => {
	const complementaryColors = generateComplementaryColors();

	return (
		<svg
			width={148}
			height={149}
			viewBox="0 0 148 149"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M66.9599 0.86C9.75994 6.28 -21.0301 74.38 16.8599 120.88C34.3699 142.45 63.6099 153.12 92.4299 145.7C107.87 141.72 121.22 132.89 130.73 121.4C172.26 71.49 133.14 -5.45 66.9599 0.86Z"
				fill="url(#paint0_radial_1_211)"
			/>
			<path
				d="M73.91 127.69C53.8 127.69 36.28 116.55 27.21 100.1C7.20004 63.83 34.8 19.8 75.09 21.09C100.72 21.61 122.37 40.5 126.5 65.62C131.92 98.04 106.87 127.69 73.91 127.69Z"
				fill="url(#paint1_radial_1_211)"
			/>
			<g opacity="0.75">
				<path
					d="M95.08 83C92.87 82.45 92.26 85.2 93.51 85.82C94.76 86.45 97.9 88.33 98.53 87.07C99.16 85.82 97.59 83.63 95.08 83Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M117.03 59.8C114.89 60.29 112.33 61.37 114.52 62.94C116.72 64.51 120.16 63.88 120.48 62C120.79 60.11 121.11 58.86 117.03 59.8Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M74.07 110.28C69.47 107.52 62.7799 106.52 62.1499 109.34C61.5199 112.16 65.9099 116.55 71.2399 115.92C76.5799 115.3 77.21 112.16 74.07 110.28Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M89.0701 125.5C84.9201 126.73 80.56 127.47 76.05 127.64C77.08 121.11 83.29 123.17 86.61 124.07C87.58 124.34 88.3901 124.87 89.0701 125.5Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M44.9099 109.97C46.9399 110.86 48.3599 106.52 45.5399 102.76C42.7199 99 41.4599 94.29 38.0099 93.35C34.5599 92.41 32.6799 104.64 44.9099 109.97Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M31.11 94.6C30 94.8 29.54 97.11 32.05 97.42C34.56 97.74 34.56 93.98 31.11 94.6Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M59.02 81.75C56.81 81.55 54.63 82.69 54.94 85.2C55.25 87.71 58.7 85.2 60.27 85.2C61.84 85.2 62.47 82.06 59.02 81.75Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
				<path
					d="M80.66 52.59C78.76 51.69 78.46 55.73 80.03 56.35C81.6 56.98 85.99 55.09 80.66 52.59Z"
					fill={complementaryColors[Math.floor(Math.random() * 3)]}
				/>
			</g>
			<path
				d="M60.59 72.97C49.93 74.85 48.36 75.16 38.64 83.32C32.21 88.71 25.5 86.97 21.7 85.17C20.99 81.69 20.61 78.08 20.61 74.38C20.61 59.22 26.94 45.53 37.1 35.83C39.19 37.07 41.35 38.75 43.03 40.99C47.73 47.26 46.79 49.77 60.59 56.98C74.38 64.19 71.25 71.09 60.59 72.97Z"
				fill="url(#paint2_linear_1_211)"
			/>
			<path
				d="M122.09 51.54C112.25 49.48 105.54 60.61 98.84 59.8C91 58.86 93.2 47.26 86.61 35.03C83.31 28.91 83.08 24.67 83.67 21.97C100.7 25.11 114.88 36.35 122.09 51.54Z"
				fill="url(#paint3_linear_1_211)"
			/>
			<path
				d="M127.22 74.38C127.22 95.07 115.44 113 98.22 121.84C94.29 115.63 100.66 111.02 108.25 106.21C117.66 100.25 108.88 97.74 110.44 88.02C112.01 78.3 106.05 77.67 108.87 69.52C110.88 63.7 121.36 69.22 127.19 72.86C127.21 73.36 127.22 73.87 127.22 74.38Z"
				fill="url(#paint4_linear_1_211)"
			/>
			<path
				d="M77.2099 90.53C71.5099 92.3 68.4299 85.51 61.2199 87.08C54.0099 88.65 48.0499 101.5 57.7699 101.19C67.4899 100.88 69.9999 99.62 77.2099 104.64C84.4199 109.66 92.89 106.21 95.4 98.37C97.9 90.53 96.3299 84.57 77.2099 90.53Z"
				fill="url(#paint5_linear_1_211)"
			/>
			<path
				d="M89.12 67.01C86.12 67.97 85.36 69.52 86.3 71.4C87.24 73.28 91 72.97 92.88 75.79C94.76 78.61 99.47 82.06 100.72 75.79C101.98 69.52 96.02 64.81 89.12 67.01Z"
				fill="url(#paint6_linear_1_211)"
			/>
			<path
				opacity="0.5"
				d="M78.15 50.7C77.59 54.88 73.76 50.7 67.49 49.45C61.22 48.2 58.71 44.43 61.53 41.92C64.35 39.41 68.11 37.53 71.88 39.72C75.64 41.92 78.77 46 78.15 50.7Z"
				fill={complementaryColors[Math.floor(Math.random() * 3)]}
			/>
			<path
				d="M71.56 25.93C63.72 25.93 59.96 30.32 52.75 32.83C48.45 34.32 45.05 32.59 43 30.95C51.72 24.73 62.39 21.07 73.92 21.07C74.32 21.07 74.71 21.07 75.1 21.09C75.65 23.35 75.45 25.93 71.56 25.93Z"
				fill="url(#paint7_linear_1_211)"
			/>
			<path
				opacity="0.45"
				d="M124.68 90.69C120.33 104.24 110.7 115.43 98.22 121.84C95.31 123.33 92.25 124.56 89.07 125.51C84.92 126.74 80.56 127.48 76.05 127.65C75.34 127.68 74.63 127.69 73.91 127.69C53.8 127.69 36.28 116.55 27.21 100.1C24.67 95.5 22.79 90.48 21.7 85.17C20.99 81.69 20.61 78.08 20.61 74.38C20.61 67.94 21.75 61.77 23.84 56.06C29.87 74.07 43.67 97.31 75.04 101.62C81.16 102.46 86.88 102.57 92.22 102.11C105.32 100.96 116.1 96.38 124.68 90.69Z"
				fill="url(#paint8_linear_1_211)"
			/>
			<path
				opacity="0.45"
				d="M127.22 74.38C127.22 80.07 126.33 85.55 124.68 90.69C120.33 104.24 110.7 115.43 98.2199 121.84C95.3099 123.33 92.25 124.56 89.07 125.51C84.92 126.74 80.56 127.48 76.05 127.65C75.34 127.68 74.63 127.69 73.91 127.69C53.8 127.69 36.28 116.55 27.21 100.1C36.43 103.89 47.41 106.48 60.43 106.99C73.06 107.49 83.5399 105.54 92.2199 102.1C110.88 94.72 121.28 80.44 126.92 68.68C127.07 70.05 127.16 71.45 127.2 72.85C127.21 73.36 127.22 73.87 127.22 74.38Z"
				fill="url(#paint9_linear_1_211)"
			/>
			<path
				d="M126.51 65.65C126.51 65.65 118.92 37.85 84.0201 28.7C63.1001 23.21 48.5801 28.16 40.3101 33C66.7201 11.44 107.11 20 122.09 51.54C125.57 58.85 126.26 64.63 126.51 65.65Z"
				fill="url(#paint10_linear_1_211)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_1_211"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(73.9893 74.2747) scale(63.6982 63.6982)"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</radialGradient>
				<radialGradient
					id="paint1_radial_1_211"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(76.5565 53.5182) scale(64.6943 64.6943)"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
				</radialGradient>
				<linearGradient
					id="paint2_linear_1_211"
					x1="38.8854"
					y1="-7.8078"
					x2="51.114"
					y2="145.519"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
				<linearGradient
					id="paint3_linear_1_211"
					x1="98.7031"
					y1="-12.5786"
					x2="110.932"
					y2="140.748"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
				<linearGradient
					id="paint4_linear_1_211"
					x1="103.453"
					y1="-12.9575"
					x2="115.681"
					y2="140.369"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
				<linearGradient
					id="paint5_linear_1_211"
					x1="66.1003"
					y1="-9.97838"
					x2="78.3289"
					y2="143.349"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
				<linearGradient
					id="paint6_linear_1_211"
					x1="86.7414"
					y1="-11.6248"
					x2="98.9701"
					y2="141.703"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
				<linearGradient
					id="paint7_linear_1_211"
					x1="56.2929"
					y1="-9.19628"
					x2="68.5216"
					y2="144.131"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
				<linearGradient
					id="paint8_linear_1_211"
					x1="65.8072"
					y1="143.393"
					x2="73.8028"
					y2="70.4918"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity="0.3"
					/>
				</linearGradient>
				<linearGradient
					id="paint9_linear_1_211"
					x1="71.183"
					y1="140.259"
					x2="80.1192"
					y2="64.0656"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity="0.3"
					/>
				</linearGradient>
				<linearGradient
					id="paint10_linear_1_211"
					x1="112.625"
					y1="-8.2897"
					x2="79.0733"
					y2="57.8732"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
					/>
					<stop
						offset={1}
						stopColor={
							complementaryColors[Math.floor(Math.random() * 3)]
						}
						stopOpacity={0}
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Planet7;
