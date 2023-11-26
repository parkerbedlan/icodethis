<script lang="ts">
	export let monthlyPrice: number;
	export let planName: string;
	export let features: string[];
	export let blueMode: boolean = false;
</script>

<div
	class="w-80 rounded-lg border bg-[#2e3032] shadow-xl"
	class:text-blue-400={blueMode}
	class:text-red-400={!blueMode}
>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<div class="flex items-end">
			<div class="text-5xl font-bold">${monthlyPrice}</div>
			<div>/mo</div>
		</div>
		<div class="uppercase tracking-[.3em]">{planName}</div>
	</div>
	<div class="flex flex-col items-center gap-12 rounded-b-lg bg-[#1d1f20] pb-8 pt-12">
		<div class="flex flex-col gap-2 text-center text-gray-400">
			{#each features as feature}
				<div>{feature}</div>
			{/each}
		</div>
		<button
			class="w-fit rounded-full border px-8 py-2 uppercase duration-75 hover:bg-[#2e3032] active:scale-95"
			class:border-blue-400={blueMode}
			class:border-red-400={!blueMode}>Choose Plan</button
		>
	</div>
</div>
