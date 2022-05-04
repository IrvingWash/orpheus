import React, { useState } from 'react';

import {
	Box,
	Drawer,
	Button,
	List,
} from '@mui/material';

import {
	Home as HomeIcon,
	LibraryMusic as LibraryMusicIcon,
	Menu as MenuIcon,
} from '@mui/icons-material';

import { DrawerListItem } from './drawer-list-item';

const drawerItems = [
	{
		text: 'Home',
		link: '/',
		icon: <HomeIcon />,
	},
	{
		text: 'Tracks',
		link: '/tracks',
		icon: <LibraryMusicIcon />,
	},
];

export function BurgerDrawer(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	const listItems = drawerItems.map((
		{
			text,
			link,
			icon,
		}
	): JSX.Element => (
		<DrawerListItem
			text={ text }
			link={ link }
			icon={ icon }
			key={ text }
		/>
	));

	return (
		<div>
			<Button onClick={ toggleDrawer(true) }>
				<MenuIcon />
			</Button>

			<Drawer
				open={ isVisible }
				onClose={ toggleDrawer(false) }
			>
				<Box
					sx={ { width: 250 } }
					role="presentation"
					onClick={ toggleDrawer(false) }
					onKeyDown={ toggleDrawer(false) }
				>
					<List>
						{ listItems }
					</List>
				</Box>
			</Drawer>
		</div>
	);

	function toggleDrawer(open: boolean) {
		return (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				(event as React.KeyboardEvent).key === 'Tab'
			) {
				return;
			}

			setIsVisible(open);
		};
	}
}
