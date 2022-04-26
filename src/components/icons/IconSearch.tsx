type IconProps = {
	color?: string;
	width?: number;
};

const IconSearch = ({ color = '#C5C5C5', width }: IconProps) => {
	return (
		<svg
			width={width}
			// height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.16667 14.8333C11.8486 14.8333 14.8333 11.8486 14.8333 8.16667C14.8333 4.48477 11.8486 1.5 8.16667 1.5C4.48477 1.5 1.5 4.48477 1.5 8.16667C1.5 11.8486 4.48477 14.8333 8.16667 14.8333Z"
				stroke={color}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.5 16.5L12.875 12.875"
				stroke={color}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default IconSearch;
