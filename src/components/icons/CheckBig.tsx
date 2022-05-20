type IconProps = {
	on?: boolean;
};

const IconCheckBig = ({ on = true }: IconProps) => {
	return (
		<svg
			width="26"
			height="26"
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="13" cy="13" r="13" fill={on ? '#00C092' : '#E5E5E5'} />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.6727 8.26007C20.0813 8.63157 20.1114 9.26402 19.7399 9.67268L11.7399 18.4727C11.556 18.675 11.2972 18.7932 11.0238 18.7997C10.7504 18.8062 10.4863 18.7005 10.2929 18.5071L6.29289 14.5071C5.90237 14.1166 5.90237 13.4834 6.29289 13.0929C6.68342 12.7024 7.31658 12.7024 7.70711 13.0929L10.9655 16.3513L18.2601 8.32733C18.6316 7.91868 19.264 7.88856 19.6727 8.26007Z"
				fill={on ? 'white' : '#D5D5D5'}
			/>
		</svg>
	);
};

export default IconCheckBig;
