<script>
	import BigCard from './BigCard.svelte';
	import BloggersCard from './BloggersCard.svelte';
	import SmallCard from './SmallCard.svelte';
</script>

<div class="relative inset-0 z-0 min-h-screen bg-gray-200">
	<div
		class="absolute inset-0 -z-10 h-0 w-0 border-b-0 border-l-[100vw] border-r-0 border-t-[100vh] border-solid border-[transparent_transparent_transparent_hsl(220,13%,91%)] bg-[hsl(220,13%,94%)]"
	/>
	<div class="px-12 py-12">
		<div class="flex w-full flex-wrap gap-6">
			<div
				class="max-w-1/2 flex grow basis-auto min-[824px]:h-[30rem] min-[824px]:items-end min-[824px]:justify-end"
			>
				<BigCard />
			</div>
			<div class="grow basis-auto">
				<div class="w-fit overflow-y-auto max-h-[30rem]">
					<div class="flex flex-col justify-end gap-6">
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
					</div>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-5 max-w-4xl">
			<BloggersCard />
		</div>
	</div>
</div>
