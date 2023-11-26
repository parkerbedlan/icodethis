<script>
	import ChevronDown from 'lib/icons/ChevronDown.svelte';
	import FaceSmile from 'lib/icons/FaceSmile.svelte';
	import InformationCircle from 'lib/icons/InformationCircle.svelte';
</script>

<div class="flex min-h-screen flex-col overflow-hidden bg-white">
	<header
		class="flex h-16 items-center justify-end gap-8 bg-slate-800 px-1 text-center text-gray-200 sm:px-6"
	>
		<button class="flex gap-1"
			><div>EN</div>
			<ChevronDown class="mt-1 w-4" /></button
		>
		<a href="/">Contact</a>
		<a href="/">Log in</a>
		<a href="/" class="rounded-sm bg-orange-600 px-6 py-2">Sign Up</a>
	</header>
	<div class="container relative z-0 mx-auto h-full max-w-screen-xl flex-grow px-4">
		<main class="max-w-screen-sm">
			<div class="text-shadow mt-24 flex flex-col gap-4">
				<h1 class="text-shadow text-4xl font-semibold">
					Food delivery from the best restaurants in your town
				</h1>
				<h2 class="text-shadow text-lg">
					Food, drinks, and desserts available for delivery or pickup.
				</h2>
			</div>
			<form class="mt-16 flex h-fit rounded-sm shadow-md shadow-gray-400">
				<!-- TODO: make an actual address selection component that uses an api -->
				<input
					type="text"
					placeholder="Enter delivery address"
					class="form-input flex-grow rounded-l-sm border-none bg-gray-50 py-3 sm:px-6"
				/>
				<div>
					<button class="h-full rounded-r-sm bg-orange-500 px-1 uppercase text-white sm:px-6"
						>Find Food</button
					>
				</div>
			</form>
		</main>
		<img
			src="https://cdn.pixabay.com/photo/2016/06/10/11/55/kiwi-coctail-1447939_1280.jpg"
			alt="smoothie"
			class="absolute -right-1/3 bottom-0 -z-10 max-h-full"
		/>
	</div>
	<footer
		class="mt-auto flex h-10 items-center justify-between bg-gray-100 px-1 text-xs text-gray-500 sm:px-6"
	>
		<div class="flex flex-initial items-center gap-2">
			<a href="/">Terms of Privacy</a>
			<div>&middot;</div>
			<a href="/">Cookies</a>
			<div>&middot;</div>
			<a href="/">About</a>
			<div>&middot;</div>
			<a href="/">Contact</a>
		</div>
		<div class="flex flex-initial justify-center whitespace-nowrap">&copy; 2019</div>
		<div class="flex flex-initial justify-end gap-1 sm:gap-4">
			<button> <FaceSmile /></button>
			<button> <InformationCircle /></button>
		</div>
	</footer>
</div>

<style>
	.text-shadow {
		/* text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5); */
		text-shadow: 1px 1px 1px white;
	}
</style>
