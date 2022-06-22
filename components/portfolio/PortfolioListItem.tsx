import { Info } from '@mui/icons-material';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { ProfileItem } from '../../interfaces/ProfileItem';
import PortfolioItemModal from './PortfolioItemModal';

interface ItemProps {
	item: ProfileItem;
}

const PortfolioListItem = ({ item }: ItemProps) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<ImageListItem key={item.id}>
				<Image
					src={item.img}
					alt={item.title}
					width={500}
					height={500}
					layout="responsive"
				/>
				{/* <img
					src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
					srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
					alt={item.title}
					loading="lazy"
				/> */}
				<ImageListItemBar
					title={item.title}
					subtitle={item.subtitle}
					actionIcon={
						<IconButton
							sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
							aria-label={`info about ${item.title}`}
							onClick={handleOpen}
						>
							<Info />
						</IconButton>
					}
				/>
			</ImageListItem>
			<PortfolioItemModal
				item={item}
				open={open}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default PortfolioListItem;
