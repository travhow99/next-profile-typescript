import { ProfileItem } from '../../interfaces/ProfileItem';
import { v4 as uuid } from 'uuid';

const profileItem: ProfileItem[] = [
	{
		id: uuid(),
		title: 'Next.js Gear Rental',
		github: 'https://github.com/travhow99/nextjs-gear-rental',
		url: null,
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		subtitle:
			'Next.js build for a location-based peer-to-peer gear rental application.',
		technologies: ['Next.js', 'React', 'express', 'node.js', 'MongoDB'],
	},
	{
		id: uuid(),
		title: 'Next.js TypeScript Portfolio',
		github: 'https://github.com/travhow99/next-profile-typescript',
		url: '/',
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		subtitle: 'Next.js application for my personal porfolio website.',
		technologies: ['Next.js', 'TypeScript', 'React'],
	},
	{
		id: uuid(),
		title: 'Docutherapy',
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		github: 'https://github.com/travhow99/docutheraphp-laravel',
		url: null,
		subtitle:
			'Documentation software for therapists built with Laravel and React.',
		technologies: ['Laravel', 'PHP', 'MySQL', 'React'],
	},
	{
		id: uuid(),
		title: 'Mint Budget Trends',
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		github: 'https://github.com/travhow99/mint-budget-trends',
		url: null,
		subtitle:
			'JavaScript/jQuery web app that visualizes data from the Mint.com budgeting app using Chart.js.',
		technologies: ['javascript', 'jQuery', 'chart.js'],
	},
	{
		id: uuid(),
		title: 'Things to Do',
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		github: 'https://github.com/travhow99/docutheraphp-laravel',
		url: null,
		subtitle:
			'React app that iterates randomly through a list of activities.',
		technologies: ['React'],
	},
	{
		id: uuid(),
		title: 'Fly Away Shuttle',
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		github: 'https://github.com/travhow99/bus-booking-reports',
		url: null,
		subtitle: 'Shuttle booking website with a custom reporting plugin.',
		technologies: ['WordPress', 'PHP'],
	},
];

export default profileItem;
