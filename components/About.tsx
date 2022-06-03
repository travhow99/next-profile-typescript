import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const About = () => {
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
				About
			</Typography>
			<Grid container columnSpacing={4}>
				<Grid item xs={12} sm={4}>
					<Image
						src={'/images/profile-img.jpeg'}
						alt={'Travis Howell - Web Developer'}
						width={640}
						height={640}
						layout="responsive"
					></Image>
				</Grid>
				<Grid item xs={12} sm={8}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Item One" {...a11yProps(0)} />
							<Tab label="Item Two" {...a11yProps(1)} />
							<Tab label="Item Three" {...a11yProps(2)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						Item One
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2}>
						Item Three
					</TabPanel>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
