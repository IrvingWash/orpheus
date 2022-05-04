import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import styles from './drawer-list-item.module.css';

interface DrawerListItemProps {
	text: string;
	link: string;
	icon: JSX.Element;
}

export function DrawerListItem(props: DrawerListItemProps): JSX.Element {
	const {
		text,
		link,
		icon,
	} = props;

	return (
		<Link
			className={ styles.link }
			to={ link }
		>
			<ListItem button key={ text }>
				<ListItemIcon>
					{ icon }
				</ListItemIcon>
				<ListItemText primary={ text } />
			</ListItem>
		</Link>
	);
}
