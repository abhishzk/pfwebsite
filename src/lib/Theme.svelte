<script lang="ts">
	import { browser } from '$app/environment';

	if (browser) {
		const storedTheme = localStorage.getItem('theme');
		const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
		const isDark = storedTheme === 'dark' || (!storedTheme && !prefersLight);
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', isDark);
	}
</script>


<style>
	/* Add smooth transition for theme change */
	:root {
		transition: background-color 0.3s, color 0.3s;
	}
</style>
