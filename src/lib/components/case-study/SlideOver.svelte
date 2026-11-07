<script lang="ts">
	import { browser } from '$app/environment';
	import { tick } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let open = false;
	export let kicker = '';
	export let title: string;

	let panel: HTMLElement | undefined;
	let closeButton: HTMLButtonElement | undefined;
	let returnFocus: HTMLElement | null = null;
	let wasOpen = false;

	const titleId = 'slide-over-title';
	$: reduced = browser && matchMedia('(prefers-reduced-motion: reduce)').matches;
	$: if (browser) syncOpen(open);

	async function syncOpen(isOpen: boolean) {
		if (isOpen === wasOpen) return;
		wasOpen = isOpen;
		if (isOpen) {
			returnFocus = document.activeElement as HTMLElement | null;
			const gap = window.innerWidth - document.documentElement.clientWidth;
			document.documentElement.style.overflow = 'hidden';
			if (gap > 0) document.documentElement.style.paddingRight = `${gap}px`;
			await tick();
			closeButton?.focus();
		} else {
			document.documentElement.style.overflow = '';
			document.documentElement.style.paddingRight = '';
			returnFocus?.focus();
		}
	}

	function close() {
		open = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (!open) return;
		if (event.key === 'Escape') {
			event.preventDefault();
			close();
			return;
		}
		if (event.key !== 'Tab' || !panel) return;
		const focusable = panel.querySelectorAll<HTMLElement>(
			'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
		);
		if (!focusable.length) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}
</script>

<svelte:window on:keydown={onKeydown} />

{#if open}
	<div class="slide-root">
		<button
			type="button"
			class="backdrop"
			aria-label="Close {title}"
			tabindex="-1"
			on:click={close}
			transition:fade={{ duration: reduced ? 0 : 200 }}
		></button>
		<div
			bind:this={panel}
			class="panel"
			role="dialog"
			aria-modal="true"
			aria-labelledby={titleId}
			transition:fly={{ x: 80, duration: reduced ? 0 : 280, opacity: 0.4 }}
		>
			<header>
				<div>
					{#if kicker}<span class="mono">{kicker}</span>{/if}
					<h2 id={titleId}>{title}</h2>
				</div>
				<button bind:this={closeButton} type="button" class="close" on:click={close}>
					<span class="sr-only">Close</span>
					<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
						<path
							d="M6 6l12 12M18 6L6 18"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
						/>
					</svg>
				</button>
			</header>
			<div class="content">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.slide-root {
		position: fixed;
		inset: 0;
		z-index: 80;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		width: 100%;
		border: 0;
		background: rgb(17 20 25 / 0.5);
		cursor: pointer;
	}

	.panel {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		width: min(620px, 100vw);
		border-left: 1px solid var(--line);
		background: var(--surface);
		box-shadow: var(--shadow);
	}

	header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 20px;
		padding: 26px clamp(22px, 4vw, 36px) 20px;
		border-bottom: 1px solid var(--line);
	}

	header span {
		display: block;
		margin-bottom: 8px;
		color: var(--accent-strong);
		font-size: 0.72rem;
		text-transform: uppercase;
	}

	h2 {
		margin: 0;
		font-size: clamp(1.5rem, 3vw, 1.9rem);
		letter-spacing: -0.03em;
	}

	.close {
		display: grid;
		flex: none;
		place-items: center;
		width: 40px;
		height: 40px;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--surface);
		color: var(--ink);
		cursor: pointer;
		transition:
			background-color 160ms ease,
			border-color 160ms ease;
	}

	.close:hover {
		border-color: var(--accent);
		background: var(--accent-soft);
	}

	.content {
		flex: 1;
		overflow-y: auto;
		overscroll-behavior: contain;
		padding: 8px clamp(22px, 4vw, 36px) 48px;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.panel {
			border-left: 0;
		}
	}
</style>
