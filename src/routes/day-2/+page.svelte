<script lang="ts">
	import { cookieCount } from '$lib/day-2/cookie-count';
	import { fade } from 'svelte/transition';
</script>

<h1>Day 2</h1>
<h2>Problem</h2>
<p>
	As the clock ticks down to Christmas Eve, Santa is preparing to eat all the cookies left by
	children all over the world. But amidst the holiday cheer, a small problem has arisen – how can we
	keep track of how many cookies Santa has munched! You’ve been tasked with creating a Cookie
	Counter which can show the tally of cookies munched. We should also be able to add, remove, and
	reset the count. Svelte Bot, in it’s wisdom, recommends exploring the dynamic world of Svelte
	transitions/animations to level up your creation. If you’re up for it, you could consider adding a
	feature that shows Santa’s mood based on the number of cookies eaten – maybe he gets a little
	merrier with each cookie!
</p>

<h2>Solution</h2>
<button on:click={cookieCount.increment}>+</button>
<button on:click={cookieCount.decrement}>-</button>
<button on:click={cookieCount.reset}>reset</button>
<p>Cookies: {$cookieCount.length}</p>
<div class="flex">
	{#each $cookieCount as cookie}
		<p transition:fade>{cookie}</p>
	{/each}
</div>

<style>
	.flex {
		display: flex;
		flex-wrap: wrap;
	}
</style>
