type IconProps = {
	color?: string;
};
const IconUpload = ({ color = '#00C092' }: IconProps) => {
	return (
		<svg
			width="41"
			height="41"
			viewBox="0 0 41 41"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.9163 3.41663H10.2497C9.34352 3.41663 8.47448 3.7766 7.83373 4.41734C7.19298 5.05809 6.83301 5.92714 6.83301 6.83329V34.1666C6.83301 35.0728 7.19298 35.9418 7.83373 36.5826C8.47448 37.2233 9.34352 37.5833 10.2497 37.5833H30.7497C31.6558 37.5833 32.5249 37.2233 33.1656 36.5826C33.8064 35.9418 34.1663 35.0728 34.1663 34.1666V13.6666L23.9163 3.41663Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M23.917 3.41663V13.6666H34.167"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.5 30.75V20.5"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.375 25.625H25.625"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default IconUpload;
