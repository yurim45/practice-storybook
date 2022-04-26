type IconProps = {
	color?: string;
};
const IconStar = ({ color = '#F85151' }: IconProps) => {
	return (
		<svg
			width="9"
			height="9"
			viewBox="0 0 9 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.0625 2.5L7.12468 6"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M4.0625 1L4.0625 7.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M7.0625 2.46875L1.00032 5.96875"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default IconStar;
