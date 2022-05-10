import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import icons from '../../icons/index';
import { flex, inputStyle, title05 } from '../../../styles/variable';

type InputProps = {
	type?: 'text' | 'date' | 'email';
	name: string;
	register: UseFormRegisterReturn;
	title?: string;
	placeholder?: string;
	iconHelp?: boolean;
	iconStar?: boolean;
	prefix?: React.ReactNode;
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
}: InputProps) => {
	return (
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
				type={type}
				placeholder={placeholder}
				prefixYn={prefix ? true : false}
			/>
		</Inner>
	);
};

export default Input;

const Inner = styled.div`
	width: 335px;
	margin: auto;
`;

const TitleWrapper = styled.div`
	${flex('flex-start', 'center')};
`;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	${title05()};
`;

const IconWrapper = styled.span`
	position: absolute;
	padding: 14px 12px;
`;

const InnerInput = styled.input<{ prefixYn: boolean }>`
	${inputStyle()};
	padding-left: ${({ prefixYn }) => prefixYn && '35px'};
`;
