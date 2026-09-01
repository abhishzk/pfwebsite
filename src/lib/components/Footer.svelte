<script lang="ts">
	import { trackEvent } from '$lib/analytics';
	import { externalLinks } from '$lib/data/portfolio';
</script>

<footer>
	<div class="page-shell footer-inner">
		<div>
			<strong>Abhishek Kumar</strong>
			<span>Product Manager in Dublin</span>
		</div>
		<nav aria-label="Footer navigation">
			<a
				href={externalLinks.linkedin.href}
				target="_blank"
				rel="noreferrer"
				on:click={() => trackEvent('linkedin_click', { placement: 'footer' })}>LinkedIn</a
			>
			<a
				href={externalLinks.github.href}
				target="_blank"
				rel="noreferrer"
				on:click={() => trackEvent('github_click', { placement: 'footer' })}>GitHub</a
			>
			<a
				href={externalLinks.resume.href}
				target="_blank"
				rel="noreferrer"
				on:click={() => trackEvent('resume_download', { placement: 'footer' })}>Resume</a
			>
			<a href="#main-content">Back to top</a>
		</nav>
	</div>
</footer>

<style>
	footer {
		padding-block: 28px;
		border-top: 1px solid var(--line);
		background: var(--page);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}

	.footer-inner > div {
		display: grid;
		gap: 2px;
	}

	strong {
		font-size: 0.82rem;
	}

	span {
		color: var(--muted);
		font-size: 0.7rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 22px;
	}

	nav a {
		color: var(--muted);
		font-size: 0.74rem;
		font-weight: 650;
	}

	nav a:hover {
		color: var(--accent-strong);
	}

	@media (max-width: 600px) {
		.footer-inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
