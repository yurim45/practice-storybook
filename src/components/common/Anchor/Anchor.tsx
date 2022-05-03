import { useState } from 'react';
import styled from 'styled-components';
import { flex } from '@styles/variable';
import { UseFormRegisterReturn } from 'react-hook-form';

type TabProps = {
	register: UseFormRegisterReturn;
	name: string;
	data: { value: string; text: string }[];
	color?: 'green' | 'red';
};

const Anchor = ({ register, name, data, color = 'green' }: TabProps) => {
	return (
		<Inner>
			{data?.map((btn, i) => {
				return (
					<Label key={i} color={color}>
						<Btn {...register} type="radio" value={btn.value} name={name} />
						<Text>{btn?.text}</Text>
					</Label>
				);
			})}
		</Inner>
	);
};

export default Anchor;

const Inner = styled.div`
	${flex('flex-start')};
`;

const Btn = styled.input`
	input[type='radio'] {
		display: none;
	}
`;

const Text = styled.span``;

const Label = styled.label<{ color: string }>`
	input[type='radio'] + span {
		display: inline-block;
		height: 34px;
		margin: 3px;
		padding: 10px 12px;
		background: ${({ theme }) => theme.colors.white};
		color: ${({ theme, color }) =>
			color === 'green' ? theme.colors.txt555 : theme.colors.txtRed};
		font-size: 14px;
		font-weight: 500;
		text-align: center;
		line-height: 1.2;
		border-radius: 5px;
		cursor: pointer;
	}

	input[type='radio']:checked + span {
		background: ${({ theme, color }) =>
			color === 'green' ? theme.colors.primary : theme.colors.txtRed};
		color: #fff;
		border-radius: 5px;
	}
`;
