import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	height: 24px;
	border-radius: 5px;
	border: 1px solid #b1b1b1;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: ${(props) => props.fontSize || '10px'};
	width: ${(props) => props.width || '50px'};
	height: ${(props) => props.height || '30px'};
	background-color: ${(props) => props.color || 'white'};
	cursor: pointer;
	margin: 0 ${(props) => `${props.margin}px`};
	& > span {
		font-size: 10px;
		position: relative;
		top: -1px;
		color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
		font-weight: bold;
	}
`;

function Button(props) {
	const { title, onClick, fontSize, width, height, color, fontColor, type, margin } = props;

	return (
		<StyledButton
			onClick={onClick}
			fontSize={fontSize}
			width={width}
			height={height}
			color={color}
			fontColor={fontColor}
			margin={margin}
			type={type}>
			<span>{title || 'button'}</span>
		</StyledButton>
	);
}

export default Button;
