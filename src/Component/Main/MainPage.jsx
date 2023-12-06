//메인페이지
import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import MenuTab from '../ui/MenuTab';
import Theme from '../../Theme';


import CalendarMain from '../Calendar/CalendarMain';

// import Header from './Header';
import MenuBar from '../SideContents/MenuBar';
import Side from '../SideContents/Side';

function MainPage(props) {
	const [isAdd, setIsAdd] = useState(false);
	const [selectDate, setSelectDate] = useState(null);
		const navigate = useNavigate();

	const changeDate = (date) => {
		setSelectDate(date);
		setIsAdd(true);
	};

	return (
		<Wrapper>
			<Header>
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
						color="white"
						onClick={() => {
							navigate('/TimeTable');
						}}
					/>
					<MenuTab
						width={76}
						title="고정일정"
						background="#786161"
						color="white"
						onClick={() => {
							navigate('/FixSchedule');
						}}
					/>
				</Tabs>
			</Header>
			<Body>
				<MenuBar />
				<Side />
				<Container>
					<ConBody>
						<CalendarMain
							changeDate={changeDate}
							isAdd={isAdd}
						/>
					</ConBody>
				</Container>
			</Body>
		</Wrapper>
	);
}

export default MainPage;

const Wrapper = styled.div`
	width: 1535px;
	height: 747px;
	padding: 0 px;
	box-sizing: border-box;
`;

const Header = styled.div`
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


const Body = styled.div`
	width: 100%;
	height: calc(100% - 100px);
	background-color: aliceblue;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Container = styled.div`
	height: 100%;
	width: 1130px;
	background-color: white;
`;

const ConBody = styled.div`
	width: 100%;
	height: calc(100% - 52px);
`;
