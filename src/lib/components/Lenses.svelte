<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { trackEvent } from '$lib/analytics';

	const lenses = [
		{
			title: 'Product',
			body: 'I start from the constraint and the decision someone has to make, then decide what to build.',
			proof: 'VisaJobs Ireland',
			href: '/work/visajobs'
		},
		{
			title: 'Engineering',
			body: 'I say what it is built on, what it takes to build, and where it breaks.',
			proof: 'Container loading engineering note',
			href: '/work/container-loading'
		},
		{
			title: 'Economics',
			body: 'I put a number beside every bet, and say what that number depends on.',
			proof: 'Bill Reader review-time economics',
			href: '/work/bill-reader'
		},
		{
			title: 'Systems thinking',
			body: 'I design the whole loop, not the feature: how work enters, earns priority, ships and gets measured.',
			proof: 'Digital BAU operating model',
			href: '/work/digital-bau-operating-model'
		}
	];
</script>

<section id="lenses" class="section-tight">
	<div class="page-shell">
		<div class="section-heading">
			<span class="eyebrow">How I think</span>
			<h2>Four lenses on every product decision.</h2>
		</div>
		<div class="lens-grid">
			{#each lenses as lens, index}
				<article class="lens reveal" use:reveal={index * 70}>
					<h3>{lens.title}</h3>
					<p>{lens.body}</p>
					<a
						class="text-link"
						href={lens.href}
						on:click={() =>
							trackEvent('case_study_open', {
								case_study: lens.href.split('/').pop() ?? 'unknown',
								placement: 'lenses'
							})}
					>
						{lens.proof} <span aria-hidden="true">→</span>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.lens-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		margin-top: 36px;
	}

	.lens {
		display: grid;
		align-content: start;
		gap: 10px;
		padding: 24px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.lens h3 {
		margin: 0;
		font-size: 1.25rem;
	}

	.lens p {
		margin: 0;
		color: var(--muted);
		font-size: 0.92rem;
		line-height: 1.6;
	}

	@media (max-width: 1000px) {
		.lens-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 560px) {
		.lens-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
