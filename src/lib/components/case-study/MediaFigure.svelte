<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
	export let width: number;
	export let height: number;
	export let tone: 'light' | 'dark' = 'light';
</script>

<figure class:dark={tone === 'dark'}>
	<div class="media-frame">
		<img {src} {alt} {width} {height} loading="lazy" decoding="async" />
	</div>
	<figcaption>{caption}</figcaption>
</figure>

<style>
	figure {
		margin: 42px 0;
	}

	.media-frame {
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
		box-shadow: var(--shadow);
	}

	figure.dark .media-frame {
		background: #111419;
	}

	img {
		width: 100%;
		height: auto;
	}

	figcaption {
		max-width: 68ch;
		margin-top: 12px;
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.66rem;
		line-height: 1.55;
	}
</style>
