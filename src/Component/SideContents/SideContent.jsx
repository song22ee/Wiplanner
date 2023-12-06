//메인페이지
import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';
import Schedule from './Schedule';
import Todo from './Todo';
import AddSchedule from '../Calendar/AddSchedule';
import ViewSchedule from '../Calendar/ViewSchedule';
import DetailSchedule from '../Calendar/DetailSchedule';
import TodoList from '../TodoList/TodoList';

function SideContent(props) {
	const [isAddScheduleOn, setisAddScheduleOn] = useState(false);
	const [isViewScheduleOn, setisViewScheduleOn] = useState(false);
	const [isDetailScheduleOn, setisDetailScheduleOn] = useState(false);
	const [isTodoListOn, setisTodoListOn] = useState(false);

	// AddSchedule에서 전송받은 name데이터가 여기로 와야함.
	const showAddSchedule = () => {
		setisAddScheduleOn(true);
	};

	// 투두리스트 보이기
	const showTodoList = () => {
		setisTodoListOn(true);
	};

	const btn = props.btn;
	let button, content;
	if (btn && props.type === 'Schedule') {
		button = (
			<AddBtn onClick={showAddSchedule}>
				<span>+</span>
			</AddBtn>
		);
	}

	if (btn && props.type === 'Todo') {
		button = (
			<AddBtn onClick={showTodoList}>
				<span>+</span>
			</AddBtn>
		);
	}

	switch (props.type) {
		case 'Schedule':
			content = (
				<Schedule
					width={300}
					height={37}
				/>
			);
			break;
		case 'Todo':
			content = (
				<Todo
					width={300}
					height={28}
				/>
			);
			break;
		default:
			break;
	}

	return (
		<Wrapper>
			<Header>
				<TitleIcon />
				<Title>
					<span>{props.title}</span>
				</Title>
				<Count>
					<span>{props.count}</span>
				</Count>
				{button}
			</Header>
			<Body>{content}</Body>
			{isAddScheduleOn && (
				<AddSchedule
					setisViewScheduleOn={setisViewScheduleOn}
					setisAddScheduleOn={setisAddScheduleOn}
				/>
			)}
			{isViewScheduleOn && (
				<ViewSchedule
					setisViewScheduleOn={setisViewScheduleOn}
					setisDetailScheduleOn={setisDetailScheduleOn}
					setisAddScheduleOn={setisAddScheduleOn}
					setisTodoListOn={setisTodoListOn}
				/>
			)}
			{isDetailScheduleOn && (
				<DetailSchedule
					setisDetailScheduleOn={setisDetailScheduleOn}
					setisViewScheduleOn={setisViewScheduleOn}
					setisAddScheduleOn={setisAddScheduleOn}
				/>
			)}
			{isTodoListOn && <TodoList setisTodoListOn={setisTodoListOn} />}
		</Wrapper>
	);
}

export default SideContent;

const Wrapper = styled.div`
	width: 325px;
	height: 180px;
	box-sizing: border-box;
	margin-bottom: 30px;
`;

const Header = styled.div`
	height: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 10px;
	position: relative;
`;

const Title = styled.div`
	span {
		color: black;
		font-size: 20px;
		font-weight: bold;
	}
`;

const TitleIcon = styled.div`
	width: 3px;
	height: 18px;
	background-color: ${Theme.main};
	margin-right: 5px;
`;

const Count = styled.div`
	span {
		color: #b88e8e;
		font-size: 20px;
		font-weight: bold;
	}
	margin-left: 5px;
`;

const AddBtn = styled.button`
	border: none;
	border-radius: 5px;
	background-color: ${Theme.main};
	position: absolute;
	right: 0;
	span {
		color: white;
		font-size: 15px;
		font-weight: bold;
	}
`;

const Body = styled.div`
	width: 100%;
	height: 160px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 0;
	box-sizing: border-box;
	overflow-y: hidden;
	/* -ms-overflow-style: none;

	::-webkit-scrollbar {
		display: none;
	} */
`;
