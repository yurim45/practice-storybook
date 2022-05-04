import React from 'react';
import styled from 'styled-components';
import { flex, title05 } from '@styles/variable';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IconCheckSmall } from '@components/icons';

type TRadio = {
	register: UseFormRegisterReturn;
	name: string;
	title?: string;
	data: { value: string; text: string }[];
	disabled?: boolean;
};

export default function CheckText({
	register,
	name,
	data,
	disabled,
	title,
}: TRadio) {
	console.log(register);

	return (
		<div>
			{title && <Title>{title}</Title>}
			<InputGroup>
				{data?.map((btn, i) => {
					return (
						<Label key={i}>
							<InnerInput
								{...register}
								type="checkbox"
								value={btn.value}
								name={name}
								disabled={disabled}
							/>
							<span>
								<IconCheckSmall width={10} /> {btn.text}
							</span>
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
	${flex()};

	input[type='checkbox'] + span {
		${flex()};
		margin: 0 2px;
		padding: 4px 10px;
		background: var(--white);
		color: var(--txt999);
		font-weight: 400;
		font-size: 13px;
		border: 1px solid var(--bgColor2);
		border-radius: 22px;
		cursor: pointer;
	}

	input[type='checkbox']:checked + span {
		color: var(--primary);
		border: 1px solid var(--primary);
	}
`;

const InnerInput = styled.input`
	display: none;
`;

const Label = styled.label`
	${flex('flex-start')};
`;
