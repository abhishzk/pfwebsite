<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	import Theme from '$lib/Theme.svelte';
	import Hero from '$lib/Home/Hero.svelte';
	import Projects from '$lib/Home/Projects.svelte';
	import Experience from '$lib/Home/Experience.svelte';
	import Activity from '$lib/Home/Activity.svelte';
	import About from '$lib/Home/About.svelte';
	import Footer from '$lib/Footer.svelte';

	const resumePath = '/resume.pdf';

	function smoothlyScrollUp() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handleViewResume() {
		// Click tracking hook - can be extended with analytics
		window.open(resumePath, '_blank', 'noopener,noreferrer');
	}

	function handleDownloadResume(event: MouseEvent) {
		// Click tracking hook - can be extended with analytics
		// The download will happen via the anchor's download attribute
	}
</script>

<svelte:head>
	<title>Abhishek Kumar</title>
</svelte:head>

<div class="h-0 m-0">
	<button on:click={smoothlyScrollUp}>
		<img
			width="42"
			height="42"
			src="favicon.png"
			alt="Website logo"
			class="logo z-10 cursor-pointer h-8 w-8 fixed top-5 left-6 grayscale"
		/>
	</button>
	<div class="fixed top-5 right-6 z-10 flex flex-col sm:flex-row gap-2">
		<button
			on:click={handleViewResume}
			class="btn btn-sm btn-primary"
			aria-label="View resume PDF in new tab"
			type="button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mr-1"
				aria-hidden="true"
			>
				<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
				<polyline points="14 2 14 8 20 8" />
				<line x1="16" y1="13" x2="8" y2="13" />
				<line x1="16" y1="17" x2="8" y2="17" />
				<polyline points="10 9 9 9 8 9" />
			</svg>
			<span class="hidden sm:inline">View Resume</span>
			<span class="sm:hidden">Resume</span>
		</button>
		<a
			href={resumePath}
			download="Abhishek_Kumar_Resume.pdf"
			on:click={handleDownloadResume}
			class="btn btn-sm btn-outline"
			aria-label="Download resume PDF file"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mr-1"
				aria-hidden="true"
			>
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
				<polyline points="7 10 12 15 17 10" />
				<line x1="12" y1="15" x2="12" y2="3" />
			</svg>
			<span class="hidden sm:inline">Download</span>
			<span class="sm:hidden">PDF</span>
		</a>
	</div>
</div>

<Theme />
<Hero />
<div class="divider" />
<Experience />
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

<style>
	.logo:hover {
		filter: grayscale(0%);
	}
</style>
