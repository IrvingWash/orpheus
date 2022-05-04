import {
	Card,
	Grid,
	Button,
	Box,
} from '@mui/material';

import { Link } from 'react-router-dom';

import styles from './tracks.module.css';

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
									to="/add-track"
									className={ styles.link }
								>
									Upload
								</Link>
							</Button>
						</Grid>
					</Box>
				</Card>
			</Grid>
		</div>
	);
}
