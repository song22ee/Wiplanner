//메인페이지
import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function Todo(props) {
	return (
		<Wrapper
			width={props.width}
			height={props.height}>
			<CheckBox>
				<input type="checkbox" />
			</CheckBox>
			<Name>
				<span>영어 1단원 풀기</span>
			</Name>
		</Wrapper>
	);
}

export default Todo;

const Wrapper = styled.div`
	width: ${(props) => `${props.width}px`};
	height: ${(props) => `${props.height}px`};
	box-sizing: border-box;
	background-color: #ffffff;
	border: 1px solid ${Theme.borderLight};
	margin-bottom: 3px;
	display: flex;
`;

const CheckBox = styled.div`
	width: 30px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Name = styled.div`
	width: 250px;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	span {
		font-size: 12px;
		font-weight: bolder;
	}
	box-sizing: border-box;
`;
