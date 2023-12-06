//메인페이지
import React, { useState } from 'react';
import styled from 'styled-components';

import CalendarMain from '../Calendar/CalendarMain';

import Header from './Header';
import MenuBar from '../SideContents/MenuBar';
import Side from '../SideContents/Side';

function MainPage(props) {
	const [isAdd, setIsAdd] = useState(false);
	const [selectDate, setSelectDate] = useState(null);

	const changeDate = (date) => {
		setSelectDate(date);
		setIsAdd(true);
	};

	return (
		<Wrapper>
			<Header />
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
