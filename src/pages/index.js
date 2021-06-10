import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Reactjs Front End Test"
				content="Showing offer packages based on JSON input below."
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
