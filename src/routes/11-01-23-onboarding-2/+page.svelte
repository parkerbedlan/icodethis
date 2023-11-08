<script>
	import DevicePhoneMobile from '../../lib/icons/DevicePhoneMobile.svelte';
	import MagnifyingGlass from '../../lib/icons/MagnifyingGlass.svelte';
	import MapPin from '../../lib/icons/MapPin.svelte';

	let step = 0;

	const steps = [
		{
			title: 'Find campings near you',
			description: 'Olutpat mattis suspendisse varius lorem massa. In eget laoreet sollicitudin mi.'
		},
		{
			title: 'Reserve directly from your phone',
			description:
				'Blandidt amet adipiscing sed etiam, a sapien molestie odio viverra quam, vestibulum.'
		},
		{
			title: 'Get directions to the locations',
			description:
				'Felis donec fusce nec amet ipsum etiam, nascetur molestias at fermentum felis felis.'
		}
	];
</script>

<!-- https://9elements.github.io/fancy-border-radius/ -->

<div class="flex min-h-screen flex-wrap items-center justify-center gap-8 bg-blue-200 px-4 py-8">
	<div
		class="relative z-0 flex h-[30rem] w-72 flex-col gap-4 overflow-hidden rounded-lg bg-white text-center shadow-lg"
	>
		<div
			class="absolute inset-0 -left-52 -right-52 -top-16 -z-10 mx-auto h-80 w-80 rounded-[10%_10%_41%_59%_/_10%_10%_31%_29%] bg-blue-100"
		/>
		<div
			class="absolute inset-0 -left-52 -right-56 -top-14 -z-20 mx-auto h-80 w-80 rounded-[10%_10%_41%_59%_/_10%_10%_31%_29%] bg-blue-50"
		/>
		<div class="flex h-full flex-col items-center gap-6 rounded-t-lg pt-16">
			{#if step === 0}
				<MagnifyingGlass class="w-20" />
			{:else if step === 1}
				<DevicePhoneMobile class="w-20" />
			{:else if step === 2}
				<MapPin class="w-20" />
			{/if}
			<h1 class="line-clamp-2 w-7/12 text-xl font-bold text-blue-700">{steps[step].title}</h1>
		</div>
		<div class="flex h-full flex-col items-center gap-8 rounded-b-lg py-6">
			<p class="w-5/6 text-sm">
				{steps[step].description}
			</p>
			<div class="flex gap-1">
				{#each [...Array(3)] as _, index}
					<div
						class="h-1 w-1 rounded-full"
						class:bg-blue-700={step === index}
						class:bg-blue-100={step !== index}
					/>
				{/each}
			</div>
			<div class="mt-auto flex gap-4 font-bold">
				<button
					class="grid h-10 w-24 place-items-center rounded-full bg-slate-100 text-slate-500 duration-75 hover:bg-slate-200 active:scale-95"
					on:click={() => (step = Math.max(step - 1, 0))}>Back</button
				>
				<button
					class="grid h-10 w-24 place-items-center rounded-full bg-blue-700 text-slate-100 duration-75 hover:bg-blue-800 active:scale-95"
					on:click={() => (step = Math.min(step + 1, 2))}>Next</button
				>
			</div>
		</div>
	</div>
</div>
