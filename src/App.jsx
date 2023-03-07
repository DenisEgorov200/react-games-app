import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Discover from './pages/Discover/Discover';
import Explore from './pages/Explore/Explore';
import Collections from './pages/Collections/Collections';
import Deals from './pages/Deals/Deals';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route index element={<Discover />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/deals' element={<Deals />} />
				<Route path='/subscriptions' element={<Subscriptions />} />
				<Route path='*' element={<Notfoundpage />} />
			</Routes>
		</Router>
	);
}

export default App;
