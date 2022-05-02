import { Box, Button, styled } from '@mui/material';

const Jumbotron = () => {
	return (
		<Box
			sx={{
				minHeight: '90vh',
				display: 'flex',
				flexDirection: 'column',
				backgroundImage: `url('/images/hero-image.jpg')`,
				color: 'white',
				padding: '0 16px',
				justifyContent: 'center',
			}}
		>
			<h1>Travis Howell</h1>
			<p className="lead">
				Experienced & Versatile Full Stack Web Developer
			</p>
			<Button>View Resume</Button>
		</Box>
	);
};

export default Jumbotron;
