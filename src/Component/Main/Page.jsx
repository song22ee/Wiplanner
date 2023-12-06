// //메인페이지
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import Theme from '../../Theme';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendar } from '@fortawesome/free-solid-svg-icons';
// import { faFlag } from '@fortawesome/free-solid-svg-icons';
// import SideContent from '../SideContents/SideContent';

// import CalendarMain from '../Calendar/CalendarMain';

// function Page(props) {
// 	const [isAdd, setIsAdd] = useState(false);
// 	const [selectDate, setSelectDate] = useState(null);

// 	const changeDate = (date) => {
// 		setSelectDate(date);
// 		setIsAdd(true);
// 	};

// 	const showAdd = () => {
// 		setSelectDate(null);
// 		setIsAdd(true);
// 	};

// 	return (
// 		<Wrapper>
// 			<Header>
// 				<span>WIPLANER</span>
// 			</Header>
// 			<Body>
// 				<MenuBar>
// 					<Menu1>
// 						<FontAwesomeIcon icon={faCalendar} />
// 					</Menu1>
// 					<Menu2>
// 						<FontAwesomeIcon icon={faFlag} />
// 					</Menu2>
// 				</MenuBar>
// 				<Side>
// 					<SideContent
// 						type="Schedule"
// 						title="일정"
// 						count={5}
// 						btn={true}
// 					/>
// 					<SideContent
// 						type="Todo"
// 						title="투두리스트"
// 						count={7}
// 						btn={true}
// 					/>
// 					<SideContent
// 						type="Memo"
// 						title="빠른 메모"
// 						btn={false}
// 					/>
// 				</Side>
// 				<Container>
// 					<ConHeader>
// 						<DateControl>
// 							<TodayBtn>
// 								<span>오늘</span>
// 							</TodayBtn>
// 							<ControlBtnLeft>
// 								<span>&lt;</span>
// 							</ControlBtnLeft>
// 							<ControlBtnRight>
// 								<span>&gt;</span>
// 							</ControlBtnRight>
// 							<DateDisplay>
// 								<span>2023년 11월 23일 월요일</span>
// 							</DateDisplay>
// 						</DateControl>
// 						<Tabs>
// 							<CalendarTab>
// 								<span>캘린더</span>
// 							</CalendarTab>
// 							<TimeTableTab>
// 								<span>타임 테이블</span>
// 							</TimeTableTab>
// 							<FixedScheduleTab>
// 								<span>고정일정</span>
// 							</FixedScheduleTab>
// 						</Tabs>
// 					</ConHeader>
// 					<ConBody></ConBody>
// 				</Container>
// 			</Body>
// 		</Wrapper>
// 	);
// }

// export default Page;

// const Wrapper = styled.div`
// 	width: 1535px;
// 	height: 747px;
// 	padding: 0 px;
// 	box-sizing: border-box;
// `;

// const Header = styled.div`
// 	height: 100px;
// 	border-bottom: 1px solid white;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// 	background-color: ${Theme.main};
// 	padding-left: 30px;
// 	span {
// 		color: white;
// 		font-size: 30px;
// 		font-weight: bold;
// 	}
// `;

// const Body = styled.div`
// 	width: 100%;
// 	height: calc(100% - 100px);
// 	background-color: aliceblue;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// `;

// const MenuBar = styled.div`
// 	height: 100%;
// 	width: 55px;
// 	background-color: ${Theme.second};
// 	border-right: 1px solid white;
// 	padding-top: 10px;
// 	box-sizing: border-box;
// `;

// const Menu1 = styled.button`
// 	width: 35px;
// 	height: 37px;
// 	background-color: ${Theme.main};
// 	border-radius: 10px;
// 	border: none;
// 	& > svg {
// 		color: white;
// 		font-size: 23px;
// 	}
// `;
// const Menu2 = styled.button`
// 	width: 35px;
// 	height: 37px;
// 	background-color: white;
// 	border-radius: 10px;
// 	margin-top: 10px;
// 	border: none;
// 	& > svg {
// 		color: ${Theme.main};
// 		font-size: 23px;
// 	}
// `;

// const Side = styled.div`
// 	height: 100%;
// 	width: 350px;
// 	background-color: ${Theme.third};
// 	border-right: 1px solid white;
// 	box-sizing: border-box;
// 	padding-top: 20px;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;

// const Container = styled.div`
// 	height: 100%;
// 	width: 1130px;
// 	background-color: white;
// `;

// const ConHeader = styled.div`
// 	width: 100%;
// 	height: 52px;
// 	background-color: ${Theme.third};
// 	display: flex;
// 	justify-content: space-between;
// `;

// const DateControl = styled.div`
// 	width: 415px;
// 	height: 100%;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// 	padding-left: 25px;
// `;

// const TodayBtn = styled.button`
// 	width: 47px;
// 	height: 25px;
// 	border-radius: 5px;
// 	margin-right: 10px;
// 	background-color: white;
// 	border: 0.8px solid black;
// `;

// const ControlBtnLeft = styled.button`
// 	width: 10px;
// 	height: 25px;
// 	margin-right: 10px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	border: none;
// 	background: none;
// 	span {
// 		font-weight: bolder;
// 	}
// `;
// const ControlBtnRight = styled.button`
// 	width: 10px;
// 	height: 25px;
// 	margin-right: 10px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	border: none;
// 	background: none;
// 	span {
// 		font-weight: bolder;
// 	}
// `;

// const DateDisplay = styled.div`
// 	width: 200px;
// 	height: 25px;
// 	span {
// 		font-weight: bolder;
// 	}
// `;

// const Tabs = styled.div`
// 	width: 415px;
// 	height: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: flex-end;
// `;

// const CalendarTab = styled.button`
// 	width: 76px;
// 	height: 30px;
// 	border-top-right-radius: 10px;
// 	border-top-left-radius: 10px;
// 	background-color: white;
// 	margin-right: 15px;
// 	span {
// 		font-weight: bolder;
// 	}
// 	border: 1px solid white;
// `;

// const TimeTableTab = styled.button`
// 	width: 100px;
// 	height: 30px;
// 	border-top-right-radius: 10px;
// 	border-top-left-radius: 10px;
// 	background-color: ${Theme.main};
// 	margin-right: 15px;
// 	span {
// 		color: white;
// 		font-weight: bolder;
// 	}
// 	border: 1px solid white;
// `;

// const FixedScheduleTab = styled.button`
// 	width: 76px;
// 	height: 30px;
// 	border-top-right-radius: 10px;
// 	border-top-left-radius: 10px;
// 	background-color: ${Theme.main};
// 	margin-right: 15px;
// 	span {
// 		color: white;
// 		font-weight: bolder;
// 	}
// 	border: 1px solid white;
// `;

// const ConBody = styled.div`
// 	width: 100%;
// 	height: calc(100% - 52px);
// `;
