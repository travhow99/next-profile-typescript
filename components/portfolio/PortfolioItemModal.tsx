import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { ProfileItem } from '../../interfaces/ProfileItem';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface ItemProps {
	item: ProfileItem;
	open: boolean;
	handleClose: () => void;
}

const PortfolioItemModal = ({ item, open, handleClose }: ItemProps) => {
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Image
							src={item.img}
							alt={item.title}
							width={500}
							height={500}
							layout="responsive"
						/>
						<Typography
							id="transition-modal-title"
							variant="h6"
							component="h2"
						>
							{item.title}
						</Typography>
						<Typography
							id="transition-modal-description"
							sx={{ mt: 2 }}
						>
							{item.subtitle}
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default PortfolioItemModal;
