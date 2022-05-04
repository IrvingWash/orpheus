import { Track } from '../../objects-and-constants';

interface TrackItemProps {
	track: Track;
	active?: boolean;
}

export function TrackItem(props: TrackItemProps): JSX.Element {
	const { track, active = false } = props;

	return (
		<div>
			{ track.title }
		</div>
	);
}
