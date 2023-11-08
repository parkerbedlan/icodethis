<script>
	import Check from '../../lib/icons/Check.svelte';
	import Star from '../../lib/icons/Star.svelte';
</script>

<div
	class="relative z-0 grid min-h-screen place-items-center overflow-hidden bg-[hsl(216,70%,13%)] text-white"
>
	<div class="flex max-w-3xl flex-wrap items-center justify-center gap-8">
		<div class="w-80 rounded-lg bg-[hsl(10,93%,67%)] px-8 py-6">
			<div class="relative z-0 flex items-center justify-around">
				<div
					class="z-10 grid h-10 w-10 place-items-center rounded-full border-4 border-solid border-[hsl(10,93%,67%)] bg-[#fbad9e]"
				>
					<Check strokeWidth="3" />
				</div>
				<div
					class="z-10 grid h-10 w-10 place-items-center rounded-full border-4 border-solid border-[hsl(10,93%,67%)] bg-white"
				>
					<div class=" h-3 w-3 rounded-full bg-[hsl(10,93%,67%)] bg-opacity-80" />
				</div>
				<div
					class="z-10 grid h-10 w-10 place-items-center rounded-full border-4 border-solid border-[hsl(10,93%,67%)] bg-[#fbad9e]"
				/>
				<div
					class="absolute inset-0 -z-10 mx-auto my-auto h-0.5 w-[calc(100%-4rem)] bg-[#fbad9e]"
				/>
			</div>
			<div class="flex items-center justify-between text-center text-sm">
				<div class="flex-1">Audio</div>
				<div class="flex-1">Video</div>
				<div class="flex-1">Performance</div>
			</div>
		</div>
		<div class="flex w-64 flex-col gap-4 rounded-lg bg-[#db627d] px-8 py-6">
			<div class="text-center">How do you rate our services?</div>
			<div>
				<div class="flex justify-center gap-1">
					<button
						class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
					>
						<Star isFilled />
					</button>
					<button
						class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
					>
						<Star isFilled />
					</button>
					<button
						class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
					>
						<Star />
					</button>
					<button
						class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
					>
						<Star />
					</button>
					<button
						class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
					>
						<Star />
					</button>
				</div>
				<div class="grid grid-cols-5 px-4 text-center text-xs">
					<div class="col-span-1">Bad</div>
					<div class="col-span-3" />
					<div class="col-span-1 -mx-5 whitespace-nowrap">Very good</div>
				</div>
			</div>
		</div>
		<div class="w-56 rounded-lg bg-[#9b348e] px-8 py-6">
			<div class="mb-4 flex gap-1">
				<div class="h-1 w-10 rounded-full bg-white" />
				<div class="h-1 w-10 rounded-full bg-white opacity-30" />
			</div>
			<div class="text-sm">Rate your experience</div>
			<div class="mt-6 flex justify-center gap-1 text-xs">
				<button
					class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
				>
					1
				</button>
				<button
					class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
				>
					2
				</button>
				<button
					class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
				>
					3
				</button>
				<button
					class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-20 duration-75 hover:bg-opacity-10 active:scale-90"
				>
					4
				</button>
				<button
					class="grid aspect-square w-10 place-items-center rounded-full bg-white bg-opacity-0 duration-75 hover:bg-opacity-10 active:scale-90"
				>
					5
				</button>
			</div>
		</div>
		<div class="flex w-56 flex-col gap-4 rounded-lg bg-[#8343d3] px-8 py-6">
			<div class="text-sm">What didn't worked properly?</div>
			<div class="flex select-none flex-col gap-2">
				<div class="flex items-center gap-2">
					<input id="blurry-video" type="checkbox" checked={false} class="checkbox border-white" />
					<label for="blurry-video" class="text-xs">Video was blurry</label>
				</div>
				<div class="flex items-center gap-2">
					<input
						id="sound-not-working"
						type="checkbox"
						checked={true}
						class="checkbox border-white"
					/>
					<label for="sound-not-working" class="text-xs">Sound wasn't working</label>
				</div>
				<div class="flex items-center gap-2">
					<input id="app-crashing" type="checkbox" checked={false} class="checkbox border-white" />
					<label for="app-crashing" class="text-xs">App was crashing</label>
				</div>
				<div class="flex items-center gap-2">
					<input id="other" type="checkbox" checked={false} class="checkbox border-white" />
					<label for="other" class="text-xs">Other</label>
				</div>
			</div>
		</div>
	</div>

	<div
		class="absolute bottom-12 left-12 -z-10 h-52 w-52 animate-pulse rounded-full bg-[hsl(216,70%,16%)]"
	/>
	<div
		class="absolute right-12 top-12 -z-10 h-28 w-28 animate-bounce rounded-full bg-[hsl(216,70%,16%)]"
	/>
	<div class="absolute left-12 right-12 top-12 -z-10 mx-auto h-24 w-24 animate-spin">
		<div class="h-20 w-20 animate-spin rounded-full bg-[hsl(216,70%,16%)]" />
	</div>
	<div
		class="absolute inset-80 left-40 -z-10 m-auto h-20 w-20 animate-ping rounded-full bg-[hsl(216,70%,16%)]"
	/>
	<div
		class="moveUpAndLeft absolute bottom-0 right-0 -z-10 mx-auto h-20 w-20 rounded-full bg-[hsl(216,70%,16%)]"
	/>
</div>

<style>
	@keyframes moveUpAndLeft {
		0% {
			transform: translateY(100%) translateX(100%);
		}
		100% {
			transform: translateY(-100vh) translateX(-100vw);
		}
	}

	/* Apply the animation to an element */
	.moveUpAndLeft {
		animation: moveUpAndLeft 5s linear infinite;
	}
</style>
