<script lang="ts">
	import SearchButton from './SearchButton.svelte';
	import SearchDropdown, { type Category } from './SearchDropdown.svelte';
	import SearchDropdownButton from './SearchDropdownButton.svelte';
	import SearchInput from './SearchInput.svelte';

	let value = '';
	let isDropdownOpen = true;
	let selectedCategories: Record<Category, boolean> = {
		Articles: true,
		Products: true,
		Services: true
	};
</script>

<form
	on:submit={() => alert(JSON.stringify({ value, isDropdownOpen, selectedCategories }, null, 2))}
>
	<div
		class="relative grid h-14 w-96 grid-cols-6 rounded-sm bg-gray-100 shadow-[0px_0px_10px_2px] shadow-gray-300"
	>
		<div class="grid place-items-center">
			<SearchDropdownButton on:click={() => (isDropdownOpen = !isDropdownOpen)} {isDropdownOpen} />
		</div>
		<div class="col-span-4 grid place-items-center p-1.5">
			<SearchInput bind:value />
		</div>
		<SearchButton />
	</div>
	{#if isDropdownOpen}
		<SearchDropdown bind:selectedCategories />
	{/if}
</form>
