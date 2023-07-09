<script lang="ts">
	export let label: string;
	export let isSelected: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
	export let customDisplay: boolean = false;
</script>

{#if customDisplay}
	<slot name="customDisplay" {onClick} />
{:else}
	<button
		class={`w-full px-4 py-1 text-left hover:bg-gray-500 active:scale-90 transition-all ${
			isSelected ? 'font-bold text-teal-300' : ''
		}`}
		on:click={onClick}>{label}</button
	>
{/if}
