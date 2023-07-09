<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import ChevronDown from '../../lib/icons/ChevronDown.svelte';
	import DropdownItem from './DropdownItem.svelte';
	import { clickOutside } from '../../lib/actions/clickOutside';

	export let label: string | undefined = undefined;
	export let isSelected: boolean = false;
	export let isDropdown: boolean = false;

	let dropdownClass =
		'absolute -left-full -right-full top-full z-10 mx-auto flex w-48 animate-fade-in flex-col items-start rounded-lg bg-gray-600 py-2 text-gray-200 shadow-lg';
</script>

<div
	class="relative z-0 flex h-full items-center text-gray-400"
	use:clickOutside
	on:clickOutside={() => {
		if (isDropdown) isSelected = false;
	}}
>
	<button
		class="group h-full"
		on:click={() => {
			if (isDropdown) isSelected = !isSelected;
		}}
		on:click
	>
		<div
			class={`flex h-full items-center gap-1 px-2 uppercase transition-all group-hover:bg-gray-800 group-hover:text-teal-300 group-active:scale-90 ${
				isSelected ? 'border-b-4 border-teal-300 text-teal-300' : 'pb-1'
			}`}
		>
			{#if label}
				{label}
			{:else}
				<slot name="label" />
			{/if}
			{#if isDropdown}
				<ChevronDown class="w-4" strokeWidth="3" />
			{/if}
		</div>
	</button>
	{#if isDropdown && isSelected}
		<slot
			name="dropdown"
			class_={'absolute -left-full -right-full top-full z-10 mx-auto flex w-fit animate-fade-in flex-col items-start rounded-lg bg-gray-600 py-2 text-gray-200 shadow-lg'}
		/>
	{/if}
</div>
