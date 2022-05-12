import React from 'react';
import styled from 'styled-components';
import { flex, title05 } from '../../../styles/variable';
import { UseFormRegisterReturn } from 'react-hook-form';

type TRadio = {
	register: UseFormRegisterReturn;
	name: string;
	title?: string;
	data: { value: string; text: string }[];
	disabled?: boolean;
};

export default function RadioText({
	register,
	name,
	data,
	disabled,
	title,
}: TRadio) {
	return (
		<div>
			{title && <Title>{title}</Title>}
			<InputGroup>
				{data?.map((btn, i) => {
					return (
						<Label key={i}>
							<InnerInput
								{...register}
								type="radio"
								value={btn.value}
								name={name}
								disabled={disabled}
							/>
							<span>{btn.text}</span>
						</Label>
					);
				})}
			</InputGroup>
		</div>
	);
}

const Inner = styled.div``;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	${title05()};
`;

const InputGroup = styled.div`
	${flex('center', 'flex-start', 'column')};

	input[type='radio'] + span {
		margin: 6px 0;
		padding: 7px 16px;
		background: var(--white);
		color: var(--primary);
		font-weight: 600;
		font-size: 15px;
		border: 1px solid var(--primary);
		border-radius: 22px;
		cursor: pointer;
	}

	input[type='radio']:checked + span {
		background: var(--primary);
		color: var(--white);
	}
`;

const InnerInput = styled.input`
	display: none;
`;

const Label = styled.label`
	${flex('flex-start')};
`;
