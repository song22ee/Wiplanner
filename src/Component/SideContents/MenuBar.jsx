//메인페이지
import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

function MenuBar(props) {
	return (
		<Wrapper>
			<Menu1>
				<FontAwesomeIcon icon={faCalendar} />
			</Menu1>
			<Menu2>
				<FontAwesomeIcon icon={faFlag} />
			</Menu2>
		</Wrapper>
	);
}

export default MenuBar;

const Wrapper = styled.div`
	height: 100%;
	width: 55px;
	background-color: ${Theme.second};
	border-right: 1px solid white;
	padding-top: 10px;
	box-sizing: border-box;
`;

const Menu1 = styled.button`
	width: 35px;
	height: 37px;
	background-color: ${Theme.main};
	border-radius: 10px;
	border: none;
	& > svg {
		color: white;
		font-size: 23px;
	}
`;
const Menu2 = styled.button`
	width: 35px;
	height: 37px;
	background-color: white;
	border-radius: 10px;
	margin-top: 10px;
	border: none;
	& > svg {
		color: ${Theme.main};
		font-size: 23px;
	}
`;
