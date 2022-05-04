import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/home';
import { Tracks } from './pages/tracks/tracks';
import { AddTrack } from './pages/tracks/add-track';
import { TrackPage } from './pages/tracks/track-page';
import { BurgerDrawer } from './components/burger-drawer/burger-drawer';
import { Player } from './components/player/player';

export function App(): JSX.Element {
	return (
		<>
			<BurgerDrawer />
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/tracks' element={ <Tracks /> } />
				<Route path='/add-track' element={ <AddTrack /> } />
				<Route path='/tracks/:title' element={ <TrackPage /> } />
			</Routes>
			<Player />
		</>
	);
}
