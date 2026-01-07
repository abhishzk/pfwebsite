<script lang="ts">
	let copyButtonText = 'Copy';

	function copyEmail() {
		navigator.clipboard.writeText('abhishzk.ie@gmail.com');
		copyButtonText = 'Copied!';
		setTimeout(() => {
			copyButtonText = 'Copy';
		}, 2000);
	}
</script>

<footer
	class="footer items-center p-4 bg-neutral text-neutral-content justify-between grid-flow-col mt-12"
>
	<div class="items-center grid-flow-col">
		<img width="24" height="24" src="favicon.png" alt="Website logo" class="grayscale" />
		<p>Abhishek Kumar</p>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<label for="mail" class="cursor-pointer"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><rect x="2" y="4" width="20" height="16" rx="2" /><path
					d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				/></svg
			></label
		>

		<input type="checkbox" id="mail" class="modal-toggle" />
		<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h3 class="font-bold text-lg mb-4">Get in Touch</h3>
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
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
						>
							<rect x="2" y="4" width="20" height="16" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
						<span class="font-mono text-sm">abhishzk.ie@gmail.com</span>
						<button class="btn btn-sm btn-ghost ml-auto" on:click={copyEmail}>
							{copyButtonText}
						</button>
					</div>
					<a
						href="mailto:abhishzk.ie@gmail.com?subject=Hi Abhishek, I'm interested in your work"
						class="btn btn-primary w-full"
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
						>
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
						Send Email
					</a>
				</div>
				<div class="modal-action">
					<label for="mail" class="btn">Close</label>
				</div>
			</div>
			<label class="modal-backdrop" for="mail">Close</label>
		</div>
		<a href="https://github.com/abhishzk"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path
					d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
				/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
			>
		</a>
		<a href="https://linkedin.com/in/abhishzk"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path
					d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
				/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
			></a
		>
		<a
			href="/abhishek-kumar-resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="View resume PDF in new tab"
			class="cursor-pointer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
				/>
			</svg>
		</a>
	</div>
</footer>
