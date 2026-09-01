<script lang="ts">
	export let title: string;
</script>

<aside class="decision-block">
	<span class="mono">Product decision</span>
	<h3>{title}</h3>
	<slot />
</aside>

<style>
	.decision-block {
		margin-block: 34px;
		padding: clamp(24px, 4vw, 38px);
		border: 1px solid var(--line);
		border-left: 4px solid var(--accent);
		border-radius: var(--radius);
		background: var(--surface);
		box-shadow: var(--shadow);
	}

	span {
		display: block;
		margin-bottom: 10px;
		color: var(--accent-strong);
		font-size: 0.62rem;
		text-transform: uppercase;
	}

	h3 {
		margin: 0 0 12px !important;
		font-size: clamp(1.35rem, 2.4vw, 2rem) !important;
	}

	.decision-block :global(p) {
		margin-bottom: 0;
		font-size: 0.92rem;
	}
</style>
