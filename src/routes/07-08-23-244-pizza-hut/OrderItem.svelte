<script lang="ts">
	import Minus from '../../lib/icons/Minus.svelte';
	import Plus from '../../lib/icons/Plus.svelte';
	import XMark from '../../lib/icons/XMark.svelte';

	export let product: string;
	export let size: 'Small' | 'Medium' | 'Large';
	export let quantity: number;
	export let priceDollars: number;
</script>

<li class="grid w-full grid-cols-6 items-center">
	<p class="col-span-3 text-[.625rem] font-semibold text-amber-950 opacity-90">
		{product} | {size}
	</p>
	<div class="col-span-2 flex items-center">
		<button
			class="mr-1 rounded-sm p-1 hover:bg-gray-100 active:scale-90"
			on:click={() => (quantity = Math.max(0, quantity - 1))}
			><Minus class="w-4 text-gray-500" /></button
		>
		<input
			type="number"
			class="form-input h-5 w-5 rounded-sm border border-solid border-gray-200 p-1 text-center text-[.625rem] font-bold [appearance:textfield] focus:shadow-inner focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
			bind:value={quantity}
			min={0}
		/>
		<button
			class="ml-1 rounded-sm p-1 hover:bg-gray-100 active:scale-90"
			on:click={() => (quantity += 1)}><Plus class="w-4 text-gray-500" /></button
		>
	</div>
	<div class="col-span-1 flex items-center justify-between">
		<p class="text-[.625rem] font-bold text-amber-950 opacity-90">${priceDollars}</p>
		<button
			class="ml-2 grid place-items-center rounded-full bg-gray-100 p-1 hover:bg-gray-200 active:scale-90"
			><XMark class="w-3 text-gray-500" /></button
		>
	</div>
</li>
