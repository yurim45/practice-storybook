import { IconSearch } from '@components/icons';
import { inputStyle } from '../../../styles/variable';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

type TextInputProps = {
	register: UseFormRegisterReturn;
	placeholder?: string;
};

const SearchInput = ({
	placeholder = '검색어를 입력해 주세요.',
	register,
}: TextInputProps) => {
	return (
		<Inner>
			<IconWrapper>
				<IconSearch color="#C5C5C5" width={18} />
			</IconWrapper>
			<InnerInput {...register} type="text" placeholder={placeholder} />
		</Inner>
	);
};

export default SearchInput;

const Inner = styled.div`
	width: 335px;
	margin: auto;
`;

const IconWrapper = styled.span`
	position: absolute;
	padding: 14px 12px;
`;

const InnerInput = styled.input`
	${inputStyle()};
	padding-left: 35px;
`;
