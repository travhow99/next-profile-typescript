import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IconButton, ImageListItemBar } from '@mui/material';
import { Info } from '@mui/icons-material';
import items from './portfolio/items';
import { ProfileItem } from '../interfaces/ProfileItem';
import PortfolioListItem from './portfolio/PortfolioListItem';

function handleInfoButtonClick(item: ProfileItem) {
	console.log('handling for i', item);
}

export default function PortfolioList() {
	return (
		<ImageList
			/* sx={{ width: 500, height: 450 }} */ cols={3}
			// rowHeight={164}
			gap={8}
		>
			{items.map((item) => (
				<PortfolioListItem key={item.id} item={item} />
			))}
		</ImageList>
	);
}
