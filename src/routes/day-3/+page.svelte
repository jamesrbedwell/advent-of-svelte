<script lang="ts">
	import { trips, type Parcel, balanceLoad, parcels } from '$lib/day-3/package-list.js';

	export let data;
	let { parcelList } = data;
	parcels.set(parcelList);

	function addTrip() {
		trips.update((t) => [...t, { parcels: [], totalWeight: 0 }]);
	}

	function addParcelToTrip(
		event: { currentTarget: EventTarget & HTMLFormElement },
		parcel: Parcel
	) {
		const formData = new FormData(event.currentTarget);

		const tripIndex = Number(formData.get(`parcel-${parcel.id}`)?.toString());

		parcels.update((pc) => {
			const toAdd = pc.find((p) => p.id === parcel.id);
			if (toAdd) {
				toAdd.isAdded = true;
			}
			return pc;
		});
		trips.update((t) => {
			const trip = t[tripIndex];
			trip.parcels.push(parcel);
			trip.totalWeight += parcel.weight;
			return t;
		});
	}
</script>

<h1>Day 3 - Jingle Bell Balancer</h1>
<h2>Problem</h2>
<p>
	With the elves now back busily crafting gifts and the festive atmosphere at its peak, attention
	shifts to the crucial task of loading Santa’s sleigh. However, Svelte Bot, with it’s precise
	calculations, has brought to light a critical limitation: Santa’s sleigh can carry a maximum load
	of only 100 kg per journey. Your mission is to help the Elves solve this crucial task. You’ll be
	in charge of creating a Sleigh Load Balancer (SLB™), a tool designed to ensure that the sleigh is
	packed efficiently without exceeding its maximum capacity. The Elves have kept a meticulous record
	of all the children and the weight of their presents in a JSON format. It’s your job to use this
	data to help keep the Sleigh within it’s new operating weight. You should create a tool where
	Santa can choose whose presents to include on his run. The tool should show the current sleigh
	load and if the maximum of 100kg has been exceeded. As a bonus you could include an exciting data
	visualisation, or even a drag and drop interface! Here is an example of what the Elves have
	stored:
</p>
<pre>{`[
    { name: 'Kurtis', weight: 8.2 },
    { name: 'Branson', weight: 4.31 },
    { name: 'Danielle', weight: 7.4 },
    { name: 'Wanda', weight: 7.04 },
    { name: 'Claud', weight: 4.93 },
    ...
]`}</pre>
<p>
	You can fetch this data by making a GET request to
	https://advent.sveltesociety.dev/data/2023/day-three.json
</p>

<h2>Solution</h2>
<h3>Trips</h3>
<button on:click={() => balanceLoad($parcels)}>Auto Sort</button>
<button on:click={addTrip}>Add trip</button>
<div class="trips">
	{#each $trips as trip, i}
		<article>
			<h4>Trip {i + 1} (weight: {trip.totalWeight})</h4>
			{#each trip.parcels as parcel}
				<p>{parcel.name}</p>
			{/each}
		</article>
	{/each}
</div>
<table>
	<thead>
		<tr><td><b>Name</b></td><td><b>Weight</b></td><td /></tr>
	</thead>
	<tbody>
		{#each $parcels.filter((p) => !p.isAdded) as parcel (parcel.id)}
			<tr
				><td>{parcel.name}</td><td>{parcel.weight}</td><td>
					<form on:submit|preventDefault={(e) => addParcelToTrip(e, parcel)}>
						<select name={`parcel-${parcel.id}`} id={`select-${parcel.id}`}>
							<option>Select a trip</option>
							{#each $trips as trip, i}
								<option value={i} disabled={trip.totalWeight + parcel.weight > 100}
									>Trip {i + 1}</option
								>
							{/each}</select
						><button>add</button>
					</form></td
				></tr
			>
		{/each}
	</tbody>
</table>

<style>
	.trips {
		display: flex;
		gap: 1rem;
	}
</style>
