<script lang="ts">
	import { trackEvent } from '$lib/analytics';
	import { externalLinks } from '$lib/data/portfolio';

	let portraitFrame: HTMLDivElement;

	function handlePortraitMove(event: PointerEvent) {
		if (!portraitFrame || event.pointerType === 'touch') return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const bounds = portraitFrame.getBoundingClientRect();
		const x = (event.clientX - bounds.left) / bounds.width - 0.5;
		const y = (event.clientY - bounds.top) / bounds.height - 0.5;
		portraitFrame.style.setProperty('--tilt-x', `${y * -4}deg`);
		portraitFrame.style.setProperty('--tilt-y', `${x * 4}deg`);
	}

	function resetPortrait() {
		portraitFrame?.style.setProperty('--tilt-x', '0deg');
		portraitFrame?.style.setProperty('--tilt-y', '0deg');
	}
</script>

<section class="hero">
	<div class="page-shell hero-grid">
		<div class="hero-copy">
			<span class="eyebrow">Open to Product Manager roles</span>
			<h1>
				<span>Product Manager</span>
				<span>in Ireland.</span>
			</h1>
			<p>
				I'm Abhishek Kumar (abhishzk) in Dublin. I own products end to end, from discovery to
				adoption, and I pull AI features that don't work.
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
			<div
				class="portrait-frame"
				role="presentation"
				bind:this={portraitFrame}
				on:pointermove={handlePortraitMove}
				on:pointerleave={resetPortrait}
				on:pointercancel={resetPortrait}
			>
				<img
					src="/images/headshot.webp"
					srcset="/images/headshot-480.webp 480w, /images/headshot-800.webp 800w, /images/headshot.webp 1024w"
					sizes="(max-width: 900px) 88vw, 32vw"
					alt="Illustrated portrait of Abhishek Kumar, Product Manager in Dublin, Ireland"
					width="1024"
					height="1024"
					loading="eager"
					fetchpriority="high"
				/>
			</div>
			<div class="portrait-note">
				<span class="mono">Dublin, Ireland</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		display: flex;
		min-height: 560px;
		align-items: center;
		padding-block: clamp(56px, 8vw, 96px);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
		align-items: center;
		gap: clamp(64px, 9vw, 144px);
	}

	.hero-copy h1 {
		max-width: 780px;
		margin-bottom: 28px;
		letter-spacing: -0.055em;
		overflow-wrap: anywhere;
	}

	.hero-copy h1 span {
		display: block;
	}

	.hero-copy h1 span {
		font-size: clamp(3rem, 4.8vw, 4.75rem);
	}

	.hero-copy p {
		max-width: 48ch;
		margin-bottom: 38px;
		color: var(--muted);
		font-size: clamp(1.05rem, 1.6vw, 1.3rem);
		line-height: 1.55;
		overflow-wrap: anywhere;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.portrait-wrap {
		position: relative;
		align-self: end;
		width: min(100%, 360px);
		justify-self: end;
	}

	.portrait-frame {
		position: relative;
		overflow: hidden;
		aspect-ratio: 4 / 5;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface-soft);
		box-shadow: var(--shadow);
		transform: perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
		transform-style: preserve-3d;
		transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
		will-change: transform;
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
		transform: translateZ(8px) scale(1.01);
	}

	.portrait-note {
		display: grid;
		gap: 4px;
		padding-top: 16px;
		color: var(--muted);
		font-size: 0.82rem;
	}

	.portrait-note .mono {
		color: var(--ink);
		font-size: 0.74rem;
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

		.hero-copy {
			min-width: 0;
		}

		.hero-copy h1 span {
			font-size: clamp(2.75rem, 6.2vw, 4.25rem);
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

		.hero-copy h1 span {
			font-size: clamp(1.8rem, 8vw, 2.5rem);
		}

		.hero-copy p {
			max-width: 100%;
			font-size: 1rem;
		}

		.hero-actions {
			display: grid;
		}

		.portrait-wrap {
			width: 88%;
		}
	}
</style>
