<script lang="ts">
	export let title: string;
	export let isSoldOut: boolean;
	export let priceDollarsPerMonth: number;
	export let notes: string[];
</script>

<div class="relative grid h-96 w-80 auto-rows-auto grid-cols-1 rounded-lg bg-white px-12">
	<div
		class={`absolute inset-0 mx-auto h-fit w-fit rounded-b-xl bg-gray-200 px-10 pb-2 pt-1 font-semibold ${
			isSoldOut ? 'visible' : 'invisible'
		}`}
	>
		Sold Out
	</div>
	<div class="row-span-3 flex flex-col items-center justify-center gap-2 text-center">
		<h3 class="text-lg font-semibold tracking-wide">{title}</h3>
		<div class="flex items-end">
			<h1 class="text-4xl font-bold">
				${priceDollarsPerMonth.toLocaleString('en', { useGrouping: true })}
			</h1>
			<span class="text-gray-500 opacity-90">/mo</span>
		</div>
	</div>
	<div class="row-span-1 flex flex-col justify-center">
		<button
			class={`w-full rounded-lg py-2 font-semibold tracking-wide active:scale-[.97] ${
				isSoldOut
					? 'border border-gray-300 text-black hover:bg-gray-100'
					: 'bg-black text-white hover:bg-gray-800'
			}`}>{isSoldOut ? 'get on the waiting list' : 'add to cart'}</button
		>
	</div>
	<div class="row-span-1">
		<hr class="-mx-12" />
		<ul class="flex h-full flex-col justify-center text-sm leading-loose">
			{#each notes as note}
				<li><span class="text-lg text-[#ff2d71]">&#8226;</span> {note}</li>
			{/each}
		</ul>
	</div>
</div>
