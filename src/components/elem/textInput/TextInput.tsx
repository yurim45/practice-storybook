import { IconHelp, IconStar } from '@components/icons';
import { flex, inputStyle, title05 } from '../../../styles/variable';
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
	${title05()};
`;

const InnerInput = styled.input`
	${inputStyle()};
`;
