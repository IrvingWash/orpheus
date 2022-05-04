import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { BurgerDrawer } from './components/burger-drawer';

export function App(): JSX.Element {
	return (
		<>
			<BurgerDrawer />
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/tracks' element={ <p>Tracks</p> } />
			</Routes>
		</>
	);
}
