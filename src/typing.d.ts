// src/typing.d.ts
// svg를 ReactComponent를 통해 컴포넌트처럼 사용하기 위해 storybook이 ReactComponent를 인식할 수 있도록 설정

declare module '*.mdx';
declare module '*.svg' {
	import * as React from 'react';
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}
