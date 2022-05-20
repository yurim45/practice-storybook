import { inputStyle } from '@styles/variable';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

type NumberFieldProps<T> = {
	control: Control<T>;
	name: Path<T>;
	placeholder?: string;
	hasComma?: boolean;
	format?: 'iino' | 'phone';
	label?: string;
};

const FormattedInput = <T extends FieldValues>({
	control,
	name,
	format,
	placeholder,
	hasComma = true,
}: NumberFieldProps<T>) => {
	return (
		<StInputContainer>
			<Controller
				render={({ field }) => (
					<NumberFormat
						{...field}
						placeholder={placeholder}
						format={
							format === 'iino'
								? '######-#######'
								: format === 'phone'
								? '###-####-####'
								: undefined
						}
						customInput={StInput}
						thousandSeparator={hasComma}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							field.onChange(e.target.value.replaceAll(/[^0-9]/g, ''))
						}
					/>
				)}
				name={name}
				control={control}
				rules={{
					required: {
						value: true,
						message: '필수로 입력해주세요.',
					},
				}}
			/>
		</StInputContainer>
	);
};

export default FormattedInput;

const StInputContainer = styled.div`
	display: flex;
	width: 100%;
`;

const StInput = styled.input`
	${inputStyle()};
`;
