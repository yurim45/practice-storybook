import React, { useState } from 'react';
import styled from 'styled-components';
import { flex, title05 } from '@styles/variable';
import { UseFormRegisterReturn } from 'react-hook-form';
import check from '../../icons/check/index';

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
	const [checkValue, setCheckValue] = useState<string>('');
	console.log();

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
								// onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
								// 	setCheckValue((e.target as HTMLInputElement).value)
								// }
							/>
							{/* {checkValue === btn?.value ? (
								disabled ? (
									<check.CheckDimOn />
								) : (
									<check.CheckOn />
								)
							) : disabled ? (
								<check.CheckDimOff />
							) : (
								<check.CheckOff />
							)} */}
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
	width: 200%;
`;

const InnerInput = styled.input`
	width: 20px;
	height: 20px;
	background: var(--white);
	border-radius: 4px;
	cursor: pointer;

	:disabled {
		background: '#F8F8F8';
		border: 1px solid var(--line);
	}

	:checked {
		background: var(--primary);
		color: var(--white);

		&:after {
			content: '✔';
			padding: 5px;
			line-height: 1.7;
		}

		:disabled {
			background: #f8f8f8;
			border: 1px solid var(--line);
		}
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
