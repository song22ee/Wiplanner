import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function AddSchedule(props) {
	return (
		<Wrapper>
			<Window>
				<Header>
					<span>일정 추가</span>
				</Header>
				<Body>
					<SectionLeft>
						<InputFormat1 height={60}>
							<input
								size="50"
								type="text"
								placeholder="일정 이름"
							/>
						</InputFormat1>
						<InputFormat>
							<Title>
								<span>시간</span>
							</Title>
							<Content justify="space-between">
								<ScheduleTime>
									<input type="date" />
									<input type="time" />
								</ScheduleTime>
								<From />
								<ScheduleTime>
									<input type="date" />
									<input type="time" />
								</ScheduleTime>
							</Content>
						</InputFormat>
						<InputFormat1 height={168}>
							<input
								type="textarea"
								placeholder="메모"
							/>
						</InputFormat1>
					</SectionLeft>
					<SectionRight>
						<InputFormat>
							<Title>
								<span>반복</span>
							</Title>
							<Content
								left={-50}
								justify="center">
								<select
									name="repeat"
									id="repeat">
									<option value="noRepeat">반복안함</option>
									<option value="everyDay">매일</option>
									<option value="weekly">주마다</option>
									<option value="monthly">달마다</option>
									<option value="everyYear">년마다</option>
								</select>
							</Content>
						</InputFormat>
						<InputFormat>
							<Title>
								<span>태그 색상</span>
							</Title>
							<Content>
								<ChoiceColor>
									<Color>
										<input
											type="radio"
											name="color"
											value="#E93434"
											id="color1"
											style={{ background: '#E93434' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#FFBE5E"
											id="color1"
											style={{ background: '#FFBE5E' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#FFEF5E"
											id="color1"
											style={{ background: '#FFEF5E' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#4FBF4C"
											id="color1"
											style={{ background: '#4FBF4C' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#3F87DC"
											id="color1"
											style={{ background: '#3F87DC' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#2E47A2"
											id="color1"
											style={{ background: '#2E47A2' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#9A5BB8"
											id="color1"
											style={{ background: '#9A5BB8' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#FF6883"
											id="color1"
											style={{ background: '#FF6883' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#000000"
											id="color1"
											style={{ background: '#000000' }}
										/>
										<label for="color1"></label>
									</Color>
									<Color>
										<input
											type="radio"
											name="color"
											value="#FFFFFF"
											id="color1"
											style={{ background: '#FFFFFF' }}
										/>
										<label for="color1"></label>
									</Color>
								</ChoiceColor>
							</Content>
						</InputFormat>
						<Alarm>
							<Title top={-55}>
								<span>알림</span>
							</Title>
							<ChoiceAlarm>
								<label>
									<input
										type="radio"
										name="contact"
										value="email"
										checked
									/>
									<span>알림 안함</span>
								</label>
								<label>
									<input
										type="radio"
										name="contact"
										value="email"
										checked
									/>
									<span>일정 시작시간</span>
								</label>

								<label>
									<input
										type="radio"
										name="contact"
										value="phone"
									/>
									<span>10분전</span>
								</label>

								<label>
									<input
										type="radio"
										name="contact"
										value="fax"
									/>
									<span>1시간 전</span>
								</label>

								<label>
									<input
										type="radio"
										name="contact"
										value="mail"
									/>
									<span>1일 전</span>
								</label>
							</ChoiceAlarm>
						</Alarm>
					</SectionRight>
				</Body>
				<Bottom>
					<CancelBtn>
						<span>취소</span>
					</CancelBtn>
					<CompleteBtn>
						<span>완료</span>
					</CompleteBtn>
				</Bottom>
			</Window>
		</Wrapper>
	);
}

export default AddSchedule;

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
	width: 970px;
	height: 460px;
	background-color: ${Theme.second};
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	background-color: ${Theme.main};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-sizing: border-box;
	padding-left: 30px;
	span {
		color: white;
		font-size: 15px;
		font-weight: bold;
	}
`;

const Body = styled.div`
	width: 100%;
	height: 350px;
	padding: 10px 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SectionLeft = styled.div`
	width: 455px;
	height: 310px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	div {
		border-radius: 10px;
		box-sizing: border-box;
		input {
			color: black;
			outline: none;
			border: none;
			font-size: 15px;
		}
	}
`;

const InputFormat1 = styled.div`
	width: 100%;
	height: ${(props) => `${props.height}px`};
	background-color: white;
	display: flex;
	align-items: flex-start;
	padding-top: 20px;
	padding-left: 20px;
`;

const InputFormat = styled.div`
	width: 100%;
	height: 60px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	width: 65px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: 20px;
	position: relative;
	top: ${(props) => `${props.top}px`};

	span {
		font-size: 14px;
		font-weight: bolder;
	}
`;

const Content = styled.div`
	width: 345px;
	height: 100%;
	display: flex;
	justify-content: ${(props) => `${props.justify}`};
	align-items: center;
	position: relative;
	left: ${(props) => `${props.left}px`};
`;

const ChoiceColor = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	[type='radio'] {
		appearance: none;
		height: 80%;
		width: 80%;
		border-radius: 5px;
	}
	[type='radio']:checked {
		border: 5px solid ${Theme.forth};
		border-radius: 5px;
	}
`;

const Color = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 5px;
`;

const ScheduleTime = styled.div`
	width: 138px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	input {
		background-color: ${Theme.forth};
		border-radius: 5px;
		margin: 2px;
		width: 110px;
	}
`;

const From = styled.div`
	width: 8px;
	height: 2px;
	background-color: black;
`;

const SectionRight = styled.div`
	width: 455px;
	height: 310px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	div {
		border-radius: 10px;
	}
`;

const Alarm = styled.div`
	width: 100%;
	height: 168px;
	background-color: white;
	display: flex;
`;

const ChoiceAlarm = styled.div`
	width: 345px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	[type='radio'] {
		margin: 7px;
	}
	span {
		font-size: 13px;
	}
`;

const Bottom = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	div {
		width: 50px;
		height: 30px;
		margin: 0 10px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		span {
			font-size: 12px;
		}
	}
`;

const CancelBtn = styled.div`
	background-color: ${Theme.forth};
`;

const CompleteBtn = styled.div`
	background-color: ${Theme.main};
	span {
		color: white;
	}
`;
