<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	import Theme from '$lib/Theme.svelte';
	import Hero from '$lib/Home/Hero.svelte';
	import Projects from '$lib/Home/Projects.svelte';
	import Experience from '$lib/Home/Experience.svelte';
	import CaseStudy from '$lib/Home/CaseStudy.svelte';
	import Activity from '$lib/Home/Activity.svelte';
	import About from '$lib/Home/About.svelte';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';

</script>

<svelte:head>
	<title>Abhishek Kumar</title>
</svelte:head>

<Theme />
<Nav />
<Hero />
<div class="divider" />
<Experience />
<div class="divider" />
<CaseStudy />
<div class="divider" />
<Projects />
<div class="divider" />
<Activity />
<div class="divider" />
<About />
<Footer />

<MetaTags
	title="Abhishek Kumar"
	titleTemplate="%s | The Homepage"
	description="The homepage of Abhishek Kumar - Software Engineer in Ireland"
	canonical="https://abhishzk.com"
	openGraph={{
		url: 'https://abhishzk.com',
		title: 'Abhishek Kumar',
		description: 'The homepage of Abhishek Kumar - Software Engineer in Ireland',
		images: [
			{
				url: '/images/openGraph/img-1.png',
				width: 800,
				height: 600,
				alt: 'Website preview'
			},
			{
				url: '/images/openGraph/img-2.png',
				width: 900,
				height: 800,
				alt: 'Website preview'
			},
			{ url: '/images/openGraph/img-3.png' }
		],
		site_name: 'abhishzk'
	}}
/>

