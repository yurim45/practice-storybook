import React, { useState } from 'react';
import styled from 'styled-components';
import { title06 } from '../../../styles/variable';

type StepperProps = {
	data: { id: number; value: string }[];
	components: any;
};

const Stepper = ({ data, components }: StepperProps) => {
	const [activeStep, setActiveStep] = useState<number>(1);

	return (
		<Inner>
			{data?.map(({ id, value }) => (
				<button key={id} onClick={() => setActiveStep(id)}>
					<Num active={id <= activeStep}>{id}</Num>
					{id === activeStep && <Text>{value}</Text>}
				</button>
			))}
			<div>{components[activeStep]}</div>
		</Inner>
	);
};

export default Stepper;

const Inner = styled.div`
	padding: 5px;
	button {
		margin: 0 5px;
	}
`;

const Num = styled.span<{ active: boolean }>`
	margin: 2px;
	padding: 5px 8px;
	color: ${({ active }) =>
		active ? `var(${'--white'})` : `var(${'--txt777'})`};
	background-color: ${({ active }) =>
		active ? `var(${'--primary'})` : `#EEEEEE`};
	border-radius: 11px;
`;

const Text = styled.span`
	${title06()};
`;
