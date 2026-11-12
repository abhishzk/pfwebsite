<script lang="ts">
	export let rows: { label: string; text: string }[];
</script>

<dl class="econ">
	{#each rows as row}
		<div>
			<dt>{row.label}</dt>
			<dd>{row.text}</dd>
		</div>
	{/each}
</dl>

<style>
	.econ {
		display: grid;
		margin: 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--surface);
	}

	.econ div {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 20px;
		padding: 18px 22px;
		border-bottom: 1px solid var(--line);
	}

	.econ div:last-child {
		border-bottom: 0;
	}

	dt {
		padding-top: 3px;
		color: var(--accent-strong);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	dd {
		margin: 0;
		color: var(--ink);
		line-height: 1.65;
	}

	@media (max-width: 560px) {
		.econ div {
			grid-template-columns: 1fr;
			gap: 4px;
		}
	}
</style>
