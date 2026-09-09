<script lang="ts">
	import Metrics from '$lib/components/Metrics.svelte';
	import type { CaseStudy } from '$lib/types';

	export let study: CaseStudy;
</script>

<header class="case-hero">
	<div class="page-shell">
		<a class="back-link" href="/#work"><span aria-hidden="true">←</span> Selected work</a>
		<div class="case-title-grid">
			<div>
				<p class="case-domains mono">{study.domains.join(' / ')}</p>
				<h1>{study.title}</h1>
			</div>
			<div class="case-intro">
				<p>{study.description}</p>
				<dl>
					<div>
						<dt>Role</dt>
						<dd>{study.role}</dd>
					</div>
					<div>
						<dt>Period</dt>
						<dd>{study.period}</dd>
					</div>
				</dl>
			</div>
		</div>

		<div class:contain={study.imageFit === 'contain'} class="case-image">
			<img
				src={study.image}
				srcset={study.imageSrcset}
				sizes="(max-width: 1240px) 100vw, 1200px"
				alt={study.imageAlt}
				width={study.imageWidth}
				height={study.imageHeight}
				loading="eager"
				fetchpriority="high"
			/>
		</div>
		{#if study.imageCaption}
			<p class="case-image-caption">{study.imageCaption}</p>
		{/if}
		<Metrics metrics={study.metrics} compact ariaLabel={study.metricsLabel ?? 'Key outcomes'} />

		<dl class="case-context" aria-label="Case study context">
			<div>
				<dt>Team</dt>
				<dd>{study.context.team}</dd>
			</div>
			<div>
				<dt>Product stage</dt>
				<dd>{study.context.stage}</dd>
			</div>
			<div>
				<dt>Customer</dt>
				<dd>{study.context.customer}</dd>
			</div>
			<div>
				<dt>My ownership</dt>
				<dd>{study.context.ownership}</dd>
			</div>
			<div>
				<dt>Key constraint</dt>
				<dd>{study.context.constraint}</dd>
			</div>
		</dl>
	</div>
</header>

<style>
	.case-hero {
		padding-block: 48px clamp(80px, 10vw, 132px);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: clamp(52px, 8vw, 88px);
		color: var(--muted);
		font-size: 0.86rem;
		font-weight: 650;
	}

	.back-link:hover {
		color: var(--accent-strong);
	}

	.case-title-grid {
		display: grid;
		min-width: 0;
		grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.6fr);
		align-items: end;
		gap: clamp(44px, 7vw, 88px);
		margin-bottom: clamp(52px, 8vw, 88px);
	}

	.case-title-grid > * {
		width: 100%;
		min-width: 0;
	}

	.case-domains {
		max-width: 100%;
		margin-bottom: 16px;
		color: var(--accent-strong);
		font-size: 0.76rem;
		font-weight: 500;
		text-transform: uppercase;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	h1 {
		max-width: 14ch;
		width: 100%;
		min-width: 0;
		margin-bottom: 0;
		font-size: clamp(3rem, 5.3vw, 4.1rem);
		letter-spacing: -0.06em;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	.case-intro > p {
		max-width: 100%;
		margin-bottom: 30px;
		color: var(--muted);
		font-size: 1.08rem;
		line-height: 1.6;
		overflow-wrap: anywhere;
	}

	dl {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin: 0;
		padding-top: 20px;
		border-top: 1px solid var(--line);
	}

	dt {
		margin-bottom: 5px;
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.72rem;
		text-transform: uppercase;
	}

	dd {
		margin: 0;
		font-size: 0.78rem;
		font-weight: 650;
	}

	.case-image {
		min-width: 0;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		margin-bottom: 48px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface-soft);
		box-shadow: var(--shadow);
	}

	.case-image-caption {
		max-width: 72ch;
		margin: -30px 0 42px;
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.76rem;
		line-height: 1.55;
	}

	.case-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
	}

	.case-image.contain img {
		object-fit: contain;
	}

	.case-context {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 18px;
		margin-top: 42px;
		padding-top: 22px;
		border-top: 1px solid var(--line);
	}

	.case-context > div {
		min-width: 0;
	}

	.case-context dt {
		margin-bottom: 7px;
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.68rem;
		text-transform: uppercase;
	}

	.case-context dd {
		margin: 0;
		font-size: 0.8rem;
		font-weight: 650;
		line-height: 1.45;
	}

	@media (max-width: 820px) {
		.case-title-grid {
			grid-template-columns: 1fr;
		}

		.case-context {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		h1 {
			max-width: 14ch;
		}
	}

	@media (max-width: 600px) {
		.case-hero {
			padding-top: 30px;
		}

		h1 {
			max-width: 100%;
			font-size: clamp(2.35rem, 11vw, 3.6rem);
		}

		.case-image {
			aspect-ratio: 4 / 3;
		}

		.case-image.contain {
			aspect-ratio: 16 / 9;
		}

		.case-image-caption {
			margin-top: -28px;
			margin-bottom: 34px;
			font-size: 0.7rem;
		}

		.case-context {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 20px 16px;
		}
	}
</style>
