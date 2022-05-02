import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: 'JavaScript',
		imgPath:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
	},
	{
		label: 'React',
		imgPath: 'https://reactjs.org/logo-og.png',
	},
	{
		label: 'NodeJS',
		imgPath:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
	},
	{
		label: 'PHP',
		imgPath:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png',
	},
	{
		label: 'MySQL',
		imgPath:
			'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png',
	},
	{
		label: 'Next JS',
		imgPath:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png',
	},
	{
		label: 'AWS',
		imgPath:
			'https://pbs.twimg.com/profile_images/1473756532827246593/KRgw2UkV_400x400.jpg',
	},
	/* {
    label: 'Cordova',
    imgPath:
      'https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cordova_logo_icon_170570.png',
  },
  {
    label: 'Android Studio',
    imgPath:
      'https://cdn.icon-icons.com/icons2/1495/PNG/512/androidstudio_103298.png',
  },
  {
    label: 'Xcode',
    imgPath:
      'https://cdn.icon-icons.com/icons2/3053/PNG/256/xcode_helper_macos_bigsur_icon_189446.png',
  }, */
	{
		label: 'socket io',
		imgPath: 'https://socket.io/images/logo.svg',
	},
];

type Props = {
	start: number;
};

function TechnologyList({ start = 0 }: Props) {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ /* maxWidth: 400, */ flexGrow: 1 }}>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.slice(start).map((step, index) => (
					<div key={step.label} className="d-flex">
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component="img"
								sx={{
									height: 128,
									display: 'block',
									maxWidth: 200,
									overflow: 'hidden',
									width: '100%',
								}}
								src={step.imgPath}
								alt={step.label}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			{/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          width: '100%',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
		</Box>
	);
}

export default TechnologyList;
