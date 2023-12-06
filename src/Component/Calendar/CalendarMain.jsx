import React from 'react';
import styled from 'styled-components';
import CustomCalendar from './CustomCalendar';
import '../../../node_modules/react-calendar/dist/Calendar.css';

function CalendarMain(props) {
	return (
		<Wrapper>
			<CustomCalendar
				changeDate={props.changeDate}
				isAdd={props.isAdd}
			/>
		</Wrapper>
	);
}

export default CalendarMain;

// MainPage의 ConBody 부분을 꽉 채워줌
const Wrapper = styled.div`
	position: relative;
	/* top: -51px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: calc(100% + 52px);
`;
