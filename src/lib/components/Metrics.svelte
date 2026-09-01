<script lang="ts">
	import type { CaseStudyMetric } from '$lib/types';

	export let metrics: CaseStudyMetric[];
	export let compact = false;
</script>

<div class:compact class="metrics" aria-label="Key outcomes">
	{#each metrics as metric}
		<div class="metric">
			<strong class="mono">{metric.value}</strong>
			<span>{metric.label}</span>
			{#if metric.verifiedAt}
				<small>Verified {metric.verifiedAt}</small>
			{/if}
		</div>
	{/each}
</div>

<style>
	.metrics {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}

	.metric {
		display: grid;
		gap: 8px;
		padding: 30px clamp(18px, 3vw, 38px);
		border-right: 1px solid var(--line);
	}

	.metric:first-child {
		padding-left: 0;
	}

	.metric:last-child {
		border-right: 0;
	}

	.metric strong {
		font-size: clamp(1.7rem, 3vw, 2.7rem);
		font-weight: 500;
		letter-spacing: -0.05em;
		line-height: 1;
	}

	.metric span {
		max-width: 18ch;
		color: var(--muted);
		font-size: 0.8rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.metric small {
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.6rem;
	}

	.compact {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}

	.compact .metric:first-child {
		padding-left: clamp(18px, 3vw, 38px);
	}

	@media (max-width: 760px) {
		.metrics {
			grid-template-columns: 1fr 1fr;
		}

		.metric,
		.metric:first-child {
			padding: 24px 16px;
		}

		.metric:nth-child(2) {
			border-right: 0;
		}

		.metric:nth-child(-n + 2) {
			border-bottom: 1px solid var(--line);
		}
	}
</style>
