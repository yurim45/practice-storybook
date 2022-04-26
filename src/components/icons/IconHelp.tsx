type IconProps = {
	width?: number;
};
const IconHelp = ({ width }: IconProps) => {
	return (
		<svg
			width={width}
			// height="15"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="7" cy="7.5" r="6.5" fill="white" stroke="#B5B5B5" />
			<path
				d="M5 4.84261C5.16131 4.39496 5.47969 4.01748 5.89877 3.77704C6.31784 3.53659 6.81056 3.4487 7.28966 3.52893C7.76875 3.60915 8.2033 3.85232 8.51635 4.21536C8.82939 4.57839 9.00072 5.03787 9 5.51242C9 6.85203 6.94168 7.52184 6.94168 7.52184V8.5"
				stroke="#B5B5B5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="7" cy="11" r="1" fill="#B5B5B5" />
		</svg>
	);
};

export default IconHelp;
