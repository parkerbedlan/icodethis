<script lang="ts">
	export let label: string;
	export let isSelected: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
</script>

<button class="group w-full" on:click={onClick}>
	<div
		class={`min-w-[12rem] px-4 py-1 text-left transition-all group-hover:bg-gray-500 group-active:scale-90 ${
			isSelected ? 'font-bold text-teal-300' : ''
		}`}
	>
		{label}
	</div></button
>
