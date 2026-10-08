<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudyHero from '$lib/components/case-study/CaseStudyHero.svelte';
	import CaseStudySection from '$lib/components/case-study/CaseStudySection.svelte';
	import DecisionBlock from '$lib/components/case-study/DecisionBlock.svelte';
	import CaseStudyNav from '$lib/components/case-study/CaseStudyNav.svelte';
	import MediaFigure from '$lib/components/case-study/MediaFigure.svelte';
	import { getCaseStudy, externalLinks } from '$lib/data/portfolio';
	import { trackEvent } from '$lib/analytics';

	const study = getCaseStudy('container-loading');
	const prototype = externalLinks.containerPrototype;
	const description =
		'A concept prototype that checks pallets before they enter an export container and alerts the shift lead while the load can still change.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description,
		url: 'https://abhishzk.com/work/container-loading',
		image: 'https://abhishzk.com/images/social/container-loading.png',
		author: { '@type': 'Person', name: 'Abhishek Kumar', url: 'https://abhishzk.com' },
		dateCreated: '2026-09-30',
		dateModified: '2026-10-08',
		learningResourceType: 'Product management case study',
		about: ['Product Management', 'Computer Vision', 'Logistics', 'Prototyping']
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>Container Loading Concept Case Study | Abhishek Kumar</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/work/container-loading" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{study.title} | Product Case Study" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/work/container-loading" />
	<meta property="og:image" content="https://abhishzk.com/images/social/container-loading.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Container loading concept case study by Abhishek Kumar" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{study.title} | Product Case Study" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://abhishzk.com/images/social/container-loading.png" />
	<meta name="twitter:image:alt" content="Container loading concept case study by Abhishek Kumar" />
	{@html structuredDataHtml}
</svelte:head>

<Header />
<main id="main-content">
	<CaseStudyHero {study} />

	<CaseStudySection title="The customer asked for an alert nobody could act on.">
		<p>
			This started as a product-manager take-home for an industrial computer-vision company. The
			customer, an automotive parts exporter, believed its containers left the plant 30% empty. The
			VP of Operations wanted a real-time alert when a container was going out under-filled.
		</p>
		<p>
			The logistics manager pushed back: the doors are sealed and the driver is moving about four
			minutes after the last pallet goes in. In my first submission I agreed with him and set the
			alert aside, focusing instead on the shipping export.
		</p>
		<DecisionBlock title="The real question was when to alert, not whether.">
			<p>
				Revisiting it, I rebuilt the exercise around a different reading. An alert at the end of
				loading has nothing behind it. The same alert an hour earlier, while the pallet is still
				outside the door, gives the shift lead a decision to make.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection title="The data could not answer the question it was asked." tone="soft">
		<p>
			The brief's three-week shipping export covered 83 containers. Weights were recorded. The
			declared volume was not measured: it was pallet count multiplied by one fixed figure per
			product family, and the brief confirmed nobody had ever measured actual cube.
		</p>
		<div class="finding-grid">
			<article>
				<strong class="mono">36.6%</strong>
				<span>Nominal volume gap across the fleet. Pallet-master volume, not measured void.</span>
			</article>
			<article>
				<strong class="mono">64 / 83</strong>
				<span
					>Containers at 90% or more of payload. Weight likely explains much visible headroom.</span
				>
			</article>
			<article>
				<strong class="mono">19 / 83</strong>
				<span>Light, high-cube loads where measured space might be recoverable.</span>
			</article>
		</div>
		<MediaFigure
			src="/images/casestudies/container-loading-fleet.jpg"
			alt="Fleet overview separating nominal volume from recorded weight across 83 export containers"
			width={1440}
			height={900}
			caption="Fleet baseline calculated from the real shipping export, alongside door status. Only the D09 load activity is simulated."
		/>
		<DecisionBlock title="Separate what the data shows from what only measurement can show.">
			<p>
				The export could tell the VP that most visible space was likely weight-bound. It could not
				tell him how much space was physically empty or avoidable. That gap defined the product.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection title="Move the check to where a decision still exists.">
		<p>
			The site's existing safety cameras already faced the staging lane, not the container interior.
			The brief also noted that the shipping system builds a load plan the day before, and the shift
			lead overrides it by pulling the next thing that fits. So the product works with that habit
			rather than against it.
		</p>
		<div class="pipeline" aria-label="Concept workflow">
			<span>Measure in staging</span><b aria-hidden="true">→</b><span>Replay load plan</span><b
				aria-hidden="true">→</b
			><span>Advise early</span><b aria-hidden="true">→</b><span>Hold at the door</span><b
				aria-hidden="true">→</b
			><span>Shift lead decides</span>
		</div>
		<p>
			After every pallet, the prototype replays the remaining load plan under a simple stacking rule
			and tries pulling each reachable pallet forward. It shows a known fix as an advisory straight
			away, and only blocks a pallet at the door when waiting one more pallet would lose the fix.
		</p>
		<DecisionBlock title="Interrupt the crew only when it changes the outcome.">
			<p>
				A change that would only save a stack position is logged without interrupting anyone. A VP
				escalation is recorded only if a pallet is still projected to be left behind and nobody on
				the dock can fix it.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection title="Designing for trust before accuracy." tone="soft">
		<p>
			A recommendation from a camera is only useful if the shift lead trusts it. The prototype
			treats uncertainty as part of the product, not an edge case.
		</p>
		<div class="trust-grid">
			<article>
				<strong>Abstain on weak readings</strong>
				<span
					>A height reading below the confidence bar is withheld; the staging measurement stands.</span
				>
			</article>
			<article>
				<strong>No recommendation without identity</strong>
				<span>A pallet whose label was not read is excluded until it is scanned.</span>
			</article>
			<article>
				<strong>Overrides are signals</strong>
				<span
					>The shift lead can override with a reason. Repeated overrides mean the rule needs review.</span
				>
			</article>
			<article>
				<strong>Every claim is tagged</strong>
				<span>Evidence is marked real, specification, inferred or simulated, on every screen.</span>
			</article>
		</div>
		<MediaFigure
			src="/images/casestudies/container-loading-decision.jpg"
			alt="Decision moment showing a held pallet in the scan zone, previews inside the container, and simulated comparison cards"
			width={1440}
			height={900}
			caption="The decision moment. The held pallet is still outside the container; the comparison and outcome are explicitly simulated."
		/>
		<p class="prototype-link">
			<a
				class="button button-primary"
				href={prototype.href}
				target="_blank"
				rel="noopener"
				on:click={() => trackEvent(prototype.event, { case_study: study.slug })}
			>
				{prototype.label} <span aria-hidden="true">↗</span>
			</a>
		</p>
	</CaseStudySection>

	<CaseStudySection title="Sizing it honestly.">
		<p>
			Sequencing alone is small. As an illustrative scenario, if every volume-bound export rolled
			one pallet that sequencing could have saved, that would be about nine containers and €8–10k a
			year. No paid container has been shown saved.
		</p>
		<p>
			The case for building it is different: a screen the shift lead uses on every load leaves
			measured pallet heights behind, which is data the customer has never had. Container-count
			decisions also depend on floor positions, stacking rules and rates, so measured cube is one
			input, not the answer.
		</p>
		<h3>What a pilot has to prove</h3>
		<ul>
			<li>Camera height error against tape, well inside the decision margins.</li>
			<li>Access to the load plan and a link between shipments and physical containers.</li>
			<li>Packaging approval for stacking the product families involved.</li>
			<li>How often the load plan actually loses positions or leaves pallets behind.</li>
		</ul>
	</CaseStudySection>

	<CaseStudySection title="What I learned, and what I would change." tone="soft">
		<h3>Interrogate the request, then return to it</h3>
		<p>
			I was right that an end-of-load alert had no action behind it, and wrong to stop there. The
			customer's request was pointing at a real need; the timing was the problem.
		</p>
		<h3>Label simulation as boldly as results</h3>
		<p>
			Early reviewers understood the idea but remembered the simulated 38-of-38 outcome as if it had
			happened. Banners, labels on every result and a persistent counterfactual note fixed what
			small disclaimers could not.
		</p>
		<h3>Next experiment</h3>
		<p>
			Measure a week of staged pallets against tape and the real load plan. That single dataset
			would show whether the camera is accurate enough and whether the sequencing problem occurs
			often enough to matter.
		</p>
	</CaseStudySection>

	<CaseStudyNav current="container-loading" />
	<Contact />
</main>
<Footer />

<style>
	.finding-grid,
	.trust-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		margin-block: 34px;
	}

	.trust-grid {
		grid-template-columns: 1fr 1fr;
	}

	.finding-grid article,
	.trust-grid article {
		display: grid;
		gap: 8px;
		padding: 22px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.finding-grid strong {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.trust-grid strong {
		font-size: 0.9rem;
	}

	.finding-grid span,
	.trust-grid span {
		color: var(--muted);
		font-size: 0.8rem;
		line-height: 1.5;
	}

	.pipeline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 24px;
		margin-block: 34px;
		border-radius: var(--radius);
		background: var(--ink);
		color: var(--page);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.76rem;
	}

	.pipeline b {
		opacity: 0.35;
	}

	.prototype-link {
		margin-top: 8px;
	}

	@media (max-width: 650px) {
		.finding-grid,
		.trust-grid {
			grid-template-columns: 1fr;
		}

		.pipeline {
			align-items: stretch;
			flex-direction: column;
			text-align: center;
		}

		.pipeline b {
			transform: rotate(90deg);
		}
	}
</style>
