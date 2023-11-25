import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';
import TimeTableImg from '../../img/TimeTable.png';
import Schedule from './Schedule';

function FixScheduleMain(props) {
	return (
		<Wrapper>
			<Header>
				<AddBtn>
					<span>+ 고정일정 추가</span>
				</AddBtn>
			</Header>
			<TimeTable>
				<img
					src={TimeTableImg}
					alt=""
				/>
				<Schedule />
			</TimeTable>
		</Wrapper>
	);
}

export default FixScheduleMain;

// MainPage의 ConBody 부분을 꽉 채워줌
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Header = styled.div`
	width: 100%;
	height: 35px;
	background-color: ${Theme.third};
	border-top: 1px solid white;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 20px;
	box-sizing: border-box;
`;

const AddBtn = styled.div`
	width: 92px;
	height: 25px;
	background-color: #4b3434;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-size: 10px;
		color: white;
	}
`;

const TimeTable = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	-ms-overflow-style: none;
	position: relative;

	::-webkit-scrollbar {
		display: none;
	}

	img {
		width: 1100px;
	}
`;
