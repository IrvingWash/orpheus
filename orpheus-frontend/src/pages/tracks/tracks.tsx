import {
	Card,
	Grid,
	Button,
	Box,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { TrackList } from '../../components/track-list/track-list';
import { Track } from '../../objects-and-constants';

import styles from './tracks.module.css';

const tracks: Track[] = [
	{
		_id: '1',
		artist: 'Orgone',
		title: 'Void Of Course',
		text: 'Complex',
		audio: 'a',
		picture: 'a',
		listens: 391,
		comments: [
			{
				_id: '1',
				username: 'WI',
				message: 'Cool',
			},
		],
	},
	{
		_id: '2',
		artist: 'Castevet',
		title: 'Grey Matter',
		text: 'Unknown',
		audio: 'a',
		picture: 'a',
		listens: 112,
		comments: [
			{
				_id: '1',
				username: 'WI',
				message: 'Alchemy',
			},
		],
	},
];

export function Tracks(): JSX.Element {
	return (
		<div>
			<Grid container justifyContent='center'>
				<Card className={ styles['track-list-card'] }>
					<Box p={ 3 }>
						<Grid container justifyContent='space-between'>
							<h1>Track list</h1>
							<Button>
								<Link
									to='/add-track'
									className={ styles.link }
								>
									Upload
								</Link>
							</Button>
						</Grid>
					</Box>
					<TrackList tracks={ tracks } />
				</Card>
			</Grid>
		</div>
	);
}
