import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Path, useForm } from 'react-hook-form';
import FormattedInput from './FortmattedInput';

type FormTypes = {
	iino: string;
};

export default {
	title: 'Elements/FormattedInput',
	component: FormattedInput,
	argTypes: {
		placeholder: {
			control: { type: 'text' },
		},
		hasComma: {
			control: { type: 'boolean' },
			description: 'input에서 숫자를 입력할 때 쉼표(,) 표시 여부를 선택합니다.',
		},
		name: {
			control: {
				type: null,
			},
		},
		format: {
			control: {
				type: 'radio',
				options: ['iino', 'phone'],
			},
			description:
				'input의 foramt입니다. 주민등록번호 또는 핸드폰 번호 format을 선택할 수 있습니다.',
		},
	},
} as ComponentMeta<typeof FormattedInput>;

const Template: ComponentStory<typeof FormattedInput> = (args) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormTypes>();

	return (
		<form
			onSubmit={handleSubmit((form: FormTypes) => {
				return form;
			})}
		>
			<FormattedInput<FormTypes>
				{...args}
				control={control}
				name={args.name as Path<FormTypes>}
			/>
			<div>{errors.iino?.message}</div>
		</form>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	name: 'iino',
	placeholder: '입력하세요',
	hasComma: true,
};
