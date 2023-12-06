import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function DetailSchedule({ setisAddScheduleOn, setisViewScheduleOn, setisDetailScheduleOn }) {
	// 이전으로 가기(ViewSchedule로 이동)
	const goViewSchedule = () => {
		setisDetailScheduleOn(false);
		setisViewScheduleOn(true);
	};

	//편집 누르면 AddSchedule로 이동
	const goAddSchedule = () => {
		setisDetailScheduleOn(false);
		setisAddScheduleOn(true);
	};

	return (
		<Wrapper>
			<Window>
				<Header>
					<button onClick={goViewSchedule}>&lt;</button>
					<span>일정 세부사항</span>
					<button onClick={goAddSchedule}>편집</button>
				</Header>
				<Body>
					<WhiteBackground>
						<ConHeader>
							<Name>
								<span>친구 생일</span>
							</Name>
							<Date>
								<span>2023년 11월 25일 토요일</span>
								<span> - </span>
								<span>2023년 11월 25일 토요일</span>
							</Date>
							<Time>
								<span>하루종일</span>
							</Time>
						</ConHeader>
						<ConBody>
							<ColorTag>
								<span>태그 색상</span>
								<div></div>
							</ColorTag>
							<TagFormat>
								<Title>
									<span>알림</span>
								</Title>
								<span>이벤트 당일</span>
							</TagFormat>
							<TagFormat>
								<Title>
									<span>반복</span>
								</Title>
								<span>매년</span>
							</TagFormat>
							<Memo>
								<Title>
									<span>메모</span>
								</Title>
								<span>영화 보러가기</span>
							</Memo>
						</ConBody>
					</WhiteBackground>
				</Body>
			</Window>
		</Wrapper>
	);
}

export default DetailSchedule;

//화면이 블러처리됨.
const Wrapper = styled.div`
	width: 1535px;
	height: 747px;
	background-color: #00000055;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
	position: absolute;
	top: 0;
	left: 0;
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
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding: 10px;
	span {
		color: white;
		font-size: 15px;
		font-weight: bold;
		position: relative;
		right: -15px;
	}
	button {
		background: none;
		outline: none;
		border: none;
		color: white;
		font-size: 15px;
	}
`;

const Body = styled.div`
	width: 100%;
	height: 400px;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const WhiteBackground = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
	padding: 15px;
	box-sizing: border-box;
`;

const ConHeader = styled.div`
	width: 100%;
	height: 85px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-bottom: 2px solid black;
`;

const Name = styled.div`
	font-weight: bolder;
	font-size: 15px;
	margin-bottom: 7px;
`;

const Date = styled.div`
	font-size: 12px;
	color: ${Theme.grey};
	margin: 5px 0;
`;

const Time = styled.div`
	font-size: 12px;
	color: ${Theme.grey};
`;

const ColorTag = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 35px;
	border-bottom: 1px solid ${Theme.borderDeep};
	span {
		font-size: 13px;
	}
	div {
		width: 17px;
		height: 17px;
		border-radius: 15px;
		background-color: ${Theme.yellow};
	}
`;

const TagFormat = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 35px;
	border-bottom: 1px solid ${Theme.borderDeep};
	span {
		font-size: 12px;
		color: ${Theme.grey};
	}
`;

const Title = styled.div`
	span {
		color: black;
		font-size: 13px;
	}
`;

const Memo = styled.div`
	width: 100%;
	height: 95px;
	border-bottom: 1px solid ${Theme.borderDeep};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 5px;
	& > span {
		font-size: 12px;
		color: ${Theme.grey};
		margin-top: 15px;
	}
`;

const ConBody = styled.div`
	width: 100%;
	height: 400px;
`;
