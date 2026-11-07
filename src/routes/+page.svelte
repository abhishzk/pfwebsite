<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HiringSnapshot from '$lib/components/HiringSnapshot.svelte';
	import Metrics from '$lib/components/Metrics.svelte';
	import WorkGrid from '$lib/components/WorkGrid.svelte';
	import Approach from '$lib/components/Approach.svelte';
	import Capabilities from '$lib/components/Capabilities.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { homeMetrics } from '$lib/data/portfolio';

	const title = 'Abhishek Kumar | Product Manager in Ireland (abhishzk)';
	const description = `Abhishek Kumar (abhishzk) is a Product Manager in Dublin, Ireland. Former Mastercard engineer who grew VisaJobs to ${homeMetrics[0].value} candidates. See the case studies.`;
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfilePage',
				'@id': 'https://abhishzk.com/#profile',
				url: 'https://abhishzk.com/',
				name: title,
				description,
				mainEntity: { '@id': 'https://abhishzk.com/#person' }
			},
			{
				'@type': 'Person',
				'@id': 'https://abhishzk.com/#person',
				name: 'Abhishek Kumar',
				alternateName: 'abhishzk',
				url: 'https://abhishzk.com',
				image: 'https://abhishzk.com/images/headshot.webp',
				jobTitle: 'Product Manager',
				description: 'Product Manager in Dublin, Ireland. Former Mastercard software engineer.',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Dublin',
					addressCountry: 'IE'
				},
				homeLocation: { '@type': 'Place', name: 'Dublin, Ireland' },
				hasOccupation: {
					'@type': 'Occupation',
					name: 'Product Manager',
					occupationLocation: { '@type': 'Country', name: 'Ireland' }
				},
				worksFor: {
					'@type': 'Organization',
					name: 'VisaJobs Ireland',
					url: 'https://www.visajobs.ie/'
				},
				alumniOf: {
					'@type': 'CollegeOrUniversity',
					name: 'Technological University of the Shannon'
				},
				sameAs: ['https://www.linkedin.com/in/abhishzk/'],
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
				'@id': 'https://abhishzk.com/#website',
				name: 'Abhishek Kumar Product Portfolio',
				alternateName: 'abhishzk',
				url: 'https://abhishzk.com',
				description,
				author: { '@id': 'https://abhishzk.com/#person' }
			}
		]
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Abhishek Kumar (abhishzk)" />
	<meta property="og:locale" content="en_IE" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/" />
	<meta property="og:image" content="https://abhishzk.com/images/social/home.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Abhishek Kumar, Product Manager in Dublin, Ireland" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://abhishzk.com/images/social/home.png" />
	<meta name="twitter:image:alt" content="Abhishek Kumar, Product Manager in Dublin, Ireland" />
	{@html structuredDataHtml}
</svelte:head>

<Header home />
<main id="main-content">
	<Hero />
	<HiringSnapshot />
	<section class="outcomes section-tight" aria-label="Selected outcomes">
		<div class="page-shell">
			<Metrics metrics={homeMetrics} />
		</div>
	</section>
	<WorkGrid />
	<Approach />
	<Capabilities />
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
