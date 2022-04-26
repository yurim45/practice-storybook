type IconProps = {
	on: boolean;
};

const IconAlertBell = ({ on }: IconProps) => {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15 25.5C16.6569 25.5 18 24.1569 18 22.5C18 20.8431 16.6569 19.5 15 19.5C13.3431 19.5 12 20.8431 12 22.5C12 24.1569 13.3431 25.5 15 25.5ZM15 27C17.4853 27 19.5 24.9853 19.5 22.5C19.5 20.0147 17.4853 18 15 18C12.5147 18 10.5 20.0147 10.5 22.5C10.5 24.9853 12.5147 27 15 27Z"
				fill="#333333"
			/>
			<path
				d="M5 12C5 6.47715 9.47715 2 15 2C20.5228 2 25 6.47715 25 12V22H5V12Z"
				fill="white"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.5 20.5V12C23.5 7.30558 19.6944 3.5 15 3.5C10.3056 3.5 6.5 7.30558 6.5 12V20.5H23.5ZM15 2C9.47715 2 5 6.47715 5 12V22H25V12C25 6.47715 20.5228 2 15 2Z"
				fill="#333333"
			/>
			{on && <circle cx="23.5" cy="4.5" r="4.5" fill="#F85151" />}
		</svg>
	);
};

export default IconAlertBell;
