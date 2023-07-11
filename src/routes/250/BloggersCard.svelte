<script>
	import Blogger from './Blogger.svelte';
	import ViewMoreLink from './ViewMoreLink.svelte';
</script>

<div class="bg-white px-6 py-4">
	<div class="flex items-center justify-between gap-4">
		<h1 class="text-xl font-bold">Top Bloggers This Week</h1>
		<ViewMoreLink>View All</ViewMoreLink>
	</div>
	<div class="flex flex-wrap justify-between gap-4 py-4">
		<Blogger />
		<Blogger />
		<Blogger />
	</div>
</div>
