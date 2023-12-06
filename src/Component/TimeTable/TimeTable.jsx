//메인페이지
import React, { useState } from 'react';
import styled from 'styled-components';

import TimeTableMain from './TimeTableMain';

import Header from '../Main/Header';
import MenuBar from '../SideContents/MenuBar';
import Side from '../SideContents/Side';

function FixSchedule(props) {
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
						<TimeTableMain />
					</ConBody>
				</Container>
			</Body>
		</Wrapper>
	);
}

export default FixSchedule;

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
