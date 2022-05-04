import {
	Card,
	Grid,
	IconButton,
} from '@mui/material';

import {
	Delete as DeleteIcon,
	Pause as PauseIcon,
	PlayArrow as PlayArrowIcon,
} from '@mui/icons-material';

import { Track } from '../../objects-and-constants';

import styles from './track-item.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

interface TrackItemProps {
	track: Track;
	active?: boolean;
}

export function TrackItem(props: TrackItemProps): JSX.Element {
	const { track, active = false } = props;

	return (
		<Link
			to={ `/tracks/${track.title}` }
			className={ styles.link }
		>
			<Card className={ styles.track }>
				<IconButton
					onClick={ handlePlayButtonClick }
				>
					{
						active
						? <PauseIcon />
						: <PlayArrowIcon />
					}
				</IconButton>

				<img
					src={ track.picture }
					width={ 70 }
					height={ 70 }
				/>

				<Grid
					container
					direction='column'
					className={ styles['track-info'] }
				>
					<div>{ track.title }</div>
					<div className={ styles.artist }>{ track.artist }</div>
				</Grid>

				{ active && <div>00:46 / 06:32</div>}

				<IconButton
					className={ styles['delete-button'] }
					onClick={ handleDeleteButtonClick }
				>
					<DeleteIcon />
				</IconButton>
			</Card>
		</Link>
	);

	function handlePlayButtonClick(event: React.MouseEvent<HTMLElement>): void {
		event.preventDefault();
	}

	function handleDeleteButtonClick(event: React.MouseEvent<HTMLElement>): void {
		event.preventDefault();
	}
}
