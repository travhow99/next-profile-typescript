import { Grid } from '@mui/material';
import Link from 'next/link';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import TechnologyList from '../components/Technologies';

const IndexPage = () => (
	<Layout title="Travis Howell - Full Stack Web Developer">
		<Jumbotron />

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
