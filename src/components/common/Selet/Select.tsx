import React from 'react';
import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import { inputStyle } from '@styles/variable';
import { theme } from '@styles/theme';

type TField = {
	id: number;
	value: string;
	name: string;
};

type TSelect = {
	register: UseFormRegisterReturn;
	title: string;
	data: any;
	placeholder?: string;
	disabled?: boolean;
};

const Select = ({ register, title, data, disabled }: TSelect): JSX.Element => {
	const formattedDatas: TField[] =
		data &&
		data.map((data: any) => {
			return {
				id: data.id,
				value: data.value,
				name: data.name,
			};
		});

	return (
		<Inner>
			<Title>{title}</Title>
			<SelectItem disabled={disabled} {...register}>
				<option value={'default'}>선택해주세요.</option>
				{formattedDatas?.map((item: any) => (
					<option value={item.value} key={item.id} disabled={item.id === '0'}>
						{item.name}
					</option>
				))}
			</SelectItem>
			<span>▼</span>
		</Inner>
	);
};

export default Select;

const Inner = styled.div`
	width: 335px;
	margin: auto;

	span {
		position: relative;
		top: -28px;
		right: -305px;
		width: 0;
		color: ${({ theme }) => theme.colors.txt999};
		z-index: 2;
	}
`;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	color: ${({ theme }) => theme.colors.txt333};
	font-size: 15px;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: -0.2px;
`;

const SelectItem = styled.select`
	${inputStyle()};
	background: ${(props) => (props.disabled ? '#F8F8F8' : '#ffffff')};
	color: ${(props) => props.disabled && theme.colors.txt999};

	option {
		background: lightcoral;
	}
`;
