<script>
	import Details from './Details.svelte';
	import Header from './Header.svelte';
</script>

<div
	class="flex min-h-screen items-center justify-center overflow-hidden bg-[url(https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-fixed bg-center"
>
	<div
		class="relative left-12 flex scale-75 text-slate-500 sm:scale-100 md:scale-125 lg:scale-150 xl:scale-[2]"
	>
		<div
			class="left-ticket relative flex h-72 w-96 flex-col justify-around overflow-hidden px-8 py-6"
		>
			<Header />
			<Details />
			<div class="text-[0.625rem] leading-tight text-slate-400">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus enim possimus
				repellendus <strong>quod</strong>, nesciunt blanditiis, eos <strong>cupiditate</strong> aut at
				nulla laudantium dolores.
			</div>
		</div>
		<div
			class="right-ticket relative right-12 top-12 flex h-48 w-72 -rotate-90 flex-col justify-between"
		>
			<div class="-mb-6 scale-50">
				<Header />
			</div>
			<div class="scale-75">
				<Details />
			</div>
			<img
				alt="barcode"
				src="https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926_1280.png"
				class="mx-auto h-16 w-4/5"
			/>
			<div class="absolute left-4 right-4 top-0 border-t-2 border-dashed border-slate-400" />
		</div>
	</div>
</div>

<style>
	/* googled "css raffle ticket" and found this: https://codepen.io/ArnHack/pen/ygQOYd */
	.left-ticket {
		background-image: radial-gradient(circle at top left, white 10px, white 10px),
			radial-gradient(circle at top right, transparent 10px, white 10px),
			radial-gradient(circle at bottom left, white 10px, white 10px),
			radial-gradient(circle at bottom right, transparent 10px, white 10px);
		box-shadow: 0 10px 14px -12px rgba(45, 212, 191, 0.8),
			0 -10px 14px -12px rgba(45, 212, 191, 0.8), -10px 0px 14px -12px rgba(45, 212, 191, 0.8);
		background-size: 50% 50%;
		background-position: top left, top right, bottom left, bottom right;
		background-repeat: no-repeat;
	}
	.right-ticket {
		background-image: radial-gradient(circle at top left, transparent 10px, white 10px),
			radial-gradient(circle at top right, transparent 10px, white 10px),
			radial-gradient(circle at bottom left, white 10px, white 10px),
			radial-gradient(circle at bottom right, white 10px, white 10px);
		box-shadow: 0 10px 14px -12px rgba(45, 212, 191, 0.8),
			-10px 0px 14px -12px rgba(45, 212, 191, 0.8), 10px 0px 14px -12px rgba(45, 212, 191, 0.8);
		background-size: 50% 50%;
		background-position: top left, top right, bottom left, bottom right;
		background-repeat: no-repeat;
	}
</style>
