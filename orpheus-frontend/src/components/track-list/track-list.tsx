import { Box, Grid } from '@mui/material';

import { Track } from '../../objects-and-constants';
import { TrackItem } from './track-item';

interface TrackListProps {
	tracks: Track[];
}

export function TrackList(props: TrackListProps): JSX.Element {
	const tracks = props.tracks.map((track): JSX.Element => (
		<TrackItem
			key={ track._id }
			track={ track }
		/>
	));

	return (
		<Grid container direction='column'>
			<Box p={ 2 }>
				{ tracks }
			</Box>
		</Grid>
	);
}
