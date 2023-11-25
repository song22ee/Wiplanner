import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function Schedule(props) {
	const backgroundColor = Theme.bule;
	return (
		<Wrapper
			background={backgroundColor}
			height={65}>
			<Name>
				<span>운동</span>
			</Name>
			<Time>
				<span>09:55</span>
				<span> ~ </span>
				<span>11:55</span>
			</Time>
		</Wrapper>
	);
}

export default Schedule;

// MainPage의 ConBody 부분을 꽉 채워줌
const Wrapper = styled.div`
	position: absolute;
	top: 36px;
	left: 71px;
	width: 147px;
	height: ${(props) => `${props.height}px`};
	background-color: ${(props) => `${props.background}`};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span {
		color: white;
		font-weight: bold;
	}
`;

const Name = styled.div`
	span {
		font-size: 15px;
	}
`;

const Time = styled.div`
	span {
		font-size: 12px;
	}
`;
