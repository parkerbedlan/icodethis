<script context="module" lang="ts">
	const categories = ['Articles', 'Products', 'Services'] as const;
	export type Category = (typeof categories)[number];
</script>

<script lang="ts">
	import SearchDropdownItem from './SearchDropdownItem.svelte';

	export let selectedCategories: Record<Category, boolean>;
</script>

<menu
	class="-z-10 flex w-1/2 select-none flex-col gap-4 rounded-sm bg-gray-100 px-6 py-3 shadow-[0px_0px_10px_2px] shadow-gray-300"
>
	{#each categories as category}
		<SearchDropdownItem {category} bind:checked={selectedCategories[category]} />
	{/each}
</menu>
