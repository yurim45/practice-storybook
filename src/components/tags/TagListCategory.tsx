import React from 'react';
import styled from 'styled-components';

type TagProps = {
	text: string;
	color?: string;
};

const TagListCategory = ({ text, color }: TagProps) => {
	return <Inner color={color}>{text}</Inner>;
};

export default TagListCategory;

const Inner = styled.span<{ color: string | undefined }>`
	padding: 2px 5px;
	background: ${({ color }) => (color === 'green' ? '#EEF9F6' : '#FEF3F3')};
	color: ${({ color }) => (color === 'green' ? '#00B98D' : '#F85151')};
	white-space: nowrap;
`;
