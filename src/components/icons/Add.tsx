type IconAddProps = {
	width?: number;
	color?: string;
};

const IconAdd = ({ width = 9, color = '#00C092' }: IconAddProps) => {
	return (
		<svg
			width={width}
			height="14"
			viewBox="0 0 9 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 7H9V8H0V7Z" fill={color} />
			<path d="M5 3V12H4V3H5Z" fill={color} />
		</svg>
	);
};

export default IconAdd;
