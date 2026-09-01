<script lang="ts">
	import { credentials } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="about" class="section">
	<div class="page-shell about-grid">
		<div class="about-copy reveal" use:reveal>
			<span class="eyebrow">About</span>
			<h2>
				Technical enough to challenge the solution. Product-minded enough to challenge the problem.
			</h2>
			<p>
				I started in software engineering and moved into product because I was most interested in
				why a system should exist, who it should serve, and how we would know it worked.
			</p>
			<p>
				That foundation helps me work closely with engineers without turning technical complexity
				into the product strategy. I connect architecture, customer behavior, and commercial goals
				into decisions a team can act on.
			</p>
		</div>

		<div class="credentials reveal" use:reveal={100}>
			{#each credentials as credential}
				<article>
					<h3>{credential.name}</h3>
					<p>{credential.institution}</p>
					<span class="mono">{credential.detail}</span>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
		align-items: start;
		gap: clamp(64px, 10vw, 140px);
	}

	.about-copy h2 {
		max-width: 15ch;
		margin-bottom: 28px;
		font-size: clamp(2.4rem, 4.8vw, 4.7rem);
	}

	.about-copy p {
		max-width: 60ch;
		color: var(--muted);
		font-size: 1.02rem;
	}

	.credentials {
		display: grid;
		gap: 0;
		border-top: 1px solid var(--line);
	}

	.credentials article {
		padding-block: 28px;
		border-bottom: 1px solid var(--line);
	}

	.credentials h3 {
		margin-bottom: 8px;
		font-size: 1.2rem;
		letter-spacing: -0.02em;
		line-height: 1.3;
	}

	.credentials p {
		margin-bottom: 8px;
		color: var(--muted);
		font-size: 0.92rem;
	}

	.credentials span {
		color: var(--accent-strong);
		font-size: 0.74rem;
	}

	@media (max-width: 850px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
