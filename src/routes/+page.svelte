<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Metrics from '$lib/components/Metrics.svelte';
	import WorkGrid from '$lib/components/WorkGrid.svelte';
	import Approach from '$lib/components/Approach.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { homeMetrics } from '$lib/data/portfolio';

	const description =
		'Product Manager in Dublin building data-rich products across AI, B2B SaaS, energy and fintech.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				name: 'Abhishek Kumar',
				url: 'https://abhishzk.com',
				image: 'https://abhishzk.com/images/headshot.webp',
				jobTitle: 'Product Manager',
				homeLocation: { '@type': 'Place', name: 'Dublin, Ireland' },
				sameAs: ['https://www.linkedin.com/in/abhishzk/', 'https://www.visajobs.ie/'],
				knowsAbout: [
					'Product Management',
					'B2B SaaS',
					'AI Products',
					'Energy Technology',
					'Fintech'
				]
			},
			{
				'@type': 'WebSite',
				name: 'Abhishek Kumar Product Portfolio',
				url: 'https://abhishzk.com',
				description
			}
		]
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>Abhishek Kumar | Product Manager</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Abhishek Kumar | Product Manager" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/" />
	<meta property="og:image" content="https://abhishzk.com/images/social/home.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Abhishek Kumar, Product Manager in Dublin" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Abhishek Kumar | Product Manager" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://abhishzk.com/images/social/home.png" />
	<meta name="twitter:image:alt" content="Abhishek Kumar, Product Manager in Dublin" />
	{@html structuredDataHtml}
</svelte:head>

<Header home />
<main id="main-content">
	<Hero />
	<section class="outcomes section-tight" aria-label="Selected outcomes">
		<div class="page-shell">
			<Metrics metrics={homeMetrics} />
		</div>
	</section>
	<WorkGrid />
	<Approach />
	<ExperienceTimeline />
	<About />
	<Contact />
</main>
<Footer />

<style>
	.outcomes {
		padding-top: 0;
	}
</style>
