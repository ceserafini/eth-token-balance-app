import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './404/NotFound.screen';
import Home from './home/Home.screen';

const PagesNavigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="/*" element={<Navigate to='/404' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default PagesNavigation;