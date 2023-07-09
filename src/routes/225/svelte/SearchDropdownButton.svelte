<script lang="ts">
	import ChevronUp from '../../../lib/icons/ChevronUp.svelte';
	import ChevronDown from '../../../lib/icons/ChevronDown.svelte';

	export let isDropdownOpen: boolean;
</script>

<button
	class=" grid h-4/5 w-4/5 place-items-center rounded-sm text-gray-800 hover:bg-gray-200 active:shadow-inner"
	type="button"
	on:click
>
	{#if isDropdownOpen}
		<ChevronUp class="h-5 w-5" />
	{:else}
		<ChevronDown class="h-5 w-5" />
	{/if}
</button>
