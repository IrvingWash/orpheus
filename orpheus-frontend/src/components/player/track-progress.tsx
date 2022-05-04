import styles from './track-progress.module.css';

interface TrackProgressProps {
	currentProgress: number;
	duration: number;
	handleProgressChange: (event: any) => void;
}

export function TrackProgress(props: TrackProgressProps): JSX.Element {
	const {
		currentProgress,
		duration,
		handleProgressChange,
	} = props;

	return (
		<div className={ styles['progress-bar'] }>
			<input
				type='range'
				min={ currentProgress }
				max={ duration }
				value={ currentProgress }
				onChange={ handleProgressChange }
			/>
			<div>{ currentProgress} / { duration }</div>
		</div>
	);
}
