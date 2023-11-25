//메인페이지
import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function Schedule(props) {
	return (
		<Wrapper
			width={props.width}
			height={props.height}>
			<ColorTag />
			<Content>
				<Name>
					<span>친구생일</span>
				</Name>
				<Time>
					<span>하루종일</span>
				</Time>
			</Content>
		</Wrapper>
	);
}

export default Schedule;

const Wrapper = styled.div`
	width: ${(props) => `${props.width}px`};
	height: ${(props) => `${props.height}px`};
	box-sizing: border-box;
	background-color: #ffffff;
	border: 1px solid ${Theme.borderLight};
	margin-bottom: 3px;
	display: flex;
	padding-right: 5px;
`;

const ColorTag = styled.div`
	width: 3px;
	height: 100%;
	background-color: ${Theme.yellow};
`;

const Content = styled.div`
	width: calc(100% - 3px);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Name = styled.div`
	width: 250px;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 10px;
	span {
		font-size: 12px;
		font-weight: bolder;
	}
	box-sizing: border-box;
`;

const Time = styled.div`
	width: 47px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-size: 10px;
	}
`;
