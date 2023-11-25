import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';
import Schedule from '../SideContents/Schedule';

function ViewSchedule(props) {
	return (
		<Wrapper>
			<Window>
				<Header>
					<span>2023년 11월 25일 토요일</span>
					<button>❌</button>
				</Header>
				<Body>
					<ConHeader>
						<TodoBtn>
							<span>✅ 투두리스트</span>
						</TodoBtn>
						<AddScheduleBtn>
							<span>➕ 일정추가</span>
						</AddScheduleBtn>
					</ConHeader>
					<ConBody>
						<Schedule
							width={380}
							height={43}
						/>
					</ConBody>
				</Body>
			</Window>
		</Wrapper>
	);
}

export default ViewSchedule;

//화면이 블러처리됨.
const Wrapper = styled.div`
	width: 1535px;
	height: 747px;
	background-color: #00000055;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Window = styled.div`
	width: 400px;
	height: 460px;
	background-color: ${Theme.second};
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	background-color: ${Theme.main};
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	span {
		color: white;
		font-size: 15px;
		font-weight: bold;
		position: relative;
		right: -15px;
	}
	button {
		position: relative;
		right: -75px;
		background: none;
		outline: none;
		border: none;
		color: white;
		font-size: 20px;
	}
`;

const Body = styled.div`
	width: 100%;
	height: 350px;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ConHeader = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const TodoBtn = styled.div`
	width: 120px;
	height: 30px;
	background-color: ${Theme.forth};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
`;

const AddScheduleBtn = styled.div`
	width: 100px;
	height: 30px;
	background-color: ${Theme.forth};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
`;

const ConBody = styled.div`
	margin-top: 10px;
	width: 100%;
	height: 400px;
`;
