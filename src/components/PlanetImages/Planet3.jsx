import { generateComplementaryColors } from "../../utils";

const Planet3 = () => {
	const complementaryColors = generateComplementaryColors();

	return (
		<svg
			width={252}
			height={168}
			viewBox="0 0 252 168"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M208.75 84.15C208.75 81.27 208.6 78.42 208.3 75.6C206.09 53.52 195.62 35.06 180.71 22.03C166.95 9.78999 149.07 1.98999 129.21 1.08999C111.48 0.159991 93.14 4.88 76.87 16.54C76.83 16.56 76.79 16.59 76.76 16.62C76.75 16.63 76.74 16.64 76.68 16.68C76.66 16.69 76.65 16.7 76.65 16.7C62.84 26.65 53.18 39.74 47.64 54.09C20.17 54.63 1.90996 59.68 0.149957 68.89C-1.73004 78.7 15.53 91.06 43.92 102.32C43.96 102.5 44 102.68 44.04 102.85C44.05 102.89 44.06 102.93 44.07 102.96C44.23 103.68 44.41 104.4 44.59 105.12C44.61 105.21 44.63 105.29 44.66 105.38C44.84 106.09 45.04 106.8 45.24 107.5C45.26 107.56 45.27 107.62 45.29 107.68C45.72 109.15 46.18 110.6 46.69 112.03C46.7 112.07 46.72 112.1 46.73 112.14C46.95 112.76 47.17 113.38 47.41 113.99C52.75 128.19 62.08 141.15 75.33 151.07C75.67 151.33 76.02 151.59 76.37 151.84C76.6 152.01 76.8299 152.17 77.06 152.34C77.6899 152.79 78.32 153.23 78.96 153.65C95.19 164.54 113.23 168.78 130.58 167.59C133.8 167.39 136.97 167.01 140.08 166.46C148.15 165.03 155.81 162.43 162.9 158.85C163.64 158.48 164.37 158.09 165.1 157.69C165.22 157.62 165.35 157.56 165.47 157.49C166.19 157.09 166.91 156.69 167.62 156.27C167.68 156.24 167.74 156.2 167.79 156.17C168.49 155.76 169.18 155.33 169.87 154.9C169.93 154.86 169.99 154.83 170.04 154.79C170.75 154.34 171.46 153.87 172.16 153.4C172.19 153.38 172.22 153.36 172.25 153.34C172.31 153.3 172.36 153.26 172.42 153.22C172.87 152.91 173.31 152.61 173.75 152.29C173.86 152.21 173.97 152.14 174.07 152.06C174.51 151.74 174.94 151.42 175.38 151.1C175.47 151.03 175.56 150.96 175.65 150.9C176.68 150.12 177.68 149.33 178.67 148.5C178.82 148.38 178.96 148.25 179.11 148.13C179.44 147.85 179.77 147.57 180.09 147.29C180.28 147.13 180.47 146.96 180.66 146.79C180.94 146.54 181.22 146.29 181.5 146.03C181.69 145.86 181.88 145.68 182.07 145.5C182.09 145.48 182.11 145.46 182.13 145.44C182.23 145.35 182.33 145.25 182.44 145.16C186.74 141.19 190.63 136.75 194.03 131.9C226.92 132.46 249.4 127.36 251.38 117.1C253.21 107.44 236.44 95.29 208.75 84.15ZM45.31 60.98H45.3C45.39 60.69 45.48 60.4 45.57 60.11C45.48 60.4 45.4 60.69 45.31 60.98ZM42.94 71.67C42.93 71.73 42.92 71.79 42.91 71.85C42.8 72.56 42.7 73.28 42.62 74C42.61 74.12 42.59 74.23 42.58 74.35C42.49 75.07 42.41 75.79 42.35 76.51C42.35 76.54 42.34 76.57 42.34 76.6C42.28 77.29 42.22 77.99 42.18 78.68C42.17 78.81 42.16 78.94 42.15 79.08C42.11 79.78 42.07 80.47 42.05 81.17C42.04 81.31 42.04 81.46 42.04 81.6C42.03 81.91 42.02 82.22 42.01 82.53C29.15 77.04 21.89 71.85 22.65 67.88C23.4 64 31.72 61.88 45.18 61.47C44.22 64.8 43.47 68.2 42.94 71.67ZM208.41 91.95C223.15 97.91 231.64 103.59 230.82 107.86C229.99 112.2 219.68 114.34 203.32 114.35C205.97 107.39 207.73 99.9 208.41 91.95ZM10.04 68.93C11.74 60.09 30.37 57.56 46.55 57.05C46.32 57.71 46.11 58.37 45.9 59.04C25.4 59.76 13.09 63.46 11.97 69.3C10.8 75.4 21.81 83.84 42.17 92.48C42.24 92.51 42.3 92.53 42.37 92.56C42.37 92.56 42.37 92.56 42.38 92.56C42.41 92.83 42.43 93.1 42.46 93.37C42.51 93.84 42.57 94.32 42.62 94.79C42.21 94.62 41.81 94.45 41.41 94.28C26.12 87.81 8.26996 78.15 10.04 68.93ZM245.4 114.12C243.63 123.34 223.47 125.7 206.87 126.05C205.24 126.08 203.56 126.1 201.87 126.1C200.51 126.1 199.13 126.09 197.74 126.07C198.11 125.43 198.48 124.77 198.84 124.12C201.59 124.16 204.26 124.15 206.84 124.09C228.96 123.61 242.31 119.84 243.48 113.75C244.65 107.65 233.64 99.21 213.27 90.57C211.77 89.93 210.22 89.3 208.64 88.67C208.64 88.57 208.65 88.46 208.65 88.36C208.68 87.77 208.7 87.17 208.72 86.58C210.54 87.3 212.31 88.03 214.04 88.76C229.32 95.24 247.17 104.9 245.4 114.12Z"
				fill="url(#paint0_radial_1_98)"
			/>
			<path
				d="M191.89 84.39C191.89 137.96 131.97 168.82 88.45 139.6C50.04 113.83 49 57.55 86.62 30.45C86.62 30.45 86.63 30.44 86.65 30.43C86.7 30.4 86.7 30.39 86.71 30.38C86.74 30.35 86.77 30.33 86.8 30.32C130.08 -0.699997 191.89 29.86 191.89 84.39Z"
				fill="url(#paint1_radial_1_98)"
			/>
			<path
				d="M97.29 84.39C97.68 88.3 84 84.39 75.4 84.39C69.66 84.39 63.56 85.44 58.99 83.92C59.03 77.61 59.96 71.51 61.64 65.74C63.97 65.44 67.92 66.11 73.84 70.71C84.39 78.91 96.9 80.48 97.29 84.39Z"
				fill="url(#paint2_linear_1_98)"
			/>
			<path
				d="M143.02 92.59C133.25 91.81 122.3 89.07 120.35 91.03C118.4 92.98 136.11 97.97 152.4 100.8C170.38 103.93 181.72 105.1 177.81 100.02C173.9 94.94 167.65 88.68 157.87 91.81C148.11 94.94 148.48 93.03 143.02 92.59Z"
				fill="url(#paint3_linear_1_98)"
			/>
			<path
				d="M142.24 119.96C142.24 124.19 103.54 112.92 90.64 118.01C81 121.81 77.91 124.51 72.07 124.01C65.19 114.75 60.65 103.64 59.36 91.56C62.73 92.84 68.53 95.32 77.74 100.03C94.56 108.62 142.24 114.09 142.24 119.96Z"
				fill="url(#paint4_linear_1_98)"
			/>
			<path
				d="M172.76 131.03C167.71 136.16 161.82 140.47 155.33 143.74C153.59 142.18 151.88 140.42 149.28 139.5C142.63 137.15 125.05 132.86 128.56 130.51C132.08 128.16 143.41 129.73 156.7 128.95C164.75 128.47 169.93 129.86 172.76 131.03Z"
				fill="url(#paint5_linear_1_98)"
			/>
			<path
				d="M167.26 120.35C162.58 115.38 149.28 116.44 151.23 121.13C152.3 123.68 173.51 126.99 167.26 120.35Z"
				fill="url(#paint6_linear_1_98)"
			/>
			<path
				d="M110.58 127.38C104.77 126.09 100.81 128.55 100.03 130.51C99.25 132.46 116.06 135.2 116.45 133.25C116.84 131.3 114.1 128.16 110.58 127.38Z"
				fill="url(#paint7_linear_1_98)"
			/>
			<path
				d="M108.24 93.77C104.37 92.8 97.3 94.55 97.3 96.9C97.3 99.25 106.68 101.98 110.59 100.81C114.49 99.63 116.05 95.72 108.24 93.77Z"
				fill="url(#paint8_linear_1_98)"
			/>
			<path
				d="M114.88 101.19C113.72 101 112.14 102.36 112.93 103.54C113.71 104.71 119.57 101.98 114.88 101.19Z"
				fill="url(#paint9_linear_1_98)"
			/>
			<path
				d="M154.36 112.14C151.85 111.39 150.06 112.53 151.23 114.88C152.41 117.22 162.18 114.48 154.36 112.14Z"
				fill="url(#paint10_linear_1_98)"
			/>
			<path
				d="M172.73 124.26C171.35 122.88 170.38 125.43 171.17 126.21C171.95 126.99 175.86 127.38 172.73 124.26Z"
				fill="url(#paint11_linear_1_98)"
			/>
			<path
				d="M137.15 149.8C133.35 150.48 129.43 150.83 125.44 150.83C111.75 150.83 99.02 146.69 88.45 139.59C96.28 137.33 109.3 139.18 122.32 145.36C128.38 148.25 133.35 149.42 137.15 149.8Z"
				fill="url(#paint12_linear_1_98)"
			/>
			<path
				d="M139.9 142.63C137.91 142.63 137.95 143.8 137.95 144.98C137.95 146.15 139.9 146.54 141.08 144.98C142.24 143.41 141.46 142.63 139.9 142.63Z"
				fill="url(#paint13_linear_1_98)"
			/>
			<path
				d="M134.82 143.8C134.05 143.67 133.65 145.75 134.82 146.15C135.99 146.54 137.16 144.19 134.82 143.8Z"
				fill="url(#paint14_linear_1_98)"
			/>
			<path
				d="M90.26 122.3C87.55 122.84 83.61 124.65 87.13 126.99C90.65 129.34 98.07 120.74 90.26 122.3Z"
				fill="url(#paint15_linear_1_98)"
			/>
			<path
				d="M77.36 89.86C75.95 88.45 75.01 92.21 75.8 92.6C76.57 92.99 78.92 91.42 77.36 89.86Z"
				fill="url(#paint16_linear_1_98)"
			/>
			<path
				d="M88.69 67.58C85.23 65.85 80.48 64.45 79.7 66.02C78.92 67.58 93.77 78.14 97.29 75.79C100.81 73.44 91.82 69.14 88.69 67.58Z"
				fill="url(#paint17_linear_1_98)"
			/>
			<path
				d="M146.15 84.39C143.68 83.15 143.8 88.69 147.32 90.25C150.84 91.81 147.72 85.17 146.15 84.39Z"
				fill="url(#paint18_linear_1_98)"
			/>
			<path
				d="M184.46 91.03C179.74 90.81 181.33 98.46 184.46 99.24C187.59 100.02 192.67 91.42 184.46 91.03Z"
				fill="url(#paint19_linear_1_98)"
			/>
			<path
				opacity="0.45"
				d="M162.78 139.35C160.4 140.97 157.92 142.43 155.33 143.74C149.68 146.59 143.57 148.66 137.14 149.8C133.34 150.48 129.42 150.83 125.43 150.83C111.74 150.83 99.01 146.69 88.44 139.59C82.13 135.36 76.6 130.08 72.08 123.99C71.1 122.67 70.16 121.31 69.28 119.91C63.97 111.54 60.48 101.89 59.37 91.54C59.12 89.19 58.99 86.79 58.99 84.38C58.99 84.22 58.99 84.06 58.99 83.91C59.03 78.71 59.66 73.65 60.83 68.8C69.13 90.72 84.99 115.84 115.24 129.36C119 131.04 122.98 132.54 127.19 133.83C139.8 137.69 151.71 139.31 162.78 139.35Z"
				fill="url(#paint20_linear_1_98)"
			/>
			<path
				opacity="0.55"
				d="M188.1 106.53C184.82 115.81 179.54 124.15 172.76 131.03C169.72 134.12 166.38 136.91 162.78 139.35C160.4 140.97 157.92 142.43 155.33 143.74C149.68 146.59 143.57 148.66 137.14 149.8C133.34 150.48 129.42 150.83 125.43 150.83C111.74 150.83 99.0099 146.69 88.4399 139.59C82.1299 135.36 76.5999 130.08 72.0799 123.99C71.0999 122.67 70.1599 121.31 69.2799 119.91C86.2799 125.86 101.57 128.72 115.24 129.35C148.65 130.89 172.44 119.1 188.1 106.53Z"
				fill="url(#paint21_linear_1_98)"
			/>
			<path
				d="M86.7999 30.32C86.7499 30.36 86.7099 30.38 86.6899 30.4C86.7099 30.38 86.7599 30.34 86.7999 30.32Z"
				fill="url(#paint22_linear_1_98)"
			/>
			<path
				d="M191.4 92.45C191.7 89.52 194.1 56.57 154.17 34.55C114.38 12.61 89.1599 28.71 86.7999 30.32C97.6899 22.52 111.03 17.93 125.44 17.93C165.4 17.94 196.24 52.96 191.4 92.45Z"
				fill="url(#paint23_linear_1_98)"
			/>
			<path
				d="M195.49 89.32C194.29 88.81 193.06 88.3 191.8 87.8C191.76 88.68 191.69 89.54 191.62 90.41C203.37 95.16 210.14 99.69 209.49 103.09C208.83 106.56 200.57 108.26 187.47 108.26C171.7 108.26 148.91 105.8 123.88 101C97.0099 95.84 73.5399 89.13 59.0099 82.91C48.7699 78.53 42.9699 74.4 43.5799 71.24C44.1699 68.14 50.8099 66.46 61.5299 66.13C61.5699 65.99 61.5999 65.86 61.6399 65.73C61.7899 65.21 61.9499 64.7 62.1099 64.19C45.7799 64.76 35.9599 67.72 35.0699 72.37C34.1399 77.23 42.9099 83.96 59.1399 90.84C59.1899 90.86 59.2499 90.88 59.2999 90.91C76.0799 98 98.9199 104.52 123.64 109.27C145.58 113.48 166.66 115.85 183.87 116.06C186.11 116.09 188.28 116.08 190.37 116.04C207.99 115.66 218.64 112.65 219.57 107.8C220.5 102.93 211.73 96.2 195.49 89.32Z"
				fill="url(#paint24_linear_1_98)"
			/>
			<path
				d="M191.89 84.2V84.39C191.89 84.98 191.88 85.56 191.87 86.15C193.32 86.72 194.74 87.3 196.11 87.89C208.29 93.05 222.52 100.75 221.11 108.09C219.7 115.43 203.63 117.31 190.41 117.6C189.11 117.63 187.78 117.64 186.42 117.64C185.3 117.64 184.16 117.63 183 117.61C165.86 117.32 145.01 114.96 123.34 110.8C98.9099 106.11 76.2999 99.69 59.4999 92.69C59.1699 92.55 58.8499 92.42 58.5299 92.28C46.3499 87.12 32.1199 79.42 33.5299 72.08C34.8799 65.03 49.7399 63.02 62.6399 62.61C62.9099 61.82 63.1999 61.03 63.5099 60.25C41.6099 60.68 27.0599 64.71 25.6499 72.04C24.1499 79.86 37.9099 89.71 60.5299 98.68C76.8799 105.16 97.8699 111.18 121.07 115.64C142.73 119.8 163.11 121.97 180.04 122.27C206.31 122.73 224.28 118.67 225.85 110.48C227.32 102.76 213.96 93.07 191.89 84.2Z"
				fill="url(#paint25_linear_1_98)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_1_98"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(125.746 84.39) scale(77.4791 77.4791)"
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
					id="paint1_radial_1_98"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(130.137 55.6513) scale(79.2384 79.2384)"
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
					id="paint2_linear_1_98"
					x1="66.0419"
					y1="166.832"
					x2="90.6664"
					y2="-5.53878"
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
					id="paint3_linear_1_98"
					x1="137.891"
					y1="177.096"
					x2="162.516"
					y2="4.72575"
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
					id="paint4_linear_1_98"
					x1="91.5627"
					y1="170.478"
					x2="116.187"
					y2="-1.89263"
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
					id="paint5_linear_1_98"
					x1="143.74"
					y1="177.932"
					x2="168.365"
					y2="5.56068"
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
					id="paint6_linear_1_98"
					x1="151.478"
					y1="179.037"
					x2="176.102"
					y2="6.66651"
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
					id="paint7_linear_1_98"
					x1="102.495"
					y1="172.04"
					x2="127.119"
					y2="-0.331615"
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
					id="paint8_linear_1_98"
					x1="95.0314"
					y1="170.974"
					x2="119.656"
					y2="-1.3979"
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
					id="paint9_linear_1_98"
					x1="104.721"
					y1="172.358"
					x2="129.346"
					y2="-0.013085"
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
					id="paint10_linear_1_98"
					x1="144.925"
					y1="178.102"
					x2="169.549"
					y2="5.7298"
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
					id="paint11_linear_1_98"
					x1="164.523"
					y1="180.9"
					x2="189.147"
					y2="8.5322"
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
					id="paint12_linear_1_98"
					x1="108.76"
					y1="172.935"
					x2="133.385"
					y2="0.564382"
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
					id="paint13_linear_1_98"
					x1="135.119"
					y1="176.7"
					x2="159.743"
					y2="4.33116"
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
					id="paint14_linear_1_98"
					x1="130.679"
					y1="176.066"
					x2="155.303"
					y2="3.69456"
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
					id="paint15_linear_1_98"
					x1="83.2791"
					y1="169.294"
					x2="107.903"
					y2="-3.07495"
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
					id="paint16_linear_1_98"
					x1="65.9114"
					y1="166.814"
					x2="90.5361"
					y2="-5.55773"
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
					id="paint17_linear_1_98"
					x1="74.9227"
					y1="168.1"
					x2="99.5472"
					y2="-4.27034"
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
					id="paint18_linear_1_98"
					x1={134}
					y1="176.541"
					x2="158.625"
					y2="4.16936"
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
					id="paint19_linear_1_98"
					x1="172.646"
					y1="182.062"
					x2="197.27"
					y2="9.68979"
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
					id="paint20_linear_1_98"
					x1="104.257"
					y1="147.494"
					x2="114.42"
					y2="88.4704"
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
					id="paint21_linear_1_98"
					x1="138.913"
					y1="153.865"
					x2="126.98"
					y2="106.426"
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
					id="paint22_linear_1_98"
					x1="86.7978"
					y1="30.2826"
					x2="86.6864"
					y2="30.4389"
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
					id="paint23_linear_1_98"
					x1="177.857"
					y1="7.02269"
					x2="148.854"
					y2="47.6991"
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
					id="paint24_linear_1_98"
					x1="117.426"
					y1="125.065"
					x2="133.452"
					y2="68.3865"
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
					/>
				</linearGradient>
				<linearGradient
					id="paint25_linear_1_98"
					x1="116.278"
					y1="124.74"
					x2="132.304"
					y2="68.0622"
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
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Planet3;
