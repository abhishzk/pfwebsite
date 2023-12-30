<script lang="ts">
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
      animation: moveAlternate 1s ease-in-out infinite alternate;
    }

    @keyframes moveAlternate {
      0%, 100% {
        transform: translate(-10px, -10px);
      }
      25%, 75% {
        transform: translate(10px, 10px);
      }
      50% {
        transform: translate(-10px, 10px);
    }
  }
</style>