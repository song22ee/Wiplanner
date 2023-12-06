//메인페이지
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../Theme';

import MenuTab from '../ui/MenuTab';

function Header(props) {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<span>WIPLANER</span>
			<Tabs>
				<MenuTab
					width={76}
					title="캘린더"
					background="white"
					color="black"
					onClick={() => {
						navigate('/');
					}}
				/>
				<MenuTab
					width={100}
					title="타임 테이블"
					background="#786161"
					onClick={() => {
						navigate('/TimeTable');
					}}
				/>
				<MenuTab
					width={76}
					title="고정일정"
					background="#786161"
					onClick={() => {
						navigate('/FixSchedule');
					}}
				/>
			</Tabs>
		</Wrapper>
	);
}

export default Header;

const Wrapper = styled.div`
	width: 1535px;
	height: 100px;
	border-bottom: 1px solid white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${Theme.main};
	padding-left: 30px;
	box-sizing: border-box;
	& > span {
		color: white;
		font-size: 30px;
		font-weight: bold;
	}
`;

const Tabs = styled.div`
	width: 415px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	top: 26px;
`;
