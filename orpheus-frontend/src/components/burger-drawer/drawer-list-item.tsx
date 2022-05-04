import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

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
