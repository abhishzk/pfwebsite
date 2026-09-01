<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>{$page.status} | Abhishek Kumar</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />
<main id="main-content" class="error-page page-shell">
	<p class="mono">{$page.status}</p>
	<h1>This page is not available.</h1>
	<p>{$page.error?.message || 'The link may have changed or the page may no longer exist.'}</p>
	<a class="button button-primary" href="/">Return home</a>
</main>
<Footer />

<style>
	.error-page {
		display: flex;
		min-height: calc(100dvh - 150px);
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}

	.error-page .mono {
		margin-bottom: 12px;
		color: var(--accent-strong);
	}

	h1 {
		margin-bottom: 18px;
		font-size: clamp(2.8rem, 7vw, 6rem);
	}

	.error-page > p:not(.mono) {
		max-width: 48ch;
		margin-bottom: 28px;
		color: var(--muted);
	}
</style>
