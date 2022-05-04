import {
	Card,
	Container,
	Grid,
	Step,
	StepLabel,
	Stepper,
} from '@mui/material';

import styles from './step-wrapper.module.css';

interface StepWrapperProps {
	activeStep: number;
	children: React.ReactNode;
}

const steps = ['Track information', 'Album Art', 'Audio'];

export function StepWrapper(props: StepWrapperProps): JSX.Element {
	const stepsProgressContent = steps.map((step, index) => (
		<Step
			key={ index }
			completed={ props.activeStep > index }
		>
			<StepLabel>{ step }</StepLabel>
		</Step>
	));

	return (
		<Container>
			<Stepper activeStep={ props.activeStep }>
				{ stepsProgressContent }
			</Stepper>

			<Grid
				container
				justifyContent='center'
				className={ styles['steps-content-wrapper'] }
			>
				<Card className={ styles['steps-content'] }>
					{ props.children }
				</Card>
			</Grid>
		</Container>
	);
}
