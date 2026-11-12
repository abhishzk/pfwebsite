<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudyHero from '$lib/components/case-study/CaseStudyHero.svelte';
	import CaseStudySection from '$lib/components/case-study/CaseStudySection.svelte';
	import DecisionBlock from '$lib/components/case-study/DecisionBlock.svelte';
	import CaseStudyNav from '$lib/components/case-study/CaseStudyNav.svelte';
	import MediaFigure from '$lib/components/case-study/MediaFigure.svelte';
	import EngineeringNote from '$lib/components/case-study/EngineeringNote.svelte';
	import { getCaseStudy, externalLinks } from '$lib/data/portfolio';
	import { trackEvent } from '$lib/analytics';

	const study = getCaseStudy('container-loading');
	const prototype = externalLinks.containerPrototype;
	const base = '/prototypes/container-loading/';
	const views = [
		{
			name: 'Container demo',
			href: `${base}index.html`,
			text: 'One container, one decision. Watch 38 pallets load, then accept or override the recommendation.'
		},
		{
			name: 'Enterprise',
			href: `${base}enterprise.html`,
			text: 'The site view: overview, live load for any of the 83 containers, decisions, evidence and report.'
		},
		{
			name: 'Fleet table',
			href: `${base}fleet-simulation.html`,
			text: 'Every container sequenced under the same rule. Filter by product family or outcome.'
		},
		{
			name: 'Fleet analysis',
			href: `${base}fleet-analysis.html`,
			text: 'Payload against declared volume for all 83 loads: why most visible space is weight.'
		},
		{
			name: 'Fleet live',
			href: `${base}fleet-live.html`,
			text: 'Pick any container and watch the loading algorithm run pallet by pallet.'
		}
	];
	let noteOpen = false;
	function openNote() {
		noteOpen = true;
		trackEvent('engineering_note_open', { case_study: study.slug });
	}
	const description =
		'A self-initiated product study: check pallets before they enter an export container and alert the shift lead while the load can still change. Five linked interactive views, real shipment totals, simulated pallet data.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description,
		url: 'https://abhishzk.com/work/container-loading',
		image: 'https://abhishzk.com/images/social/container-loading.png',
		author: {
			'@id': 'https://abhishzk.com/#person',
			'@type': 'Person',
			name: 'Abhishek Kumar',
			alternateName: 'abhishzk',
			jobTitle: 'Product Manager',
			url: 'https://abhishzk.com',
			sameAs: ['https://www.linkedin.com/in/abhishzk/']
		},
		dateCreated: '2026-09-30',
		dateModified: '2026-11-07',
		learningResourceType: 'Product management case study',
		about: [
			'Product Management',
			'Product Discovery',
			'Computer Vision',
			'Logistics',
			'Prototyping'
		]
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>Container Loading Product Case Study | Abhishek Kumar</title>
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

	<CaseStudySection title="In short." tone="soft">
		<dl class="brief">
			<div>
				<dt>The problem</dt>
				<dd>
					An automotive parts exporter believed its shipping containers left the plant 30% empty and
					asked for an alert when one was under-filled.
				</dd>
			</div>
			<div>
				<dt>The catch</dt>
				<dd>
					By the time a container is full, the doors are sealed and the driver leaves within
					minutes. An alert then changes nothing.
				</dd>
			</div>
			<div>
				<dt>What I built</dt>
				<dd>
					A browser prototype that checks pallets while they still wait outside the container, and
					tells the shift lead which pallet to load first so that everything fits.
				</dd>
			</div>
			<div>
				<dt>What I found</dt>
				<dd>
					In the 83 real shipments, most of the visible empty space is really a weight limit. In my
					simulation, most loads that do not fit cannot be fixed by reordering at all: stacking
					rules matter more. Pallet heights are simulated, and the prototype says so on every
					screen.
				</dd>
			</div>
			<div>
				<dt>Try it</dt>
				<dd>
					Open the Container demo below, press <b>Watch the load</b>, and accept or override the
					recommendation when it appears.
				</dd>
			</div>
		</dl>
	</CaseStudySection>

	<CaseStudySection title="The customer asked for an alert nobody could act on.">
		<p>
			This is a self-directed product study, built from a customer brief I was given. The customer,
			an automotive parts exporter, believed its containers left the plant 30% empty. The VP of
			Operations wanted a real-time alert when a container was going out under-filled.
		</p>
		<p>
			The logistics manager pushed back: the doors are sealed and the driver is moving about four
			minutes after the last pallet goes in. My first answer agreed with him and set the alert
			aside, focusing instead on the shipping export.
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
			src="/images/casestudies/container-loading-analysis.webp"
			alt="Payload against declared volume for each of 83 export containers, coloured by product family. Most loads sit near the payload limit; a smaller group is light but nearly full by volume."
			width={1440}
			height={900}
			caption="Fleet analysis, built from the real shipping export. Each dot is one container; above the dashed line, weight likely explains the visible headroom."
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

	<CaseStudySection title="What I built." tone="soft">
		<p>
			The idea is one product. The prototype is five linked views of it, each answering a different
			question. They run in the browser with no install, and they share the same data, rules and
			wording.
		</p>
		<ul class="view-list">
			{#each views as view}
				<li>
					<a href={view.href} target="_blank" rel="noopener">
						<strong>{view.name}</strong>
						<span>{view.text}</span>
						<b class="mono" aria-hidden="true">Open ↗</b>
					</a>
				</li>
			{/each}
		</ul>
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
			<button class="button button-secondary" type="button" on:click={openNote}>
				Read the engineering note <span aria-hidden="true">→</span>
			</button>
		</p>
	</CaseStudySection>

	<CaseStudySection title="Two sequences, side by side.">
		<p>
			A recommendation is easier to trust when you can see what it would change. Live load in the
			Enterprise view has a switch for exactly that. <strong>Planned sequence</strong> shows the
			finished container if the load plan is followed as given: 37 of 38 ship, with one pallet left
			at the dock and three stack positions lost. <strong>Platform sequence</strong> shows it with the
			one recommended swap applied: 38 of 38, two positions lost. Same loader, same pallets; only the
			order differs.
		</p>
		<MediaFigure
			src="/images/casestudies/container-loading-sequences.webp"
			alt="The same container shown twice. Under the planned sequence 37 of 38 pallets ship; under the Platform sequence all 38 ship."
			width={1040}
			height={724}
			caption="Planned sequence above, Platform sequence below. Both are simulated, and the screen says so."
		/>
		<p>
			The stepping controls pause while a comparison is open, so a finished layout cannot be
			mistaken for progress. If the shift lead has already overridden the swap and the window has
			closed, the Platform view falls back to the plan instead of showing a fix nobody can make.
		</p>
		<DecisionBlock title="Show the alternative, not just the advice.">
			<p>
				A hold message asks the shift lead to take a claim on trust. Showing both finished
				containers lets them judge the claim themselves, and it keeps the product honest when the
				fix is no longer possible.
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
			src="/images/casestudies/container-loading-evidence.webp"
			alt="Evidence view listing every pallet event with identity and status tags, beside an observation record that labels real, simulated and assumed values."
			width={1440}
			height={900}
			caption="The evidence view. Every pallet event and every claim carries its source: real shipment totals against simulated heights, readings and outcomes."
		/>
	</CaseStudySection>

	<CaseStudySection title="From one container to 83." tone="soft">
		<p>
			One container shows the idea works. It does not show whether it generalises. So I ran every
			export container through the same loader and the same rule. Heights are generated per product
			family, so these results show how the rule behaves, not what happened on the dock.
		</p>
		<div class="finding-grid">
			<article>
				<strong class="mono">44 / 83</strong>
				<span>Fit outright under the assumed rules. No sequencing issue.</span>
			</article>
			<article>
				<strong class="mono">3 / 83</strong>
				<span>Rescued by a single pallet swap. All three are harness assemblies.</span>
			</article>
			<article>
				<strong class="mono">36 / 83</strong>
				<span>Leave pallets at the dock, and no single swap helps.</span>
			</article>
		</div>
		<p>
			The pattern is what mattered. <strong
				>35 of the 36 stuck loads are brake rotors and cast housings</strong
			>, the two families the brief's scoping answers say nothing should be stacked on. For them,
			pallet order is not the lever; stacking permission is. The 36th is a single sensor-module load
			of 43 pallets.
		</p>
		<MediaFigure
			src="/images/casestudies/container-loading-fleet-sim.webp"
			alt="Fleet table with one cast-housing container selected: 20 of 25 pallets planned, no improvement from any swap, and its generated pallet heights."
			width={1440}
			height={900}
			caption="The fleet table. Every container, the same rule. Selecting one shows its generated pallet heights and why it is stuck."
		/>
		<p>
			The real log shows only five of the 83 shipped partial. So either the packaging allows more
			than I assumed, or the loads are laid out differently from my model. Either way, the
			simulation turns a vague hunch about empty space into a specific question a pilot can test.
		</p>
		<DecisionBlock title="Let the simulation test my assumptions, not only my idea.">
			<p>
				The most useful result was the one that disagreed with the real log. It showed which
				assumption to measure first, which is a better first question for a pilot than whether the
				algorithm works.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection title="The economics, sized honestly.">
		<p>
			Sequencing alone is small. As an illustrative scenario, if every volume-bound export rolled
			one pallet that sequencing could have saved (about 1/38 of a container each), that would be
			about nine containers and €8–10k a year. No paid container has been shown saved. It also
			ignores the cost of a pallet left behind: slots are booked weekly per lane, and a missed
			sailing can cost three days.
		</p>
		<p>
			The case for building it is different: a screen the shift lead uses on every load leaves
			measured pallet heights behind, which is data the customer has never had. Container-count
			decisions also depend on floor positions, stacking rules and rates, so measured cube is one
			input, not the answer.
		</p>
	</CaseStudySection>

	<CaseStudySection title="From pilot to operational.">
		<p>
			Three people have to say yes, and they need different things. A product that only satisfies
			the one who holds the budget does not survive the dock.
		</p>
		<div class="role-grid">
			<article>
				<strong>VP of Operations</strong>
				<em>Budget holder. Wants a number and a decision.</em>
				<span>
					Pilot: a baseline of how often the plan loses positions or pallets, built from real load
					plans before any camera is installed, and a plain statement that most visible empty space
					is a weight limit. Operational: a monthly report of pallets protected, advice followed and
					overridden, and what it saved.
				</span>
			</article>
			<article>
				<strong>Plant Logistics Manager</strong>
				<em>Owns the dock. Sceptical, and right to be.</em>
				<span>
					Pilot: shadow mode first, so he sees the advice and where it is wrong without the crew
					acting on it. No alert at the sealing moment, and a hold only when it changes the outcome.
					Operational: he owns the stacking rules, and repeated overrides tell him which one to
					review.
				</span>
			</article>
			<article>
				<strong>Shift lead and loaders</strong>
				<em>Use it on every load.</em>
				<span>
					One message at the moment a decision still exists, an override in one tap with a reason,
					and no extra scanning beyond pallets whose label was not read.
				</span>
			</article>
		</div>
		<h3>Four phases, each ending in a decision</h3>
		<ol class="phase-list">
			<li>
				<b>Replay.</b> Run real load plans through the loader and tape-measure a sample of pallets.
				<span
					>Exit: the band where sequencing matters is large enough, and stacking rules are signed
					off.</span
				>
			</li>
			<li>
				<b>Shadow at one camera door.</b> Read pallets in staging, log advice, show it to nobody.
				<span
					>Exit: height error inside target, and the advice would have been right often enough.</span
				>
			</li>
			<li>
				<b>Live advisory at the same door.</b> The shift lead sees the advice, and every override is
				logged.
				<span
					>Exit: containers and pallets saved against the baseline, and the logistics manager agrees
					to expand.</span
				>
			</li>
			<li>
				<b>Operational.</b> More doors (cameras cover 2 of 6 export doors today), a live load-plan
				feed and the shipment-to-container link.
				<span>Exit: the monthly report is something the VP uses to decide.</span>
			</li>
		</ol>
		<h3>The ask</h3>
		<p>
			To start, I would ask the VP for three things: a covered export door and its shift lead for
			the pilot loads, a week of tape measurements plus the load plans for those shipments, and
			packaging and driver sign-off on stacking. The first two phases ask nothing of the crew,
			because no advice is shown until the logistics manager has watched it in shadow mode. If
			height error misses its target, the pilot stops there, and the replay still leaves the
			customer with a measured answer about their own loads.
		</p>
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
		<h3>Run the idea at fleet scale</h3>
		<p>
			One polished container hid the most important finding. Running all 83 showed that the loads
			that fail are almost all one kind of product, which moved the pilot's first question from
			sequencing to stacking rules.
		</p>
		<h3>Next experiment</h3>
		<p>
			Measure a week of staged pallets against tape and the real load plan. That single dataset
			would show whether the camera is accurate enough, whether the sequencing problem occurs often
			enough to matter, and whether rotors and housings really are single-high.
		</p>
		<p class="note-link">
			<button class="text-link" type="button" on:click={openNote}>
				What it would take to make this real: the engineering note <span aria-hidden="true">→</span>
			</button>
		</p>
	</CaseStudySection>

	<CaseStudyNav current="container-loading" />
	<Contact />
</main>
<Footer />
<EngineeringNote bind:open={noteOpen} />

<style>
	.role-grid {
		display: grid;
		gap: 12px;
		margin-block: 30px;
	}

	.role-grid article {
		display: grid;
		gap: 6px;
		padding: 22px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.role-grid strong {
		font-size: 1rem;
	}

	.role-grid em {
		color: var(--accent-strong);
		font-size: 0.82rem;
		font-style: normal;
	}

	.role-grid span {
		color: var(--muted);
		font-size: 0.92rem;
		line-height: 1.65;
	}

	:global(.case-body) ol.phase-list {
		list-style: decimal;
		display: grid;
		gap: 14px;
		padding-left: 22px;
	}

	.phase-list li::marker {
		color: var(--accent-strong);
		font-weight: 600;
	}

	.phase-list span {
		display: block;
		margin-top: 2px;
		color: var(--muted);
		font-size: 0.88rem;
	}

	.brief {
		display: grid;
		margin: 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--surface);
	}

	.brief div {
		display: grid;
		grid-template-columns: 130px 1fr;
		gap: 20px;
		padding: 18px 22px;
		border-bottom: 1px solid var(--line);
	}

	.brief div:last-child {
		border-bottom: 0;
	}

	.brief dt {
		padding-top: 3px;
		color: var(--accent-strong);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.brief dd {
		margin: 0;
		color: var(--ink);
		line-height: 1.65;
	}

	@media (max-width: 560px) {
		.brief div {
			grid-template-columns: 1fr;
			gap: 4px;
		}
	}

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

	:global(.case-body) ul.view-list {
		display: grid;
		gap: 10px;
		padding: 0;
		margin: 30px 0;
		list-style: none;
	}

	.view-list a {
		display: grid;
		grid-template-columns: minmax(120px, 0.34fr) 1fr auto;
		align-items: baseline;
		gap: 4px 20px;
		padding: 18px 20px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
		transition:
			border-color 180ms ease,
			transform 180ms ease;
	}

	.view-list a:hover {
		border-color: var(--accent);
		transform: translateY(-2px);
	}

	.view-list strong {
		font-size: 0.95rem;
	}

	.view-list span {
		color: var(--muted);
		font-size: 0.84rem;
		line-height: 1.55;
	}

	.view-list b {
		color: var(--accent-strong);
		font-size: 0.74rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	.prototype-link {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}

	.note-link {
		margin-top: 28px;
	}

	.note-link .text-link {
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
	}

	@media (max-width: 650px) {
		.finding-grid,
		.trust-grid {
			grid-template-columns: 1fr;
		}

		.view-list a {
			grid-template-columns: 1fr auto;
		}

		.view-list span {
			grid-column: 1 / -1;
			order: 3;
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
