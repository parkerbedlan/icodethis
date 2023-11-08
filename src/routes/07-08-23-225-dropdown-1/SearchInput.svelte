<script lang="ts">
	export let value: string;
</script>

<!-- ignoring a11y-autofocus for the sake of the demo. irl make it conditional -->
<!-- svelte-ignore a11y-autofocus -->
<input
	type="text"
	class="h-full w-full rounded-sm bg-white px-4 text-blue-900 outline-cyan-400 focus:outline focus:outline-1"
	placeholder="Search"
	autofocus
	bind:value
/>
