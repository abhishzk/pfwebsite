<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import projects from '../Data/projects.json?raw';

	interface Project {
		link: string;
		title: string;
		image: string;
		description: string;
	}
	let Projects: Project[] = JSON.parse(projects);

	// Preferably, we'd want to pass this directly as parameters
	// But passing as parameters results in a number of run-time errors
	onMount(async () => {
		register();
		const swiperEl = <any>document.querySelector('swiper-container');
		const swiperParams = {
			slidesPerView: 1,
			rewind: true,
			spaceBetween: 20,
			autoplay: {
				delay: 3000
			},
			pagination: {
				dynamicBullets: true
			},
			breakpoints: {
				640: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			}
		};
		(<any>Object).assign(swiperEl, swiperParams);
		swiperEl!.initialize();
	});
</script>

<div class="flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto">
	<a class="inline-flex items-center justify-left w-full my-12" href="#projects" id="projects">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" /><path
				d="M10 19v-3.96 3.15"
			/><path d="M7 19h5" /><rect x="16" y="12" width="6" height="10" rx="2" /></svg
		>

		<h1 class="text-4xl ml-2">Projects</h1>
	</a>

	<div
		class="flex flex-wrap items-center justify-center m-2 overflow-x-hidden w-full lg:max-w-screen-xl"
	>
		<swiper-container init="false">
			{#each Projects as project, i}
				<swiper-slide
					id="slide{i}"
					class="project card card-compact w-96 bg-base-100 min-h-[450px]"
				>
					<figure>
						<a href={project.link} class="max-h-[200px] min-h-[200px] min-w-full object-cover">
							<img
								class="max-h-[200px] min-h-[200px] min-w-full object-cover rounded-box"
								src={project.image}
								alt="Project screenshot"
							/>
						</a>
					</figure>

					<div class="card-body max-h-[150px] min-h-[150px]">
						<h2 class="card-title">{project.title}</h2>
						<p class="max-h-[75px] min-h-[75px]">
							{project.description}
						</p>
						<div class="card-actions justify-end">
							<a class="btn" href={project.link}>View</a>
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>
