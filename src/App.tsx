import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import CharacterListPage from './pages/CharacterListPage';
import CharacterPage from './pages/CharacterPage';

function App(): JSX.Element {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CharacterListPage />} />
					<Route path='/:id' element={<CharacterPage />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
