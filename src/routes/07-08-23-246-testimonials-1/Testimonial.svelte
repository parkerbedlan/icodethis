<script lang="ts">
	export let quote: string;
	export let author: string;
</script>

<div class="z-0 h-96 w-96 border-4 border-solid border-black">
	<div
		class="relative bottom-4 right-4 z-10 h-full w-full overflow-y-auto bg-white px-10 py-10 shadow-lg"
	>
		<h1 class="text-3xl font-extrabold">&ldquo;</h1>
		<blockquote class="leading-loose">
			{quote}
		</blockquote>
		<h1 class="text-right text-3xl font-extrabold">&rdquo;</h1>
		<cite class="font-bold not-italic">{author}</cite>
	</div>
</div>
