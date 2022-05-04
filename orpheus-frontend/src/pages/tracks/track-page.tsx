import {
	Button,
	Container,
	Grid,
	TextField,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { Track } from '../../objects-and-constants';

import styles from './track-page.module.css';

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

export function TrackPage(): JSX.Element {
	const commentsContent = track.comments.map((comment) => (
		<div className={ styles['comments-wrapper'] }>
			<div className={ styles['comment-author'] }>{ comment.username }</div>
			<div>{ comment.message }</div>
		</div>
	));

	return (
		<Container className={ styles['track-page-wrapper'] }>
			<Button
				variant='outlined'
				className={ styles['back-button'] }
			>
				<Link to='/tracks'>
					Back to track list
				</Link>
			</Button>

			<Grid container className={ styles['track-info'] }>
				<img 
					src={ track.picture }
					width={ 200 }
					height={ 200 }
				/>
				<div className={ styles.metadata }>
					<h1>{ track.title }</h1>
					<h2>{ track.artist }</h2>
					<h3>Listens: { track.listens }</h3>
				</div>
			</Grid>

			<h2>Lyrics</h2>
			<p>{ track.title }</p>

			<Grid container>
				<h2>Commentaries</h2>
				<TextField
					label='Your name'
					fullWidth
				/>
				<TextField
					label='Your comment'
					fullWidth
					multiline
					rows={ 4 }
				/>
				<Button>Submit</Button>
			</Grid>
			<div>
				{ commentsContent }
			</div>
		</Container>
	);
}
