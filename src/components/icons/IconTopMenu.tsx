type IconProps = {
	on: boolean;
};

const IconTopMenu = ({ on }: IconProps) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect y="5" width="18" height="1.5" fill="black" />
			<rect y="11.5" width="18" height="1.5" fill="black" />
			<rect y="18" width="18" height="1.5" fill="black" />
			{on && <circle cx="19" cy="5" r="4" fill="#F85151" />}
		</svg>
	);
};

export default IconTopMenu;
