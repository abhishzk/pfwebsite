<script lang="ts">
	import { trackEvent } from '$lib/analytics';
	import { externalLinks } from '$lib/data/portfolio';
</script>

<section class="hero">
	<div class="page-shell hero-grid">
		<div class="hero-copy">
			<span class="eyebrow">Open to Product Manager roles</span>
			<h1>
				<span>Product Manager</span>
				<span>building useful, data-rich products.</span>
			</h1>
			<p>
				I lead 0-to-1 and enterprise SaaS products across AI, energy and fintech, from discovery
				through adoption.
			</p>
			<div class="hero-actions">
				<a
					class="button button-primary"
					href={externalLinks.email.href}
					on:click={() => trackEvent('contact_click', { placement: 'hero' })}
				>
					Start a conversation
				</a>
				<a class="button button-secondary" href="#work">View product work</a>
			</div>
		</div>

		<div class="portrait-wrap">
			<div class="portrait-frame">
				<img
					src="/images/headshot.webp"
					srcset="/images/headshot-480.webp 480w, /images/headshot-800.webp 800w, /images/headshot.webp 1024w"
					sizes="(max-width: 900px) 88vw, 32vw"
					alt="Illustrated portrait of Abhishek Kumar"
					width="1024"
					height="1024"
					loading="eager"
					fetchpriority="high"
				/>
			</div>
			<div class="portrait-note">
				<span class="mono">Dublin, Ireland</span>
				<span>AI, B2B SaaS, data, energy, fintech</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		display: flex;
		min-height: calc(100dvh - 68px);
		align-items: center;
		padding-block: clamp(56px, 8vw, 96px);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
		align-items: center;
		gap: clamp(48px, 8vw, 112px);
	}

	.hero-copy h1 {
		max-width: 780px;
		margin-bottom: 24px;
		letter-spacing: -0.055em;
	}

	.hero-copy h1 span {
		display: block;
	}

	.hero-copy h1 span:first-child {
		font-size: clamp(3.2rem, 5.4vw, 5.25rem);
	}

	.hero-copy h1 span:last-child {
		font-size: clamp(2.25rem, 2.85vw, 2.75rem);
	}

	.hero-copy p {
		max-width: 55ch;
		margin-bottom: 32px;
		color: var(--muted);
		font-size: clamp(1.05rem, 1.6vw, 1.3rem);
		line-height: 1.55;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.portrait-wrap {
		position: relative;
		align-self: end;
	}

	.portrait-frame {
		position: relative;
		overflow: hidden;
		aspect-ratio: 4 / 5;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface-soft);
		box-shadow: var(--shadow);
	}

	.portrait-frame::before {
		position: absolute;
		inset: 18px;
		z-index: 0;
		border: 1px solid var(--line);
		border-radius: calc(var(--radius) - 2px);
		content: '';
	}

	.portrait-frame img {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		filter: saturate(0.8) contrast(1.02);
	}

	.portrait-note {
		display: grid;
		gap: 4px;
		padding-top: 16px;
		color: var(--muted);
		font-size: 0.76rem;
	}

	.portrait-note .mono {
		color: var(--ink);
		font-size: 0.68rem;
		text-transform: uppercase;
	}

	@media (max-width: 900px) {
		.hero {
			min-height: auto;
		}

		.hero-grid {
			grid-template-columns: 1fr;
			gap: 52px;
		}

		.hero-copy h1 {
			max-width: 100%;
		}

		.hero-copy h1 span:first-child {
			font-size: clamp(2.75rem, 6.2vw, 4.25rem);
		}

		.hero-copy h1 span:last-child {
			font-size: clamp(2.25rem, 5.2vw, 3.3rem);
		}

		.portrait-wrap {
			width: min(100%, 520px);
			justify-self: end;
		}
	}

	@media (max-width: 600px) {
		.hero {
			padding-block: 56px 72px;
		}

		.hero-copy h1 span:first-child {
			font-size: clamp(2.25rem, 10vw, 3rem);
		}

		.hero-copy h1 span:last-child {
			font-size: clamp(2.1rem, 9vw, 2.75rem);
		}

		.hero-actions {
			display: grid;
		}

		.portrait-wrap {
			width: 88%;
		}
	}
</style>
