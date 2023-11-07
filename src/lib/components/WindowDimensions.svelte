<script lang="ts">
	let innerWidth: number;
	let innerHeight: number;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="absolute left-1 top-1 z-50 rounded-full bg-gray-700 px-2 py-1 text-white">
	{innerWidth} x {innerHeight}
</div>
