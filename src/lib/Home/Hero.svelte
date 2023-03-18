<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		var i = 0;
		var codeBlurb = '\tdeveloper, gamer, traveller, techie';

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
		<img
			src="/images/headshot.webp"
			class="max-w-md rounded-lg lg:mr-10"
			alt="Drawing of Abhishek Kumar's headshot"
		/>
		<div>
			<h1
				class="text-5xl font-bold bg-gradient-to-r bg-clip-text leading-normal text-transparent from-[#048eaa] via-blue-500 to-[#048eaa] animate-text text-center"
			>
				Hi, I'm Abhishek!
			</h1>
			<br />
			<div class="lg:min-w-[400px] max-w-[110dvw] mockup-code">
				<pre data-prefix="1"><code
						><span class="text-info">traits</span>{'[] '}<span class="text-secondary"
							>abhishzk</span
						>{' ='}</code
					></pre>
				<pre data-prefix="2"><code>{'{'}</code></pre>
				<pre data-prefix="3"><code id="typewriter" class="text-success" /></pre>
				<pre data-prefix="4"><code>{'}'}</code></pre>
			</div>
		</div>
	</div>
</div>
