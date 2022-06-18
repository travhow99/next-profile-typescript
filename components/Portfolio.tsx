import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import PortfolioList from './PortfolioList';

const Portfolio = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				// backgroundImage: `url('/images/hero-image.jpg')`,
				backgroundColor: '#061c2d',
				color: 'white',
				padding: '12.5%',
				justifyContent: 'center',
			}}
		>
			<Typography
				component={'h3'}
				variant="h3"
				sx={{
					fontSize: '4rem',
					textAlign: 'center',
				}}
			>
				PORTFOLIO
			</Typography>
			<PortfolioList />
		</Box>
	);
};

export default Portfolio;
