<script lang="ts">
	export let name: string;
	export let emoji: string;
	export let selectedRating: string;
</script>

<input
	type="radio"
	id={name}
	name="rating"
	value={name}
	bind:group={selectedRating}
	class="hidden"
/>
<label
	for={name}
	class="cursor-pointer select-none border-2 border-solid bg-gray-50 px-3 py-1 text-center duration-75 hover:bg-gray-100 focus:outline-none active:scale-95"
>
	<span class="text-3xl">{emoji}</span>
	<p class="mt-1 text-xs text-gray-500">{name}</p>
</label>

<style>
	input[type='radio']:checked + label {
		background-color: hsl(194, 70%, 92%);
		border-color: hsl(196, 62%, 30%);
	}
</style>
