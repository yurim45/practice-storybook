import React, { useState } from 'react';
import styled from 'styled-components';
import { flex, title05 } from '@styles/variable';
import { UseFormRegisterReturn } from 'react-hook-form';

type TRadio = {
	register: UseFormRegisterReturn;
	name: string;
	title?: string;
	data: { value: string; text: string }[];
	isDisabled?: boolean;
};

export default function Check({
	register,
	name,
	data,
	isDisabled,
	title,
}: TRadio) {
	return (
		<Inner>
			{title && <Title>{title}</Title>}
			<InputGroup>
				{data?.map((btn, i) => {
					return (
						<Label key={i}>
							<input
								{...register}
								type="checkbox"
								value={btn?.value}
								name={name}
								disabled={isDisabled}
							/>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="19"
									height="19"
									rx="3.5"
									fill="white"
									stroke="#E5E5E5"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.5045 5.44505C15.811 5.72368 15.8336 6.19802 15.555 6.50451L8.88829 13.8378C8.75032 13.9896 8.55622 14.0782 8.35118 14.0831C8.14613 14.088 7.94803 14.0087 7.803 13.8637L4.46967 10.5303C4.17678 10.2374 4.17678 9.76257 4.46967 9.46968C4.76256 9.17678 5.23744 9.17678 5.53033 9.46968L8.30748 12.2468L14.445 5.4955C14.7237 5.18901 15.198 5.16642 15.5045 5.44505Z"
								/>
							</svg>
							<InnerText>{btn?.text}</InnerText>
						</Label>
					);
				})}
			</InputGroup>
		</Inner>
	);
}

const Inner = styled.div`
	${flex('flex-start', 'flex-start', 'column')};
	overflow: auto;

	::-webkit-scrollbar {
		display: none;
	}
`;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	${title05()};
`;

const InputGroup = styled.div`
	${flex('flex-start')};
	flex-wrap: wrap;
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

	input[type='checkbox']:checked + svg rect {
		stroke: none;
		fill: var(--compo-primary);
	}

	input[type='checkbox'][disabled] + svg rect {
		stroke: var(--compo-line);
		fill: #f8f8f8;
	}

	input[type='checkbox']:checked + svg path {
		fill: var(--white);
	}

	input[type='checkbox'][disabled]:checked + svg path {
		fill: var(--text-disabled);
	}
`;
