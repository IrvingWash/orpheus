import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Link } from 'react-router-dom';

export function BurgerDrawer(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div>
			<Button onClick={ toggleDrawer(true) }>Burger</Button>
				<Drawer
					open={ isVisible }
					onClose={ toggleDrawer(false) }
				>
					{ makeList() }
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

	function makeList(): JSX.Element {
		return (
			<Box
				sx={ { width: 250 } }
				role="presentation"
				onClick={ toggleDrawer(false) }
				onKeyDown={ toggleDrawer(false) }
			>
				<List>
					{
						['Home', 'Track list'].map((text) => (
							<Link
								to={ text === 'Home' ? '/' : '/tracks' }
							>
								<ListItem button key={ text }>
									<ListItemIcon>
										{text === 'Home' ? <HomeIcon /> : <LibraryMusicIcon />}
									</ListItemIcon>
									<ListItemText primary={ text } />
								</ListItem>
							</Link>
						))
					}
				</List>
			</Box>
		);
	}
}
