import { useState } from 'react';

import {
	Button,
	Container,
	Grid,
	TextField,
} from '@mui/material';

import { StepWrapper } from '../../components/step-wrapper/step-wrapper';
import { FileUpload } from '../../components/file-upload/file-upload';

import styles from './add-track.module.css';

export function AddTrack(): JSX.Element {
	const [picture, setPicture] = useState<File | null>(null);
	const [audio, setAudio] = useState<File | null>(null);

	const [activeStep, setActiveStep] = useState(0);

	return ( 
		<Container className={ styles['add-track-wrapper'] }>
			<StepWrapper activeStep={ activeStep }>
				{
					activeStep === 0 &&
					<Grid
						container
						direction='column'
						className={ styles['add-track-form-control'] }
					>
						<TextField
							className={ styles['add-track-form-input'] }
							label='Track title'
						/>
						<TextField
							className={ styles['add-track-form-input'] }
							label='Artist'
						/>
						<TextField
							className={ styles['add-track-form-input'] }
							label='Lyrics'
							multiline
							rows={ 3 }
						/>
					</Grid>
				}
				{
					activeStep === 1 &&
						<FileUpload
							setFile={ setPicture }
							accept='image/*'
						>
							<Button>Upload album art</Button>
						</FileUpload>
				}
				{
					activeStep === 2 &&
						<FileUpload
							setFile={ setAudio }
							accept='audio/*'
						>
							<Button>Upload audio</Button>
						</FileUpload>
				}
			</StepWrapper>
			<Grid container justifyContent='space-between'>
				<Button
					disabled={ activeStep < 1 }
					onClick={ handleBackButtonClick }
				>
					Back
				</Button>
				<Button onClick={ handleNextButtonClick }>Next</Button>
			</Grid>
		</Container>
	);

	function handleNextButtonClick(): void {
		if (activeStep !== 2) {
			setActiveStep(activeStep + 1);
		}
	}

	function handleBackButtonClick(): void {
		setActiveStep(activeStep - 1);
	}
}
