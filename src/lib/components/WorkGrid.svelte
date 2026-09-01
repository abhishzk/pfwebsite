<script lang="ts">
	import { caseStudies } from '$lib/data/portfolio';
	import { trackEvent } from '$lib/analytics';
	import { reveal } from '$lib/actions/reveal';

	function trackStudy(slug: string, placement: string) {
		trackEvent('case_study_open', { case_study: slug, placement });
	}
</script>

<section id="work" class="section work-section">
	<div class="page-shell">
		<div class="section-heading">
			<span class="eyebrow">Selected product work</span>
			<h2>Decisions, trade-offs, and outcomes.</h2>
			<p>
				Three products that show how I find the real constraint, align teams, and measure what
				changes after launch.
			</p>
		</div>

		<div class="work-list">
			{#each caseStudies as study, index}
				<article class:featured={index === 0} class="work-item reveal" use:reveal={index * 80}>
					<a
						class="work-media"
						href="/work/{study.slug}"
						on:click={() => trackStudy(study.slug, 'home_media')}
					>
						<img
							src={study.image}
							srcset={study.imageSrcset}
							sizes={index === 0
								? '(max-width: 900px) 100vw, 58vw'
								: '(max-width: 900px) 100vw, 50vw'}
							alt={study.imageAlt}
							width={study.imageWidth}
							height={study.imageHeight}
							loading="lazy"
							decoding="async"
						/>
					</a>

					<div class="work-copy">
						<div class="work-meta">
							<span>{study.role}</span>
							<span>{study.period}</span>
						</div>
						<h3>
							<a href="/work/{study.slug}" on:click={() => trackStudy(study.slug, 'home_title')}
								>{study.title}</a
							>
						</h3>
						<p class="description">{study.description}</p>

						<div class="evidence-pair">
							<div>
								<span class="evidence-label">Product decision</span>
								<p>{study.decision}</p>
							</div>
							<div>
								<span class="evidence-label">Outcome</span>
								<p>{study.result}</p>
							</div>
						</div>

						<a
							class="text-link"
							href="/work/{study.slug}"
							on:click={() => trackStudy(study.slug, 'home_link')}
						>
							Read case study <span aria-hidden="true">→</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.work-section {
		background: var(--surface);
	}

	.work-list {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 72px 40px;
	}

	.work-item {
		display: grid;
		grid-column: span 7;
		align-content: start;
		gap: 30px;
	}

	.work-item.featured {
		grid-column: 1 / -1;
		grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
		align-items: center;
		gap: clamp(40px, 7vw, 88px);
	}

	.work-item:nth-child(3) {
		grid-column: span 5;
	}

	.work-media {
		display: block;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface-soft);
		box-shadow: var(--shadow);
	}

	.work-item .work-media {
		aspect-ratio: 16 / 10;
	}

	.work-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
		transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.work-media:hover img {
		transform: scale(1.025);
	}

	.work-meta {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 18px;
		margin-bottom: 16px;
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.66rem;
		text-transform: uppercase;
	}

	.work-copy h3 {
		margin-bottom: 18px;
		font-size: clamp(2rem, 3.8vw, 3.5rem);
	}

	.work-copy h3 a:hover {
		color: var(--accent-strong);
	}

	.work-item:not(.featured) .work-copy h3 {
		font-size: clamp(1.8rem, 3vw, 2.7rem);
	}

	.work-item:not(.featured) .evidence-pair {
		gap: 14px;
	}

	.description {
		margin-bottom: 28px;
		color: var(--muted);
		font-size: 1.02rem;
	}

	.evidence-pair {
		display: grid;
		gap: 16px;
		margin-bottom: 28px;
		padding-left: 18px;
		border-left: 2px solid var(--accent);
	}

	.evidence-pair p {
		margin-bottom: 0;
		font-size: 0.9rem;
		line-height: 1.55;
	}

	.evidence-label {
		display: block;
		margin-bottom: 4px;
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.62rem;
		text-transform: uppercase;
	}

	@media (max-width: 900px) {
		.work-list {
			grid-template-columns: 1fr;
			gap: 80px;
		}

		.work-item,
		.work-item:nth-child(3),
		.work-item.featured {
			grid-column: auto;
			grid-template-columns: 1fr;
			gap: 34px;
		}
	}
</style>
