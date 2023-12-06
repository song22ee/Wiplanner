import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	width: ${(props) => `${props.width}px`};
	height: 30px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	background-color: ${(props) => props.background};
	margin-right: 15px;
	border: 1px solid white;

	& > span {
		font-weight: bolder;
		font-size: 14px;
		color: ${(props) => (props.color)};
	}
`;

function MenuTab(props) {
	const { title, onClick, width, color, background } = props;

	return (
		<StyledButton
			color={color}
			background={background}
			onClick={onClick}
			width={width}>
			<span>{title || 'button'}</span>
		</StyledButton>
	);
}

export default MenuTab;
