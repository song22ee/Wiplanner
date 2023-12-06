import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Component/Main/MainPage';
import FixSchedule from './Component/FixSchedule/FixSchedule';
import TimeTable from './Component/TimeTable/TimeTable'


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route
						index
						element={<MainPage />}
					/>
					<Route
						path="/TimeTable"
						element={<TimeTable />}
					/>
					<Route
						path="/FixSchedule"
						element={<FixSchedule />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

// import React, { useState } from 'react';

// function App() {
// 	return (
// 		<div className="App">
// 			<Parent />
// 		</div>
// 	);
// }

// const Parent = (props) => {
// 	const [data, setData] = useState('initial data');

// 	return (
// 		<>
// 			<div>{data}</div>
// 			<Child setData={setData} />
// 		</>
// 	);
// };

// const Child = (props) => {
// 	return (
// 		<>
// 			<button onClick={() => props.setData('data from child')}>send data to parent</button>
// 		</>
// 	);
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
// 	const [hello, setHello] = useState('');

// 	useEffect(() => {
// 		axios
// 			.get('/api/hello')
// 			.then((response) => setHello(response.data))
// 			.catch((error) => console.log(error));
// 	}, []);

// 	return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
// }

// export default App;