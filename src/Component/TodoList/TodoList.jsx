import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';
import Todo from '../SideContents/Todo';

function TodoList({setisTodoListOn}) {

	// 모달 끄기
	const closeModal = () => {
		setisTodoListOn(false);
	};

	return (
		<Wrapper>
			<Window>
				<Header>
					<span>투두리스트</span>
					<button onClick={closeModal}>X</button>
				</Header>
				<Body>
					<WhiteBackground>
						<ConHeader>
							<input type="text" />
							<AddTodoBtn>
								<span>추가</span>
							</AddTodoBtn>
						</ConHeader>
						<ConBody>
							<Todo
								width={310}
								height={43}
							/>
						</ConBody>
					</WhiteBackground>
				</Body>
			</Window>
		</Wrapper>
	);
}

export default TodoList;

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
	width: 350px;
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
	padding: 10px;
	box-sizing: border-box;
`;

const ConHeader = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	input {
		width: 250px;
		height: 25px;
	}
	button {
		width: 45px;
		height: 30px;
	}
`;

const AddTodoBtn = styled.button``;

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
