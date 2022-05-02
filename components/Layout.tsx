import Head from 'next/head';
import {
	Container,
	createTheme,
	CssBaseline,
	styled,
	ThemeProvider,
	Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import ResponsiveAppBar from './AppBar';

const Footer = styled('footer')({
	marginTop: 10,
	textAlign: 'center',
});

type Props = {
	children?: ReactNode;
	title?: string;
	description?: string;
	home?: boolean;
};

export default function Layout({ title, description, children, home }: Props) {
	// const classes = useStyles();
	const baseTitle = 'Adventure Buddy';
	const siteTitle = title ? title + ' - ' + baseTitle : baseTitle;

	// const { cart } = useSelector((state) => state);

	const theme = createTheme({
		typography: {
			h1: {
				fontSize: '1.6rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
			h2: {
				fontSize: '1.4rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
			h3: {
				fontSize: '1.2rem',
				fontWeight: 400,
				margin: '.5rem 0',
			},
			h4: {
				fontSize: '1rem',
				fontWeight: 400,
				margin: '.5rem 0',
			},
		},
		/* palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
      error: {
        main: '#f44336',
      },
      warning: {
        main: '#ffa726',
      },
    }, */
	});

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{siteTitle}</title>
				{description && (
					<meta name="description" content={description}></meta>
				)}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ResponsiveAppBar />
				<Container disableGutters={true} maxWidth={false}>
					{children}
				</Container>
				<Footer>
					<Typography>
						All rights reserved. adventurebuddy.
					</Typography>
				</Footer>
			</ThemeProvider>
		</>
	);
}
