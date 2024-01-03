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
