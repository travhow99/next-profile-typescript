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
							<Tab
								sx={{ color: 'white' }}
								label="Bio"
								{...a11yProps(0)}
							/>
							<Tab
								sx={{ color: 'white' }}
								label="Experience"
								{...a11yProps(1)}
							/>
							<Tab
								sx={{ color: 'white' }}
								label="Specializations"
								{...a11yProps(2)}
							/>
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						"Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo. Nemo
						enim ipsam voluptatem quia voluptas sit aspernatur aut
						odit aut fugit, sed quia consequuntur magni dolores eos
						qui ratione voluptatem sequi nesciunt. Neque porro
						quisquam est, qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit, sed quia non numquam eius
						modi tempora incidunt ut labore et dolore magnam aliquam
						quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit
						laboriosam, nisi ut aliquid ex ea commodi consequatur?
						Quis autem vel eum iure reprehenderit qui in ea
						voluptate velit esse quam nihil molestiae consequatur,
						vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?"
					</TabPanel>
					<TabPanel value={value} index={1}>
						"Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo. Nemo
						enim ipsam voluptatem quia voluptas sit aspernatur aut
						odit aut fugit, sed quia consequuntur magni dolores eos
						qui ratione voluptatem sequi nesciunt. Neque porro
						quisquam est, qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit, sed quia non numquam eius
						modi tempora incidunt ut labore et dolore magnam aliquam
						quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit
						laboriosam, nisi ut aliquid ex ea commodi consequatur?
						Quis autem vel eum iure reprehenderit qui in ea
						voluptate velit esse quam nihil molestiae consequatur,
						vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?"
					</TabPanel>
					<TabPanel value={value} index={2}>
						"Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo. Nemo
						enim ipsam voluptatem quia voluptas sit aspernatur aut
						odit aut fugit, sed quia consequuntur magni dolores eos
						qui ratione voluptatem sequi nesciunt. Neque porro
						quisquam est, qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit, sed quia non numquam eius
						modi tempora incidunt ut labore et dolore magnam aliquam
						quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit
						laboriosam, nisi ut aliquid ex ea commodi consequatur?
						Quis autem vel eum iure reprehenderit qui in ea
						voluptate velit esse quam nihil molestiae consequatur,
						vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?"
					</TabPanel>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
