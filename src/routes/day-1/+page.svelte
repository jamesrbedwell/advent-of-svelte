<script lang="ts">
	import Table from '$lib/day-1/Table.svelte';
	import { type ChildList } from '$lib/day-1/child-list';
	export let data;

	const { list } = data;
	const { good, bad } = list.reduce(
		(prev, cur) => {
			const { good, bad } = prev;
			if (cur.tally > 0) return { good: [...good, cur], bad };
			return { good, bad: [...bad, cur] };
		},
		{ good: [] as ChildList, bad: [] as ChildList }
	);
</script>

<h1>Day 1</h1>
<h2>Problem</h2>
<p>
	The Elves have been tirelessly creating presents all year round. They’re right on schedule, but
	today they’ve run into a big problem; the ancient system for tracking who’s been naughty or nice
	is out of commission. With the hundreds of thousands of letters from children piling up alongside
	their records of good and bad deeds, the Elves are in dire need of a modern solution. Your mission
	is to build a system for the elves, enabling them to input names and tally each childs deeds to
	keep track of whether they’re good or bad. You could even categorise these automatically as
	“naughty” and “nice.” Fortunately, the elves have been meticulous in their record-keeping and have
	a backup of all the current data in JSON format. You’ll need to import this data into your newly
	developed system. Here is an example of what the Elves have stored:
</p>
<pre>
    {`[
	{ "name": "Emma", "tally": 32 },
	{ "name": "Ethan", "tally": 14 },
	{ "name": "Isabella", "tally": 70 },
	{ "name": "Jayden", "tally": -16 },
	{ "name": "Isabella", "tally": -59 },
	{ "name": "Noah", "tally": 19 },
	{ "name": "Mia", "tally": -37 },
	{ "name": "Will", "tally": -20 },
	{ "name": "Sam", "tally": -91 },
	{ "name": "Brittney", "tally": -98 }
	...
]`}</pre>
<p>
	You can fetch this data by making a GET request to
	https://advent.sveltesociety.dev/data/2023/day-one.json
</p>

<h2>Solution</h2>
<form method="POST">
	<label for="name">Name</label>
	<input id="name" name="name" type="text" autocomplete="off" required />
	<label for="tally">Tally</label>
	<input id="tally" name="tally" type="number" required />
</form>
<div class="lists">
	<section>
		<h3>Good</h3>
		<Table list={good} />
	</section>
	<section>
		<h3>Bad</h3>
		<Table list={bad} />
	</section>
</div>

<h2>Todo</h2>
<ul>
	<li>Add good/bad incrementor to each</li>
	<li>Animate</li>
	<li>Input number of good deeds and number of bad, and calc if good bad</li>
	<li>Styling</li>
</ul>

<style>
	.lists {
		display: flex;
		gap: 2rem;
	}
</style>
