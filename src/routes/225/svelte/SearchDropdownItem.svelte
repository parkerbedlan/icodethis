<script lang="ts">
	export let category: string;
	export let checked: boolean;
</script>

<div>
	<input type="checkbox" id={category} bind:checked />
	<label for={category} class="ml-4 text-sm text-slate-600">{category}</label>
</div>
