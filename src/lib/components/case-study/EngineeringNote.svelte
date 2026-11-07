<script lang="ts">
	import SlideOver from '$lib/components/case-study/SlideOver.svelte';

	export let open = false;
</script>

<SlideOver bind:open kicker="Internal note to engineering" title="Engineering note">
	<p class="lede">
		What it would take to make this real, what we would need from the customer, what I faked, and
		where it breaks. One page.
	</p>

	<h3>The finding</h3>
	<p>
		The real shipping log records 5 partial shipments out of 83. In the model, using pallet heights
		I generated, 36 of 83 loads cannot finish in the planned order and a single swap rescues only 3
		more. 35 of those 36 are rotors and housings, which I treat as floor-only. So most of the
		problem is stacking rules, not sequence, and the sequencing advice matters in a narrow band of
		loads. That band is what is worth building for.
	</p>

	<h3>What we would build</h3>
	<ul>
		<li>
			<b>A pallet read at staging.</b> ID and height as each pallet enters the lane, from the existing
			cameras, joined to its shipment. Cameras installed for safety may not see height to the centimetre.
			That is the thing to prove.
		</li>
		<li>
			<b>The planned load order,</b> available before loading starts. A flat file refreshed each shift
			is enough to begin with. A live feed only if the reach window demands it.
		</li>
		<li>
			<b>The loader and recommendation engine from the prototype, as a service.</b> It is deterministic
			and replays a full load in about a millisecond, so it can re-plan after every pallet. The reasoning
			layer cites the evidence for each recommendation; it does not make the decision.
		</li>
		<li>
			<b>One message to the shift lead,</b> only inside the window where it can still be acted on, plus
			a log of what was advised, what the crew did and how the container ended up.
		</li>
	</ul>
	<p>Not an optimiser, and not vision alone. Rules decide; the camera supplies the inputs.</p>

	<h3>What we need from the customer</h3>
	<ul>
		<li>
			Packaging sign-off on what may be double-stacked. Only clips and trim are confirmed; I assume
			harness pallets stack.
		</li>
		<li>
			A tape-measured sample of live pallets per family, to bound the height error before any camera
			is trusted.
		</li>
		<li>
			The load order at staging time, and whether a crew can really pull a pallet forward and how
			far. Eight is my guess.
		</li>
		<li>Reason codes for the partial shipments, to separate stacking from every other cause.</li>
		<li>The container's usable inside height and the clearance rule crews actually follow.</li>
	</ul>

	<h3>What I deliberately faked</h3>
	<p>
		Real: shipment IDs, destinations, pallet counts, weights and the log notes. Everything below is
		simulated and labelled as such on every page.
	</p>
	<dl>
		<div>
			<dt>Heights</dt>
			<dd>Generated per product family from a mean and spread, seeded, clamped to 0.6–1.55 m</dd>
		</div>
		<div>
			<dt>Load order</dt>
			<dd>The export order, standing in for the real plan</dd>
		</div>
		<div>
			<dt>Stack limit</dt>
			<dd>2.62 m: 2.69 m container height less an assumed 7 cm clearance</dd>
		</div>
		<div>
			<dt>Reach</dt>
			<dd>The crew can pull any of the next 8 pallets forward</dd>
		</div>
		<div>
			<dt>Confidence</dt>
			<dd>85% bar below which advice is withheld</dd>
		</div>
		<div>
			<dt>Outcomes</dt>
			<dd>Counterfactual. The real log says the load was complete.</dd>
		</div>
	</dl>

	<h3>The biggest technical risk</h3>
	<p>
		It is not the loader. It is a few centimetres nobody has measured. I reran all 83 containers
		with the stack limit moved:
	</p>
	<table>
		<thead>
			<tr><th>Limit</th><th>Fit as planned</th><th>Fixable by a swap</th><th>Stuck</th></tr>
		</thead>
		<tbody>
			<tr><td>2.52 m</td><td>16</td><td>31</td><td>36</td></tr>
			<tr><td>2.57 m</td><td>28</td><td>19</td><td>36</td></tr>
			<tr class="base"><td>2.62 m</td><td>44</td><td>3</td><td>36</td></tr>
			<tr><td>2.67 m</td><td>46</td><td>1</td><td>36</td></tr>
		</tbody>
	</table>
	<p>
		The loads where advice helps swing from 3 to 31 on 10 cm of clearance, while the stuck count
		never moves because it is set by the floor-only rule. So both the size of the opportunity and
		the cost of bad advice, a pallet refused or damaged at the door, rest on measurements the
		customer does not have. Mitigation is cheap and layered: tape-measure a sample in week one,
		compare every camera reading against it, and withhold advice below the confidence bar.
	</p>

	<h3>Does it generalise?</h3>
	<p>
		Conditionally. It applies where outbound loads are built from units of different heights, there
		is a hard limit such as stack height or axle weight, and the order can still change before
		loading. It does not apply when every unit is the same height, when the order is fixed by the
		delivery route, or when machines load. That is testable from one flat export before anyone
		visits a site: does it carry the planned sequence and per-unit dimensions, and do loads vary? So
		it doubles as a sales qualification step. This is one customer's data and a prototype, so treat
		the pattern as a hypothesis until a second site shows it.
	</p>
</SlideOver>

<style>
	.lede {
		margin: 22px 0 6px;
		color: var(--ink);
		font-size: 1.02rem;
		line-height: 1.65;
	}

	h3 {
		margin: 36px 0 12px;
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	p,
	li {
		color: var(--muted);
		font-size: 0.94rem;
		line-height: 1.7;
	}

	p {
		margin: 0 0 14px;
	}

	ul {
		list-style: disc;
	}

	li::marker {
		color: var(--faint);
	}

	ul {
		display: grid;
		gap: 10px;
		padding-left: 20px;
		margin: 0 0 14px;
	}

	dl {
		display: grid;
		margin: 0 0 18px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
	}

	dl div {
		display: grid;
		grid-template-columns: 110px 1fr;
		gap: 16px;
		padding: 12px 16px;
		border-bottom: 1px solid var(--line);
		background: var(--page);
	}

	dl div:last-child {
		border-bottom: 0;
	}

	dt {
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding-top: 3px;
	}

	dd {
		margin: 0;
		color: var(--ink);
		font-size: 0.9rem;
		line-height: 1.55;
	}

	b {
		color: var(--ink);
		font-weight: 600;
	}

	table {
		width: 100%;
		margin: 0 0 16px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		border-collapse: separate;
		border-spacing: 0;
		overflow: hidden;
		font-size: 0.86rem;
	}

	th,
	td {
		padding: 9px 12px;
		border-bottom: 1px solid var(--line);
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	th:first-child,
	td:first-child {
		text-align: left;
	}

	th {
		color: var(--faint);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.68rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background: var(--page);
	}

	td {
		color: var(--muted);
	}

	tr:last-child td {
		border-bottom: 0;
	}

	tr.base td {
		color: var(--ink);
		font-weight: 600;
		background: var(--accent-soft);
	}

	@media (max-width: 480px) {
		dl div {
			grid-template-columns: 1fr;
			gap: 2px;
		}
	}
</style>
