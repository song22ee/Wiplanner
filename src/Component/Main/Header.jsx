//메인페이지
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../Theme';

import MenuTab from '../ui/MenuTab';

function Header(props) {
	const [CalendarClicked, setCalendarClicked] = useState(false);
	const [TimeTableClicked, setTimeTableClicked] = useState(false);
	const [TodoListClicked, setTodoListClicked] = useState(false);

	const navigate = useNavigate();

	return (
		<Wrapper>
			<span>WIPLANER</span>
			<Tabs>
				<MenuTab
					width={76}
					clicked={CalendarClicked}
					title="캘린더"
					onClick={() => {
						setCalendarClicked(true);
						setTimeTableClicked(false);
						setTodoListClicked(false);
						navigate('/');
					}}
				/>
				<MenuTab
					width={100}
					clicked={TimeTableClicked}
					title="타임 테이블"
					onClick={() => {
						setCalendarClicked(false);
						setTimeTableClicked(true);
						setTodoListClicked(false);
						navigate('/TimeTable');
					}}
				/>
				<MenuTab
					width={76}
					clicked={TodoListClicked}
					title="고정일정"
					onClick={() => {
						setCalendarClicked(false);
						setTimeTableClicked(false);
						setTodoListClicked(true);
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
