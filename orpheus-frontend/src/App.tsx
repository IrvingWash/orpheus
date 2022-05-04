import styles from './App.module.css';
import BurgerDrawer from './components/burger-drawer';

export function App(): JSX.Element {
	return (
		<>
			<BurgerDrawer />
			<div className={ styles.center }>
				<h1>Let's listen to...</h1>
			</div>
		</>
	);
}
