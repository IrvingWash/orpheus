import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/home';
import { Tracks } from './pages/tracks/tracks';
import { BurgerDrawer } from './components/burger-drawer/burger-drawer';

export function App(): JSX.Element {
	return (
		<>
			<BurgerDrawer />
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/tracks' element={ <Tracks /> } />
			</Routes>
		</>
	);
}
