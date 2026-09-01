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

		<div class="case-image">
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
		<Metrics metrics={study.metrics} compact />
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
		grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.6fr);
		align-items: end;
		gap: clamp(44px, 7vw, 88px);
		margin-bottom: clamp(52px, 8vw, 88px);
	}

	.case-domains {
		margin-bottom: 16px;
		color: var(--accent-strong);
		font-size: 0.76rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	h1 {
		max-width: 14ch;
		margin-bottom: 0;
		font-size: clamp(3rem, 5.3vw, 4.1rem);
		letter-spacing: -0.06em;
	}

	.case-intro > p {
		margin-bottom: 30px;
		color: var(--muted);
		font-size: 1.08rem;
		line-height: 1.6;
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
		overflow: hidden;
		aspect-ratio: 16 / 9;
		margin-bottom: 48px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface-soft);
		box-shadow: var(--shadow);
	}

	.case-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
	}

	@media (max-width: 820px) {
		.case-title-grid {
			grid-template-columns: 1fr;
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
			font-size: clamp(2.7rem, 13vw, 4.3rem);
		}

		.case-image {
			aspect-ratio: 4 / 3;
		}
	}
</style>
