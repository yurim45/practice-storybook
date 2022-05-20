import styled from 'styled-components';

type IconProps = {
	color?: string;
	direction?: 'up' | 'down';
};

const IconInputArrow = ({ color = 'black', ...props }: IconProps) => {
	return (
		<Svg
			{...props}
			width="14"
			height="12"
			viewBox="0 0 14 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.21864 2.97828C6.61897 2.47706 7.38103 2.47706 7.78136 2.97828L11.765 7.96592C12.2881 8.62081 11.8218 9.59 10.9837 9.59L3.01634 9.59C2.17821 9.59 1.71192 8.62081 2.23498 7.96592L6.21864 2.97828Z"
				fill={color}
			/>
		</Svg>
	);
};

export default IconInputArrow;

const Svg = styled.svg<IconProps>`
	transform: ${({ direction }) =>
		direction === 'down' ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
