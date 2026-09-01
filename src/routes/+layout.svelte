<script>
	import { onMount } from 'svelte';
	import { initializeAnalytics } from '$lib/analytics';
	import '@fontsource-variable/manrope';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import '../app.css';

	onMount(initializeAnalytics);
</script>

<a class="skip-link" href="#main-content">Skip to main content</a>
<slot />
