<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import { trackEvent } from '$lib/analytics';
	import { externalLinks } from '$lib/data/portfolio';

	export let home = false;
	let menuOpen = false;
	let menuButton: HTMLButtonElement;

	const links = [
		{ label: 'Work', href: home ? '#work' : '/#work' },
		{ label: 'Approach', href: home ? '#approach' : '/#approach' },
		{ label: 'Experience', href: home ? '#experience' : '/#experience' },
		{ label: 'About', href: home ? '#about' : '/#about' }
	];

	function closeMenu() {
		menuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Escape' || !menuOpen) return;
		closeMenu();
		menuButton?.focus();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="site-header">
	<div class="header-inner">
		<a class="wordmark" href="/" on:click={closeMenu} aria-label="Abhishek Kumar home">
			<img class="mark" src="/images/ak-mark.svg" alt="" width="38" height="29" />
			<span>Abhishek Kumar</span>
		</a>

		<button
			bind:this={menuButton}
			class="menu-button"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="site-navigation"
			on:click={() => (menuOpen = !menuOpen)}
		>
			{menuOpen ? 'Close' : 'Menu'}
		</button>

		<nav id="site-navigation" class:open={menuOpen} aria-label="Primary navigation">
			{#each links as link}
				<a href={link.href} on:click={closeMenu}>{link.label}</a>
			{/each}
			<a
				class="header-cta"
				href={externalLinks.email.href}
				on:click={() => {
					trackEvent('contact_click', { placement: 'navigation' });
					closeMenu();
				}}
			>
				Start a conversation
			</a>
			<ThemeToggle />
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		border-bottom: 1px solid var(--line);
		background: var(--header);
	}

	.header-inner {
		display: flex;
		width: min(calc(100% - 40px), var(--content));
		height: 68px;
		align-items: center;
		justify-content: space-between;
		margin-inline: auto;
	}

	.wordmark {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 0.88rem;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.mark {
		width: 38px;
		height: 29px;
		flex: 0 0 auto;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	nav > a:not(.header-cta) {
		color: var(--muted);
		font-size: 0.88rem;
		font-weight: 600;
		transition: color 180ms ease;
	}

	nav > a:hover {
		color: var(--accent-strong);
	}

	.header-cta {
		display: inline-flex;
		height: 38px;
		align-items: center;
		padding: 0 14px;
		border-radius: var(--radius);
		background: var(--accent);
		color: #ffffff;
		font-size: 0.78rem;
		font-weight: 700;
		white-space: nowrap;
	}

	:global(:root[data-theme='dark']) .header-cta {
		color: #0c1220;
	}

	.menu-button {
		display: none;
		border: 0;
		background: transparent;
		color: var(--ink);
		cursor: pointer;
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	@media (max-width: 900px) {
		.header-inner {
			position: relative;
			width: min(calc(100% - 32px), var(--content));
		}

		.menu-button {
			display: block;
		}

		nav {
			position: absolute;
			top: 68px;
			left: -16px;
			right: -16px;
			display: none;
			align-items: stretch;
			padding: 20px 16px 24px;
			border-bottom: 1px solid var(--line);
			background: var(--page);
			box-shadow: var(--shadow);
		}

		nav.open {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
		}

		nav > a:not(.header-cta) {
			display: flex;
			min-height: 44px;
			align-items: center;
			padding: 0 12px;
			border: 1px solid var(--line);
			border-radius: var(--radius);
			background: var(--surface);
		}

		.header-cta {
			height: 44px;
			justify-content: center;
		}
	}

	@media (max-width: 520px) {
		.wordmark {
			gap: 8px;
			font-size: 0.78rem;
		}

		.mark {
			width: 34px;
			height: 26px;
		}

		nav.open {
			grid-template-columns: 1fr;
		}
	}
</style>
