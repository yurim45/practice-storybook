type IconProps = {
	on?: boolean;
	width?: number;
};

const IconCheckSmall = ({ width = 20, on = true }: IconProps) => {
	return (
		<svg
			width={width}
			height={width}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.6727 5.26007C17.0813 5.63157 17.1114 6.26402 16.7399 6.67268L8.73994 15.4727C8.55598 15.675 8.29718 15.7932 8.02379 15.7997C7.7504 15.8062 7.48627 15.7005 7.29289 15.5071L3.29289 11.5071C2.90237 11.1166 2.90237 10.4834 3.29289 10.0929C3.68342 9.70238 4.31658 9.70238 4.70711 10.0929L7.96553 13.3513L15.2601 5.32733C15.6316 4.91868 16.264 4.88856 16.6727 5.26007Z"
				fill={on ? '#00C092' : '#D5D5D5'}
			/>
		</svg>
	);
};

export default IconCheckSmall;
