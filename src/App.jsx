import './App.scss';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

import {
	EPLORE_ROUTE,
	COLLECTIONS_ROUTE,
	DEALS_ROUTE,
	SUBSCRIPTIONS_ROUTE,
} from './config/routes';

import { Navbar } from './components/Navbar/Navbar';

import { Discover } from './pages/Discover/Discover';
import { Explore } from './pages/Explore/Explore';
import { Collections } from './pages/Collections/Collections';
import { Deals } from './pages/Deals/Deals';
import { Subscriptions } from './pages/Subscriptions/Subscriptions';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Routes>
					<Route index element={<Discover />} />
					<Route
						path={EPLORE_ROUTE}
						element={<Explore />}
					/>
					<Route
						path={COLLECTIONS_ROUTE}
						element={<Collections />}
					/>
					<Route
						path={DEALS_ROUTE}
						element={<Deals />}
					/>
					<Route
						path={SUBSCRIPTIONS_ROUTE}
						element={<Subscriptions />}
					/>
					<Route
						path='*'
						element={<NotFoundPage />}
					/>
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
