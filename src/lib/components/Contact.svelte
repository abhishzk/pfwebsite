<script lang="ts">
	import { trackEvent } from '$lib/analytics';
	import { externalLinks } from '$lib/data/portfolio';

	let copyLabel = 'Copy email';

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText('abhishzk.ie@gmail.com');
			copyLabel = 'Email copied';
			trackEvent('contact_click', { placement: 'copy_email' });
			setTimeout(() => (copyLabel = 'Copy email'), 1800);
		} catch {
			copyLabel = 'abhishzk.ie@gmail.com';
		}
	}
</script>

<section id="contact" class="contact-section">
	<div class="page-shell contact-grid">
		<div>
			<span class="eyebrow">Open to Product Manager roles</span>
			<h2>Have a product problem worth solving?</h2>
		</div>
		<div class="contact-copy">
			<p>
				I am based in Dublin and interested in Product Manager opportunities across Ireland and the
				EU.
			</p>
			<div class="contact-actions">
				<a
					class="button button-primary"
					href={externalLinks.email.href}
					on:click={() => trackEvent('contact_click', { placement: 'contact' })}
				>
					Start a conversation
				</a>
				<button class="button button-secondary" type="button" on:click={copyEmail}>
					<span aria-live="polite">{copyLabel}</span>
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		padding-block: clamp(80px, 11vw, 132px);
		border-top: 1px solid var(--line);
		background: var(--surface-soft);
		color: var(--ink);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
		align-items: end;
		gap: clamp(48px, 10vw, 140px);
	}

	.contact-section :global(.eyebrow) {
		color: var(--accent-strong);
	}

	h2 {
		max-width: 13ch;
		margin-bottom: 0;
		font-size: clamp(2.7rem, 5.8vw, 5.7rem);
	}

	.contact-copy p {
		max-width: 44ch;
		margin-bottom: 28px;
		color: var(--muted);
	}

	.contact-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.contact-section :global(.button-secondary) {
		border-color: var(--line);
		background: var(--surface);
		color: var(--ink);
		cursor: pointer;
	}

	@media (max-width: 780px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 500px) {
		.contact-actions {
			display: grid;
		}
	}
</style>
