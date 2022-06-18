import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'; // for example


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ListadoPeliculas />} />
			</Routes>
			<Routes>
				<Route path='/blog' element={<Blog/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
