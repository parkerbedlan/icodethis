<!-- https://i.imgur.com/iu576yZ.png -->

<script>
	import { Body } from 'svelte-body';
	import Navbar from './Navbar.svelte';
	import MagnifyingGlass from '../../lib/icons/MagnifyingGlass.svelte';
</script>

<Body
	class="relative min-h-screen bg-[url(https://placekitten.com/4000/2000)] bg-cover bg-fixed bg-top text-white"
/>
<div class="relative min-h-screen bg-gray-700 bg-opacity-80 pt-20 text-center">
	<Navbar />
	<div class="mt-40 flex flex-col items-center gap-16">
		<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
			<h1 class="my-6 text-5xl font-bold">Explore the World</h1>
			<p class="leading-relaxed">
				One of the keys to reaching your goals is to eliminate any escape routes. It is tempting to
				retreat to safety and comfort when challenges and difficulties arise. To avoid turning
				around and abandoning your goals, you must make going forward more compelling than going
				back.
			</p>
		</div>
		<form class="flex h-14 w-4/5 max-w-6xl rounded-md bg-gray-400 bg-opacity-40 shadow-lg">
			<div class="grid place-items-center rounded-l-md border-y border-l border-gray-400 pl-4">
				<MagnifyingGlass class="h-9 w-9" />
			</div>
			<!-- svelte-ignore a11y-autofocus -->
			<input
				class="w-full border-y border-gray-400 bg-transparent px-3 text-lg font-medium outline-none placeholder:text-gray-300"
				placeholder="Enter country, city or address"
				autofocus
			/>
			<button
				class="ml-auto rounded-r-md bg-blue-500 px-4 hover:bg-blue-600 active:shadow-[inset_0_0px_10px_0_rgb(0,0,0,0.5)] md:px-8 lg:px-12"
				type="submit">Search</button
			>
		</form>
	</div>
</div>
