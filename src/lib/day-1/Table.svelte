<script lang="ts">
	import type { ChildList } from '$lib/day-1/child-list';

	export let list: ChildList;
</script>

<table>
	<thead>
		<tr>
			<td><b>Name</b></td>
			<td><b>Tally</b></td>
		</tr>
	</thead>
	<tbody>
		{#each list as { name, tally }}
			<tr><td>{name}</td><td>{tally}</td></tr>
		{/each}
	</tbody>
</table>
