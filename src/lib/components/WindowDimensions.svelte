<script lang="ts">
	let innerWidth: number;
	let innerHeight: number;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="absolute top-1 left-1 bg-gray-700 text-white py-1 px-2 rounded-full">{innerWidth} x {innerHeight}</div>
