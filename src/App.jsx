import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Discover from './pages/Discover/Discover';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route index element={<Discover />} />
				<Route path='*' element={<Notfoundpage />} />
			</Routes>
		</Router>
	);
}

export default App;
