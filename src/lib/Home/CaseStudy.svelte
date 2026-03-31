<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import casestudies from '../Data/casestudies.json?raw';

	interface CaseStudy {
		title: string;
		description: string;
		tags: string[];
		role: string;
		timeline: string;
		image: string;
		link: string;
	}

	let CaseStudies: CaseStudy[] = JSON.parse(casestudies);

	onMount(async () => {
		register();
		const swiperEl = <any>document.querySelector('swiper-container.cs-swiper');
		const swiperParams = {
			slidesPerView: 'auto',
			loop: true,
			spaceBetween: 24,
			speed: 600,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			pagination: {
				dynamicBullets: true
			}
		};
		(<any>Object).assign(swiperEl, swiperParams);
		swiperEl!.initialize();
	});
</script>

<div class="flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto">
	<a class="inline-flex items-center justify-left w-full my-12" href="#casestudy" id="casestudy">
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
			><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path
				d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
			/></svg
		>
		<h1 class="text-4xl ml-2">Case Study</h1>
	</a>

	<div
		class="flex flex-wrap items-center justify-center m-2 overflow-x-hidden w-full lg:max-w-screen-xl"
	>
		<swiper-container class="cs-swiper" init="false">
			{#each CaseStudies as study, i}
				<swiper-slide
					id="cs-slide{i}"
					class="cs-slide card card-compact bg-base-100 shadow-sm min-h-[450px]"
				>
					<figure class="overflow-hidden rounded-t-2xl">
						<a
							href={study.link}
							target="_blank"
							rel="noopener noreferrer"
							class="block min-h-[200px] max-h-[200px] min-w-full"
						>
							<img
								class="min-h-[200px] max-h-[200px] min-w-full object-cover object-top"
								src={study.image}
								alt={study.title}
							/>
						</a>
					</figure>

					<div class="card-body min-h-[250px] max-h-[250px]">
						<h2 class="card-title text-base leading-snug">{study.title}</h2>
						<p class="text-sm opacity-70 line-clamp-3">{study.description}</p>
						<div class="flex flex-wrap gap-1 mt-1">
							{#each study.tags as tag}
								<span class="badge badge-sm badge-neutral">{tag}</span>
							{/each}
						</div>
						<div class="card-actions items-center justify-between mt-auto">
							<span class="text-xs opacity-50">{study.role} · {study.timeline}</span>
							<a class="btn btn-sm" href={study.link} target="_blank" rel="noopener noreferrer"
								>Read</a
							>
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>

<style>
	.cs-slide {
		width: 520px;
		min-height: 450px;
	}
</style>
