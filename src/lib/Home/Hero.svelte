<!-- <script lang="ts">
	import { onMount } from 'svelte';
	onMount(async () => {
		var i = 0;
		var codeBlurb = '\tconsultant, engineer, product enthusiast, traveller';

		function typeWriter() {
			if (i < codeBlurb.length) {
				document.getElementById('typewriter')!.innerHTML += codeBlurb.charAt(i);
				i++;
				setTimeout(typeWriter, 50);
			}
		}
		typeWriter();
	});
</script>

<div class="hero min-h-screen">
	<div
		class="hero-content flex-col max-w-[100vw] w-full justify-start lg:flex-row lg:max-w-screen-xl"
	>
		<div class="img-container">
			<img
				src="/images/headshot.webp"
				class="max-w-md rounded-lg lg:mr-10"
				alt="Drawing of Abhishek Kumar's headshot"
			/>
		</div>
		<div>
			<h1
				class="text-5xl font-bold bg-gradient-to-r bg-clip-text leading-normal text-transparent from-[#048eaa] via-blue-500 to-[#048eaa] animate-text text-center"
			>
				Hi, I'm Abhishek!
			</h1>
			<br />
			<div class="lg:min-w-[400px] max-w-[110dvw] mockup-code">
				<pre data-prefix="1"><code
						><span class="text-info">traits</span>{'[] '}<span class="text-secondary">abhishzk</span
						>{' ='}</code
					></pre>
				<pre data-prefix="2"><code>{'{'}</code></pre>
				<pre data-prefix="3"><code id="typewriter" class="text-success" /></pre>
				<pre data-prefix="4"><code>{'}'}</code></pre>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero:hover .img-container img {
		animation: moveAlternate 3s ease-in-out infinite alternate;
	}

	@keyframes moveAlternate {
		0%,
		100% {
			transform: translate(-10px, -10px);
		}
		25%,
		75% {
			transform: translate(10px, 10px);
		}
		50% {
			transform: translate(-10px, 10px);
		}
	}
</style> -->
<script lang="ts">
	import { onMount } from 'svelte';

	let heroContainer: HTMLDivElement | null = null;

	onMount(() => {
		let i = 0;
		const codeBlurb = '\tconsultant, engineer, product enthusiast, traveller';
		let timeoutId: ReturnType<typeof setTimeout>;

		function typeWriter() {
			if (i < codeBlurb.length) {
				const typewriterElement = document.getElementById('typewriter');
				if (typewriterElement) {
					typewriterElement.innerHTML += codeBlurb.charAt(i);
					i++;
					timeoutId = setTimeout(typeWriter, 50);
				}
			}
		}

		typeWriter();
	});

	function handleMouseMove(event: MouseEvent) {
		if (heroContainer) {
			const imgContainer = heroContainer.querySelector('.img-container');
			if (imgContainer) {
				const rect = heroContainer.getBoundingClientRect();
				const offsetX = event.clientX - rect.left;
				const offsetY = event.clientY - rect.top;

				// Calculate the percentage of the cursor's position relative to the container's dimensions
				const percentX = (offsetX / rect.width) * 2 - 1; // Ranges from -1 to 1
				const percentY = (offsetY / rect.height) * 2 - 1; // Ranges from -1 to 1

				const maxOffset = 10; // Maximum offset in any direction

				const translateX = percentX * maxOffset;
				const translateY = percentY * maxOffset;

				const imgElement = imgContainer.querySelector('img');
				if (imgElement) {
					imgElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
				}
			}
		}
	}

	function resetTransform() {
		const imgElement = heroContainer?.querySelector('.img-container img');
		if (imgElement) {
			imgElement.style.transform = 'translate(0, 0)';
		}
	}
</script>

<div
	class="hero min-h-screen"
	bind:this={heroContainer}
	on:mousemove={handleMouseMove}
	on:mouseleave={resetTransform}
>
	<div
		class="hero-content flex-col max-w-[100vw] w-full justify-start lg:flex-row lg:max-w-screen-xl"
	>
		<div class="img-container">
			<img
				src="/images/headshot.webp"
				class="max-w-md rounded-lg lg:mr-10"
				alt="Drawing of Abhishek Kumar's headshot"
			/>
		</div>
		<div>
			<h1
				class="text-5xl font-bold bg-gradient-to-r bg-clip-text leading-normal text-transparent from-[#048eaa] via-blue-500 to-[#048eaa] animate-text text-center"
			>
				Hi, I'm Abhishek!
			</h1>
			<br />
			<div class="lg:min-w-[400px] max-w-[110dvw] mockup-code">
				<pre data-prefix="1"><code
						><span class="text-info">traits</span>{'[] '}<span class="text-secondary">abhishzk</span
						>{' ='}</code
					></pre>
				<pre data-prefix="2"><code>{'{'}</code></pre>
				<pre data-prefix="3"><code id="typewriter" class="text-success" /></pre>
				<pre data-prefix="4"><code>{'}'}</code></pre>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.img-container img {
		transition: transform 0.07s ease;
	}
</style>
