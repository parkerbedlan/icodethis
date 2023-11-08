<script>
	import Phone from '../../lib/components/Phone.svelte';
	import LightBulb from '../../lib/icons/LightBulb.svelte';
</script>

<div class="flex min-h-screen flex-wrap items-center justify-center gap-4 bg-gray-200 px-4 py-8">
	<Phone>
		<div class="flex h-full flex-col px-6">
			<div class="opacity-50">
				<div class="mx-auto h-20 w-1 bg-current" />
				<LightBulb class="mx-auto w-20 rotate-180" />
			</div>
			<div class="my-auto flex w-full flex-col gap-2">
				<div class="flex flex-col gap-1">
					<label for="username" class="block text-xs font-semibold uppercase tracking-wider"
						>username</label
					>
					<input id="username" type="text" placeholder="Enter username" class="form-input w-full" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="password" class="block text-xs font-semibold uppercase tracking-wider"
						>password</label
					>
					<input id="password" type="text" placeholder="Enter username" class="form-input w-full" />
				</div>
				<button
					class="mt-4 rounded-sm bg-sky-700 py-2 uppercase text-white shadow-md duration-75 hover:bg-sky-800 active:scale-95"
					>Log in</button
				>
			</div>
		</div>
	</Phone>
	<Phone>
		<div class="flex h-full flex-col bg-sky-900 px-6 py-10">
			<button
				class="mx-auto mt-auto grid h-32 w-32 place-items-center rounded-full border-8 border-solid border-sky-800 bg-sky-950 text-2xl font-bold text-sky-700 duration-75 hover:bg-sky-900 active:scale-95"
			>
				OFF
			</button>
		</div>
	</Phone>
	<Phone>
		<div class="flex h-full flex-col px-6 py-10">
			<div class="mx-auto mt-auto flex w-full flex-col items-center gap-4">
				<div class="flex w-full items-center">
					<LightBulb class="w-6 text-slate-500" />
					<input
						type="range"
						min="0"
						max="100"
						value="40"
						class="range range-primary w-full"
					/><LightBulb class="w-6 text-yellow-500" />
				</div>
				<button
					class=" grid h-32 w-32 place-items-center rounded-full border-8 border-solid border-slate-200 bg-slate-50 text-2xl font-bold text-sky-950 shadow-sm duration-75 hover:bg-slate-100 active:scale-95"
				>
					ON
				</button>
			</div>
		</div>
	</Phone>
</div>
