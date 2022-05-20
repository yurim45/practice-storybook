import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import icons from '../../icons/index';
import { flex, inputStyle, title05 } from '../../../styles/variable';

type InputProps = {
	type?: 'text' | 'date' | 'email' | 'password';
	name: string;
	register: UseFormRegisterReturn;
	title?: string;
	placeholder?: string;
	iconHelp?: boolean;
	iconStar?: boolean;
	prefix?: React.ReactNode;
	border?: 'full' | 'bottom';
	borderColor?: string;
};

const Input = ({
	type = 'text',
	name,
	title,
	placeholder,
	register,
	iconHelp,
	iconStar,
	prefix,
	border = 'full',
	borderColor = 'text-333',
}: InputProps) => {
	const [inputType, setInputType] = useState(type);

	return (
		<>
			<Inner>
				{title && (
					<TitleWrapper>
						<Title>{title}</Title>
						{iconHelp && <icons.Help width={14} />}
						{iconStar && <icons.Star />}
					</TitleWrapper>
				)}
				{prefix && <IconWrapper>{prefix}</IconWrapper>}
				<InnerInput
					{...register}
					name={name}
					type={inputType}
					placeholder={placeholder}
					prefixYn={prefix ? true : false}
					border={border}
					borderColor={borderColor}
				/>
				{type === 'password' && (
					<IconPassword
						type="button"
						onTouchEnd={() =>
							setInputType(inputType === 'password' ? 'text' : 'password')
						}
					>
						{inputType === 'password' ? (
							<icons.Password.Off />
						) : (
							<icons.Password.On />
						)}
					</IconPassword>
				)}
			</Inner>
		</>
	);
};

export default Input;

const Inner = styled.div`
	margin: auto;
`;

const IconWrapper = styled.span`
	position: absolute;
	padding: 14px 12px;
`;

const TitleWrapper = styled.div`
	${flex('flex-start', 'center')};
`;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	${title05()};
`;

const InnerInput = styled.input<{
	prefixYn: boolean;
	border: 'full' | 'bottom';
	borderColor: string;
}>`
	${inputStyle()};
	padding-left: ${({ prefixYn, border }) =>
		prefixYn ? '35px' : border === 'bottom' ? '0px' : '12px'};
	border: ${({ border }) => border === 'bottom' && 'none'};
	border-radius: ${({ border }) => border === 'bottom' && '0px'};
	border-bottom: ${({ border }) =>
		border === 'bottom' && `2px solid var(${'--compo-line'})`};

	:focus {
		border: ${({ border }) => border === 'bottom' && 'none'};
		border-radius: ${({ border }) => border === 'bottom' && '0px'};
		border-bottom: ${({ border, borderColor }) =>
			border === 'bottom' && `2px solid var(${`--${borderColor}`})`};
	}
`;

const IconPassword = styled.button`
	position: absolute;
	right: 20px;
	padding: 12px;
`;
