<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const sections = [
		{ id: 'hero', label: 'Home' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'casestudy', label: 'Case Study' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'activity', label: 'Activity' },
		{ id: 'about', label: 'About' }
	];

	let active = 'hero';
	let darkMode = false;
	let scrolled = false;
	let hidden = false;
	let lastY = 0;

	if (browser) {
		const storedTheme = localStorage.getItem('theme');
		const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
		darkMode = storedTheme === 'dark' || (!storedTheme && !prefersLight);
	}

	function toggleTheme() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function scrollTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		active = 'hero';
	}

	onMount(() => {
		const onScroll = () => {
			const y = window.scrollY;
			scrolled = y > 80;
			hidden = y > 80 && y > lastY;
			lastY = y;
		};
		window.addEventListener('scroll', onScroll);

		const observers: IntersectionObserver[] = [];

		sections.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (!el) return;
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) active = id;
				},
				{ rootMargin: '-40% 0px -55% 0px' }
			);
			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			window.removeEventListener('scroll', onScroll);
			observers.forEach((o) => o.disconnect());
		};
	});
</script>

<nav
	class="navbar fixed top-0 left-0 right-0 z-50 px-6 h-14 min-h-0 transition-all duration-300 {scrolled
		? 'bg-base-100 bg-opacity-80 backdrop-blur-md'
		: ''} {hidden ? '-translate-y-full' : 'translate-y-0'}"
>
	<!-- Left: logo -->
	<div class="flex-none">
		<button on:click={scrollTop} class="btn btn-ghost btn-sm px-2 gap-2 font-semibold">
			<img
				src="favicon.png"
				alt="logo"
				class="h-5 w-5 grayscale hover:grayscale-0 transition-all"
			/>
			abhishzk
		</button>
	</div>

	<!-- Center: nav links -->
	<div class="flex-1 flex justify-center gap-1 hidden md:flex">
		{#each sections.filter((s) => s.id !== 'hero') as section}
			<a
				href="#{section.id}"
				class="btn btn-ghost btn-xs font-medium tracking-wide
					{active === section.id
					? 'opacity-100 underline underline-offset-4'
					: 'opacity-50 hover:opacity-100'}"
			>
				{section.label}
			</a>
		{/each}
	</div>

	<!-- Right: theme toggle -->
	<div class="flex-none">
		<button
			on:click={toggleTheme}
			class="btn btn-ghost btn-sm w-10 h-10 p-0 flex items-center justify-center"
			aria-label="Toggle theme"
		>
			{#if darkMode}
				<!-- Sun: switch to light -->
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
					<path
						d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
					/>
				</svg>
			{:else}
				<!-- Moon: switch to dark -->
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
					<path
						d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>
