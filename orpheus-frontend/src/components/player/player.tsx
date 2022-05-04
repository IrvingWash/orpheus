import { Grid, IconButton } from '@mui/material';

import {
	Pause as PauseIcon,
	PlayArrow as PlayArrowIcon,
	VolumeUp as VolumeUpIcon,
} from '@mui/icons-material';

import { Track } from '../../objects-and-constants';

import styles from './player.module.css';
import { TrackProgress } from './track-progress';

const track: Track = {
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
};

export function Player(): JSX.Element {
	const active = false;

	return (
		<div className={ styles.player }>
			<IconButton
				onClick={ handlePlayButtonClick }
			>
				{
					active
					? <PauseIcon />
					: <PlayArrowIcon />
				}
			</IconButton>

			<Grid
					container
					direction='column'
					className={ styles['track-info'] }
			>
				<div>{ track.title }</div>
				<div className={ styles.artist }>{ track.artist }</div>
			</Grid>

			<TrackProgress
				currentProgress={ 326 }
				duration={ 764 }
				handleProgressChange={ (): void => { return; } }
			/>

			<VolumeUpIcon className={ styles['volume-button'] } />
			<TrackProgress
				currentProgress={ 326 }
				duration={ 764 }
				handleProgressChange={ (): void => { return; } }
			/>
		</div>
	);

	function handlePlayButtonClick(event: React.MouseEvent<HTMLElement>): void {
		event.preventDefault();
	}
}
