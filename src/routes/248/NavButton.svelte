<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import ChevronDown from '../../lib/icons/ChevronDown.svelte';
	import DropdownItem from './DropdownItem.svelte';
	import { clickOutside } from '../../lib/actions/clickOutside';

	export let label: string | undefined = undefined;
	export let isSelected: boolean = false;
	export let dropdownList: ComponentProps<DropdownItem>[] | undefined = undefined;
</script>

<div
	class="relative z-0 flex h-full items-center text-gray-400"
	use:clickOutside
	on:clickOutside={() => {
		if (dropdownList) isSelected = false;
	}}
>
	<button
		class={`flex h-full items-center gap-1 px-2 uppercase transition-all hover:bg-gray-800 hover:text-teal-300 active:scale-90 ${
			isSelected ? 'border-b-4 border-teal-300 text-teal-300' : 'pb-1'
		}`}
		on:click={() => {
			if (dropdownList) isSelected = !isSelected;
		}}
		on:click
	>
		{#if label}
			{label}
		{:else}
			<slot name="label" />
		{/if}
		{#if dropdownList}
			<ChevronDown class="w-4" strokeWidth="3" />
		{/if}
	</button>
	{#if dropdownList && isSelected}
		<div
			class="absolute -left-full -right-full top-full z-10 mx-auto flex w-48 animate-fade-in flex-col items-start rounded-lg bg-gray-600 py-2 text-gray-200 shadow-lg"
		>
			{#each dropdownList as dropdownItem}
				<DropdownItem {...dropdownItem} />
			{/each}
		</div>
	{/if}
</div>
