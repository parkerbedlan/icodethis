<script lang="ts">
	import { Body } from 'svelte-body';

	let showMore = false;
</script>

<Body class="relative min-h-screen pb-10" />

<div>
	<input type="checkbox" bind:checked={showMore} id="show-more" />
	<label id="showMore" class="select-none" for="show-more"> Show More </label>
</div>

<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
{#if showMore}
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
	<h1 class="p-5 text-9xl">Welcome to SvelteKit</h1>
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<footer class="absolute bottom-0 grid h-10 w-full place-items-center bg-red-500 text-black">
	This is a footer!
</footer>
