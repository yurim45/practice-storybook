const display = {
	androidS: '280px',
	androidR: '360px',
	mobile: '375px', // 기본
	tablet: '900px',
	desktop: '1800px',
};

const textSize = {
	s: '12px', // 본문
	m: '16px', // 타이틀
	lg: '24px',
	xLg: '32px',
};

const colors = {
	primary2: '#0AA882',
	primary: '#00C092',
	txt333: '#333333',
	txt555: '#555555',
	txt777: '#777777',
	txt999: '#999999',
	txtGreen: '#00B98D',
	txtRed: '#F85151',
	txtBlue: '#0085FF',
	txtBtnExcept: '#7C8986',
	bgBtnExcept: '#EEF1F1',
	txtDim: '#C5C5C5',
	bgColor: '#f7f9f8',
	bgColor2: '#e5e5e5',
	mainBgColor: '#EEEEEE',
	white: '#ffffff',
	borderColor: '#E5E5E5',
};

export const theme = {
	textSize,
	colors,
	// 반응형
	androidS: `(max-width: ${display.androidS})`,
	androidR: `(max-width: ${display.androidR})`,
	mobile: `(max-width: ${display.mobile})`,
	tablet: `(max-width: ${display.tablet})`,
	desktop: `(max-width: ${display.desktop})`,
};
