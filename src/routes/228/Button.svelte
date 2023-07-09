<script lang="ts">
	const variants = ['primary', 'secondary'] as const;
	type ButtonVariant = (typeof variants)[number];
	export let variant: ButtonVariant;
</script>

{#if variant === 'primary'}
	<button
		class="rounded-xl bg-amber-500 px-6 py-3.5 text-white hover:bg-amber-600 active:shadow-[inset_0_0px_10px_0_rgb(0,0,0,0.5)]"
		><slot /></button
	>
{:else if variant === 'secondary'}
	<button
		class="rounded-xl px-6 py-3.5 text-white hover:bg-gray-500 active:shadow-[inset_0_0px_10px_0_rgb(0,0,0,0.5)]
    "><slot /></button
	>
{/if}
