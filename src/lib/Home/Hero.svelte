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

	const resumePath = '/resume.pdf';

	function handleViewResume() {
		// Click tracking hook - can be extended with analytics
		window.open(resumePath, '_blank', 'noopener,noreferrer');
	}

	function handleDownloadResume(event: MouseEvent) {
		// Click tracking hook - can be extended with analytics
		// The download will happen via the anchor's download attribute
		// This function is here for potential tracking
	}

	onMount(() => {
		let i = 0;
		const codeBlurb = '\tProduct Management, Engineering, Economics, Reader...';
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
		const imgElement = heroContainer?.querySelector('.img-container img') as HTMLImageElement | null;
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
			<div class="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
				<button
					on:click={handleViewResume}
					class="btn btn-primary"
					aria-label="View resume PDF in new tab"
					type="button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2"
						aria-hidden="true"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="16" y1="13" x2="8" y2="13"></line>
						<line x1="16" y1="17" x2="8" y2="17"></line>
						<polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					View Resume
				</button>
				<a
					href={resumePath}
					download="Abhishek_Kumar_Resume.pdf"
					on:click={handleDownloadResume}
					class="btn btn-outline"
					aria-label="Download resume PDF file"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2"
						aria-hidden="true"
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
						<polyline points="7 10 12 15 17 10"></polyline>
						<line x1="12" y1="15" x2="12" y2="3"></line>
					</svg>
					Download Resume (PDF)
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.img-container img {
		transition: transform 0.07s ease;
	}
</style>
