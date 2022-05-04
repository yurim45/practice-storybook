import React from 'react';
import styled from 'styled-components';
import { flex, title05 } from '@styles/variable';
import { UseFormRegisterReturn } from 'react-hook-form';
import { theme } from '@styles/theme';

type TRadio = {
	register: UseFormRegisterReturn;
	name: string;
	title?: string;
	data: { value: string; text: string }[];
	disabled?: boolean;
};

export default function Check({
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
								type="check"
								value={btn.value}
								name={name}
								disabled={disabled}
							/>
							<InnerText>{btn.text}</InnerText>
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
	${flex('flex-start')};
	flex-wrap: wrap;
	width: 100%;
`;

const InnerInput = styled.input`
	${flex()};
	width: 24px;
	height: 24px;
	background: var(--white);
	border-radius: 50%;
	box-shadow: 0 0 0 0.5px var(--txtDim);
	cursor: pointer;

	:disabled {
		background: '#F8F8F8';
	}

	&:checked {
		box-shadow: 0 0 0 1px var(--primary);

		:disabled {
			box-shadow: var(--mainBgColor);
		}
	}

	&:checked:before {
		background: var(--primary);

		:disabled {
			background: '#E0E0E0';
		}
	}

	&:before {
		content: '';
		display: block;
		width: 60%;
		height: 60%;
		border-radius: 50%;
	}
`;

const InnerText = styled.div`
	${flex('flex-start')};
	padding: 0 8px;
	font-weight: 400;
	font-size: 15px;
	cursor: pointer;
`;

const Label = styled.label`
	${flex('flex-start')};
`;