import React from 'react';
import './App.css';
import MainPage from './Component/page/MainPage';
import AddSchedule from './Component/Calendar/AddSchedule';
import ViewSchedule from './Component/Calendar/ViewSchedule';
import AddFixSchedule from './Component/FixSchedule/AddFixSchedule';
import TodoList from './Component/TodoList/TodoList';
import DetailSchedule from './Component/Calendar/DetailSchedule';
import DetailFixSchedule from './Component/FixSchedule/DetailFixSchedule';
import Schedule from './Component/FixSchedule/Schedule';

function App() {
	return (
		<div className="App">
			<MainPage />
			{/* <AddSchedule /> */}
			{/* <ViewSchedule /> */}
			{/* <AddFixSchedule /> */}
			{/* <TodoList /> */}
			{/* <DetailSchedule /> */}
			{/* <DetailFixSchedule /> */}
			{/* <Schedule /> */}
		</div>
	);
}

export default App;
