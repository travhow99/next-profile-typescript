import { Grid } from '@mui/material';
import Link from 'next/link';
import About from '../components/About';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import TechnologyList from '../components/Technologies';

const IndexPage = () => (
	<Layout title="Travis Howell - Full Stack Web Developer">
		<Jumbotron />
		<About />
		<Portfolio />
		<Grid container spacing={4}>
			<Grid item xs={4}>
				<TechnologyList start={0} />
			</Grid>
			<Grid item xs={4}>
				<TechnologyList start={1} />
			</Grid>
			<Grid item xs={4}>
				<TechnologyList start={2} />
			</Grid>
		</Grid>
	</Layout>
);

export default IndexPage;
