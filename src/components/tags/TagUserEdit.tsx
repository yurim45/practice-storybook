import React from 'react';
import styled from 'styled-components';

const TagUserEdit = () => {
	return <Inner>직접입력</Inner>;
};

export default TagUserEdit;

const Inner = styled.span`
	padding: 3px 6px;
	font-size: 12px;
	font-weight: 400;
	line-height: 130%;
	background: #e9f6ff;
	color: ${({ theme }) => theme.colors.txtBlue};
	white-space: nowrap;
`;
