//메인페이지
import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

import SideContent from './SideContent';

function Side(props) {
	return (
		<Wrapper>
			<SideContent
				type="Schedule"
				title="일정"
				count={5}
				btn={true}
			/>
			<SideContent
				type="Todo"
				title="투두리스트"
				count={7}
				btn={true}
			/>
			<SideContent
				type="Memo"
				title="빠른 메모"
				btn={false}
			/>
		</Wrapper>
	);
}

export default Side;

const Wrapper = styled.div`
	height: 100%;
	width: 350px;
	background-color: ${Theme.third};
	border-right: 1px solid white;
	box-sizing: border-box;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
