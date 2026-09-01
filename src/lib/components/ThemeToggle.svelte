<script lang="ts">
	import { onMount } from 'svelte';

	let dark = false;

	onMount(() => {
		dark = document.documentElement.dataset.theme === 'dark';
	});

	function toggleTheme() {
		dark = !dark;
		const theme = dark ? 'dark' : 'light';
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		localStorage.setItem('theme', theme);
	}
</script>

<button
	class="theme-toggle"
	type="button"
	on:click={toggleTheme}
	aria-label={`Switch to ${dark ? 'Light' : 'Dark'} theme`}
>
	<span>{dark ? 'Light' : 'Dark'}</span>
</button>

<style>
	.theme-toggle {
		min-width: 58px;
		height: 38px;
		padding: 0 10px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
		color: var(--muted);
		cursor: pointer;
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.68rem;
		font-weight: 500;
		text-transform: uppercase;
		transition:
			border-color 180ms ease,
			color 180ms ease,
			transform 180ms ease;
	}

	.theme-toggle:hover {
		border-color: var(--accent);
		color: var(--accent-strong);
		transform: translateY(-1px);
	}
</style>
