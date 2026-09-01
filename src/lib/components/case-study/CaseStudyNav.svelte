<script lang="ts">
	import { caseStudies } from '$lib/data/portfolio';
	import { trackEvent } from '$lib/analytics';

	export let current: string;

	$: index = caseStudies.findIndex((study) => study.slug === current);
	$: next = caseStudies[(index + 1) % caseStudies.length];
</script>

<section class="next-work">
	<div class="page-shell next-grid">
		<div>
			<span class="mono">Next case study</span>
			<h2>{next.title}</h2>
		</div>
		<a
			class="button button-primary"
			href="/work/{next.slug}"
			on:click={() => trackEvent('case_study_open', { case_study: next.slug, placement: 'next' })}
		>
			Read next case study
		</a>
	</div>
</section>

<style>
	.next-work {
		padding-block: clamp(72px, 10vw, 120px);
		border-top: 1px solid var(--line);
		background: var(--surface);
	}

	.next-grid {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: end;
		gap: 40px;
	}

	span {
		display: block;
		margin-bottom: 12px;
		color: var(--accent-strong);
		font-size: 0.74rem;
		text-transform: uppercase;
	}

	h2 {
		max-width: 15ch;
		margin-bottom: 0;
		font-size: clamp(2.1rem, 4vw, 3.8rem);
	}

	@media (max-width: 700px) {
		.next-grid {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}
</style>
