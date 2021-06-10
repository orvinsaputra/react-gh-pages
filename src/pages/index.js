import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Reactjs Package Planner"
				content="Showing offer packages based on JSON input below."
			/>
		</Layout>
	);
}
