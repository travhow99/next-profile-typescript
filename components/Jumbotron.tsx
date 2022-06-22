import { Box, Button, styled, Typography } from '@mui/material';

const Jumbotron = () => {
	return (
		<Box
			id="home"
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				backgroundImage: `url('/images/hero-image.jpg')`,
				color: 'white',
				padding: '12.5%',
				justifyContent: 'center',
			}}
		>
			{/* <h1>Travis Howell</h1> */}
			<Typography
				component={'h1'}
				variant="h1"
				sx={{
					fontSize: '8rem',
				}}
			>
				Travis Howell
			</Typography>
			<p className="lead">
				Experienced & Versatile Full Stack Web Developer
			</p>
			<div>
				<Button variant="outlined">View Resume</Button>
			</div>
		</Box>
	);
};

export default Jumbotron;
