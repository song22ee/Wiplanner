import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

const StyledButton = styled.button`
	width: ${(props) => `${props.width}px`};
	height: 30px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	background-color: ${(props) => (props.clicked ? 'white' : '#786161')};
	margin-right: 15px;
	border: 1px solid white;

	& > span {
		font-weight: bolder;
		font-size: 14px;
		color: ${(props) => (props.clicked ? 'black' : 'white')};
	}
`;

function MenuTab(props) {
	const { title, onClick, width, clicked } = props;

	return (
		<StyledButton
			clicked={clicked}
			onClick={onClick}
			width={width}>
			<span>{title || 'button'}</span>
		</StyledButton>
	);
}

export default MenuTab;
