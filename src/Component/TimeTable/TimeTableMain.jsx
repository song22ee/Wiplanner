import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';
import TimeTableImg from '../../img/TimeTable2.png';

function TimeTableMain(props) {
	return (
		<Wrapper>
			
			<TimeTable>
				<img
					src={TimeTableImg}
					alt=""
				/>
			</TimeTable>
		</Wrapper>
	);
}

export default TimeTableMain;

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
	position: relative;

	
	img {
		width: 1100px;
	}
`;
