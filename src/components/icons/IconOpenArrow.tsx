import styled from 'styled-components';

type IconProps = {
	color?: string;
	open?: boolean;
};

const IconOpenArrow = ({ color = '#333333', ...props }: IconProps) => {
	return (
		<Svg
			{...props}
			width="13"
			height="16"
			// viewBox="0 0 13 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1.5 6L6.5 11L11.5 6" stroke={color} strokeWidth="1.5" />
		</Svg>
	);
};

export default IconOpenArrow;

const Svg = styled.svg<IconProps>`
	transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
`;
