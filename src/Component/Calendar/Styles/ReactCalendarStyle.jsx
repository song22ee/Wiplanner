import styled from 'styled-components';
import Calendar from 'react-calendar';
import Theme from '../../../Theme';

// 캘린더
export const MainCalender = styled.div`
	width: 100%;
	height: 100%;

	/* 캘린더 전체 틀 */
	.react-calendar {
		border: none;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: transparent; //배경색 투명하게.
	}

	/* 달력 상단 */
	.react-calendar__navigation {
		background-color: ${Theme.third};
		height: 50px;
		/* border-bottom: 1px solid #b1b1b1; */
	}

	/* 달력 상단 버튼 최소 크기 */
	.react-calendar__navigation button {
		/* min-width: 50px; */
	}

	/* .react-calendar__navigation button:focus {
		background-color: #000000 !important;
	} */

	/* 달력 상단 버튼 hover */
	/* .react-calendar__navigation button:hover {
		background-color: #c59400 !important;
	} */

	/* 달력 상단 버튼 비활성화 */
	/* .react-calendar__navigation button:disabled {
		background-color: #dca600 !important;
	} */

	.react-calendar__navigation__arrow {
		width: 500px;
	}

	/* 달력 상단 년/월 글씨, 화살표 커스텀*/
	.react-calendar__navigation__label > span,
	.react-calendar__navigation__arrow {
		font-size: 18px;
		font-weight: bold;
		color: #000000;
	}

	.react-calendar__viewContainer {
		height: calc(100% - 65px);
	}

	.react-calendar__month-view__weekdays {
		padding: 0 14px;
		border-bottom: 1px solid #eeeeee; //요일 하단
		height: 35px;
		padding-bottom: 9px;
	}

	/* 요일 커스텀 */
	.react-calendar__month-view__weekdays__weekday {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.react-calendar__month-view__weekdays abbr {
		display: block;
		font-weight: 500;
		text-decoration: none;
		font-size: 13px;
		width: 19px;
		text-align: center;
	}

	.react-calendar__month-view__days {
		padding: 0 14px;
	}

	/* 이번달이 아닌 날짜는 연하게 */
	.react-calendar__month-view__days__day--neighboringMonth {
		color: #00000035;

		& > div > div {
			opacity: 20% !important;
		}
	}

	/* 주말 색 지정 */
	.react-calendar__month-view__days__day--weekend:not(.react-calendar__month-view__days__day--neighboringMonth),
	.react-calendar__month-view__weekdays__weekday--weekend {
		/* 일요알은 빨간색 */
		color: #ff0000;
	}
	.react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--weekend)
		+ .react-calendar__month-view__days__day--weekend:not(.react-calendar__month-view__days__day--neighboringMonth),
	.react-calendar__month-view__weekdays__weekday + .react-calendar__month-view__weekdays__weekday--weekend {
		/* 토요일은 파란색 */
		color: blue;
	}

	/* 일(각 타일) */
	.react-calendar__month-view__days__day {
		border: 2px solid white !important;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 3px 3px;
		height: 90px;
	}
	.react-calendar__month-view__days__day abbr {
		display: block;
		width: 19px;
		height: 19px;
		font-size: 13px;
	}

	/* YearView 각 월 타일 */
	.react-calendar__year-view__months__month {
		border: 2px solid white !important;
		font-size: 14px;
	}

	.react-calendar__tile--hasActive {
		background-color: transparent;
	}

	/* hover 했을 때 색상 변경(YearView 포함) */
	.react-calendar__tile:enabled:hover {
		background-color: #d4d4d428;
	}

	/* 선택한 날짜(YearView 포함) */
	.react-calendar__tile--active {
		color: black !important;
		background: transparent;
	}

	/* 오늘 날짜(YearView 포함) */
	.react-calendar__tile--now {
		background: ${Theme.third};
	}

	/* 오늘 날짜(YearView 포함) hover */
	.react-calendar__tile--now:enabled:hover {
		background: ${Theme.third};
	}

	.react-calendar__tile--active:enabled:focus {
		background: transparent;
	}
	#3c3f42

	/* 선택한 달이 아닌 날짜의 스티커 */
	.react-calendar__month-view__days__day--neighboringMonth.green > abbr {
		background-color: #00ca084d;
	}

	.react-calendar__month-view__days__day--neighboringMonth.yellow > abbr {
		background-color: #ffe5004d;
	}
	.react-calendar__month-view__days__day--neighboringMonth.red > abbr {
		background-color: #ff60604d;
	}

	/* 선택한 달의 스티커 */
	.green > abbr {
		background-color: #00ca0899;
	}
	.yellow > abbr {
		background-color: #ffe50099;
	}
	.red > abbr {
		background-color: #ff606099;
	}
`;

export const CustomCalendar = styled(Calendar)`
	width: 100%;
	height: 100%;
	font-size: 10px;
	border: 1px solid #b1b1b1;
	border-radius: 5px;
`;
