import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

function Schedule(props) {
	const { onClick, top, left, backgroundColor, title, start, end, height } = props;

	return (
		<Wrapper
			background={backgroundColor}
			height={height}
			onClick={onClick}
			top={top}
			left={left}
		>
			<Name>
				<span>{title}</span>
			</Name>
			<Time>
				<span>{start}</span>
				<span> ~ </span>
				<span>{end}</span>
			</Time>
		</Wrapper>
	);
}

export default Schedule;

// MainPage의 ConBody 부분을 꽉 채워줌
const Wrapper = styled.div`
	position: absolute;
	top: ${(props) => `${props.top}px`};
	left: ${(props) => `${props.left}px`};
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
