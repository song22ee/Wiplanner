import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function DetailFixSchedule({ setisDetailFixScheduleOn }) {
	// 모달 끄기
	const closeModal = () => {
		setisDetailFixScheduleOn(false);
	};

	return (
		<Wrapper>
			<Window>
				<Header>
					<span>고정 일정 세부사항</span>
					<button onClick={closeModal}>X</button>
				</Header>
				<Body>
					<WhiteBackground>
						<ConHeader>
							<Name>
								<span>학교</span>
							</Name>
							<Date>
								<span>09:55</span>
								<span> ~ </span>
								<span>12:35</span>
							</Date>
						</ConHeader>
						<ConBody>
							<ColorTag>
								<span>태그 색상</span>
								<div></div>
							</ColorTag>
							<TagFormat>
								<Title>
									<span>반복</span>
								</Title>
								<span>매주 월수금</span>
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

export default DetailFixSchedule;

//화면이 블러처리됨.
const Wrapper = styled.div`
	width: 1535px;
	height: 747px;
	background-color: #00000055;
	display: flex;
	justify-content: center;
	align-items: center;
	//맨 앞으로
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
	padding: 10px 15px;
	span {
		color: white;
		font-size: 15px;
		font-weight: bold;
		position: relative;
		right: -120px;
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
	height: 60px;
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

const ColorTag = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 35px;
	border-bottom: 1px solid ${Theme.borderDeep};
	span {
		font-size: 13px;
		font-weight: bolder;
	}
	div {
		width: 17px;
		height: 17px;
		border-radius: 15px;
		background-color: ${Theme.green};
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
		font-weight: bolder;
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
