import { IconHelp, IconStar } from '@components/icons';
import { flex, inputStyle } from '@styles/variable';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

type TextInputProps = {
	register: UseFormRegisterReturn;
	title?: string;
	placeholder?: string;
	iconHelp?: boolean;
	iconStar?: boolean;
};

const TextInput = ({
	title,
	placeholder,
	register,
	iconHelp,
	iconStar,
}: TextInputProps) => {
	return (
		<Inner>
			{title && (
				<TitleWrapper>
					<Title>{title}</Title>
					{iconHelp && <IconHelp width={14} />}
					{iconStar && <IconStar />}
				</TitleWrapper>
			)}
			<InnerInput {...register} type="text" placeholder={placeholder} />
		</Inner>
	);
};

export default TextInput;

const Inner = styled.div`
	width: 335px;
	margin: auto;
`;

const TitleWrapper = styled.div`
	${flex('flex-start', 'center')};
`;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	color: ${({ theme }) => theme.colors.txt333};
	font-size: 15px;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: -0.2px;
`;

const InnerInput = styled.input`
	${inputStyle()};
`;
